import express from 'express';
import mongoose from 'mongoose';
import Review from '../models/Review.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Customer from '../models/Customer.js';
import { isCustomerCareManager } from '../middleware/auth.js';

const router = express.Router();

const isCustomerAuthenticated = (req, res, next) => {
  if (!req.session?.customerId) {
    return res.status(401).json({ message: 'Please login to continue' });
  }
  return next();
};

const normalizeComment = (value) => {
  if (typeof value !== 'string') return '';
  return value.trim();
};

// Public: get review summary for a list of products.
router.get('/summary', async (req, res) => {
  try {
    const raw = typeof req.query.productIds === 'string' ? req.query.productIds : '';
    const productIds = raw
      .split(',')
      .map((id) => id.trim())
      .filter((id) => mongoose.Types.ObjectId.isValid(id));

    if (!productIds.length) {
      return res.json({ summary: {} });
    }

    const objectIds = productIds.map((id) => new mongoose.Types.ObjectId(id));

    const grouped = await Review.aggregate([
      {
        $match: {
          productId: { $in: objectIds }
        }
      },
      {
        $group: {
          _id: '$productId',
          avgRating: { $avg: '$rating' },
          totalReviews: { $sum: 1 }
        }
      }
    ]);

    const summary = {};
    grouped.forEach((item) => {
      summary[item._id.toString()] = {
        avgRating: Number((item.avgRating || 0).toFixed(1)),
        totalReviews: item.totalReviews || 0
      };
    });

    return res.json({ summary });
  } catch (error) {
    return res.status(500).json({ message: 'Error loading review summary', error: error.message });
  }
});

// Public: show product reviews to any customer/visitor.
router.get('/product/:productId', async (req, res) => {
  try {
    const requestedProductId = req.params.productId;

    if (!mongoose.Types.ObjectId.isValid(requestedProductId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(requestedProductId).select('_id');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const reviews = await Review.find({ productId: requestedProductId })
      .select('customerName productName rating comment careReply createdAt updatedAt')
      .sort({ createdAt: -1 });

    const totalReviews = reviews.length;
    const avgRating = totalReviews > 0
      ? Number((reviews.reduce((acc, item) => acc + item.rating, 0) / totalReviews).toFixed(1))
      : 0;

    return res.json({
      totalReviews,
      avgRating,
      reviews
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error loading reviews', error: error.message });
  }
});

// Customer dashboard: get ordered items and existing review state.
router.get('/customer/eligible-items', isCustomerAuthenticated, async (req, res) => {
  try {
    const orders = await Order.find({
      customerId: req.session.customerId,
      status: { $nin: ['Cancelled', 'Refunded'] }
    }).sort({ createdAt: -1 });

    if (!orders.length) {
      return res.json([]);
    }

    const reviewableItems = [];
    const orderIds = [];
    const productIds = [];

    orders.forEach((order) => {
      orderIds.push(order._id);
      (order.items || []).forEach((item) => {
        if (!item.productId) return;
        const productIdString = item.productId.toString();
        productIds.push(productIdString);
        reviewableItems.push({
          orderId: order._id.toString(),
          orderNumber: order.orderNumber,
          orderStatus: order.status,
          orderDate: order.createdAt,
          productId: productIdString,
          productName: item.name,
          productImage: item.imageUrl || '',
          quantity: item.quantity,
          unitPrice: item.price
        });
      });
    });

    const reviews = await Review.find({
      customerId: req.session.customerId,
      orderId: { $in: orderIds },
      productId: { $in: productIds }
    }).select('_id orderId productId rating comment careReply updatedAt createdAt');

    const reviewByKey = new Map(
      reviews.map((review) => [
        `${review.orderId.toString()}_${review.productId.toString()}`,
        review
      ])
    );

    const payload = reviewableItems.map((item) => {
      const key = `${item.orderId.toString()}_${item.productId.toString()}`;
      const review = reviewByKey.get(key);
      return {
        ...item,
        review: review
          ? {
              _id: review._id,
              rating: review.rating,
              comment: review.comment,
              careReply: review.careReply,
              createdAt: review.createdAt,
              updatedAt: review.updatedAt
            }
          : null
      };
    });

    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ message: 'Error loading reviewable items', error: error.message });
  }
});

// Customer: create or update a review for an ordered item.
router.post('/', isCustomerAuthenticated, async (req, res) => {
  try {
    const { orderId, productId, rating, comment } = req.body;

    if (!orderId || !productId) {
      return res.status(400).json({ message: 'orderId and productId are required' });
    }

    if (!mongoose.Types.ObjectId.isValid(orderId) || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid orderId or productId' });
    }

    const parsedRating = Number(rating);
    if (!Number.isInteger(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      return res.status(400).json({ message: 'Rating must be an integer between 1 and 5' });
    }

    const order = await Order.findOne({
      _id: orderId,
      customerId: req.session.customerId,
      status: { $nin: ['Cancelled', 'Refunded'] }
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found or not eligible for review' });
    }

    const hasOrderedProduct = (order.items || []).some(
      (item) => item.productId && item.productId.toString() === productId
    );

    if (!hasOrderedProduct) {
      return res.status(400).json({ message: 'This product is not part of the selected order' });
    }

    const customer = await Customer.findById(req.session.customerId).select('fullName email');
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const normalizedComment = normalizeComment(comment);

    const orderedItem = (order.items || []).find(
      (item) => item.productId && item.productId.toString() === productId
    );

    const productSnapshotName = orderedItem?.name || (await Product.findById(productId).select('name'))?.name || 'Product';

    const review = await Review.findOneAndUpdate(
      { customerId: req.session.customerId, orderId, productId },
      {
        $set: {
          customerName: customer.fullName || customer.email,
          productName: productSnapshotName,
          rating: parsedRating,
          comment: normalizedComment
        }
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true
      }
    );

    return res.status(200).json({
      message: 'Review saved successfully',
      review
    });
  } catch (error) {
    const duplicateKey = error?.code === 11000;
    if (duplicateKey) {
      return res.status(409).json({ message: 'Review already exists for this item' });
    }
    return res.status(500).json({ message: 'Error saving review', error: error.message });
  }
});

// Customer: delete own review.
router.delete('/:reviewId', isCustomerAuthenticated, async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({
      _id: req.params.reviewId,
      customerId: req.session.customerId
    });

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    return res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting review', error: error.message });
  }
});

// Customer Care: list all reviews for moderation/replies.
router.get('/staff/all', isCustomerCareManager, async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate('productId', 'name image imageUrl category')
      .sort({ createdAt: -1 });

    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ message: 'Error loading review list', error: error.message });
  }
});

// Customer Care: add/update reply to a review.
router.patch('/:reviewId/reply', isCustomerCareManager, async (req, res) => {
  try {
    const replyComment = normalizeComment(req.body.comment);

    if (!replyComment) {
      return res.status(400).json({ message: 'Reply comment is required' });
    }

    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review.careReply = {
      comment: replyComment,
      staffId: req.session.staffId,
      staffName: req.session.fullName || 'Customer Care',
      createdAt: review.careReply?.createdAt || new Date(),
      updatedAt: new Date()
    };

    await review.save();

    return res.json({
      message: 'Reply saved successfully',
      review
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error saving reply', error: error.message });
  }
});

export default router;
