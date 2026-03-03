import express from 'express';
import Order from '../models/Order.js';
import Customer from '../models/Customer.js';

const router = express.Router();

// Middleware to check if customer is authenticated
const isCustomerAuthenticated = (req, res, next) => {
  if (!req.session.customerId) {
    return res.status(401).json({ message: 'Please login to continue' });
  }
  next();
};

// POST /api/orders - Create new order
router.post('/', isCustomerAuthenticated, async (req, res) => {
  try {
    const { items, deliveryAddress, phoneNumber, paymentMethod, orderNotes, subtotal, tax, total } = req.body;

    // Validate required fields
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must have at least one item' });
    }
    if (!deliveryAddress || !phoneNumber || !paymentMethod) {
      return res.status(400).json({ message: 'Please provide all required delivery details' });
    }

    // Get customer details
    const customer = await Customer.findById(req.session.customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Create new order
    const newOrder = new Order({
      customerId: customer._id,
      customerName: customer.fullName,
      customerEmail: customer.email,
      items,
      subtotal,
      tax,
      total,
      deliveryAddress,
      phoneNumber,
      paymentMethod,
      orderNotes,
      status: 'Pending'
    });

    await newOrder.save();

    // Award loyalty points (1 point per 100 rupees spent)
    const pointsEarned = Math.floor(total / 100);
    if (pointsEarned > 0) {
      customer.loyaltyPoints += pointsEarned;
      await customer.save();
    }

    res.status(201).json({
      message: 'Order placed successfully',
      orderNumber: newOrder.orderNumber,
      orderId: newOrder._id,
      pointsEarned
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error while creating order' });
  }
});

// GET /api/orders/my-orders - Get customer's orders
router.get('/my-orders', isCustomerAuthenticated, async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.session.customerId })
      .sort({ createdAt: -1 });
    
    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Server error while fetching orders' });
  }
});

// GET /api/orders/:id - Get specific order details
router.get('/:id', isCustomerAuthenticated, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      customerId: req.session.customerId
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Get order details error:', error);
    res.status(500).json({ message: 'Server error while fetching order details' });
  }
});

// PATCH /api/orders/:id/cancel - Cancel an order (only if status is Pending)
router.patch('/:id/cancel', isCustomerAuthenticated, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      customerId: req.session.customerId
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status !== 'Pending') {
      return res.status(400).json({ message: 'Only pending orders can be cancelled' });
    }

    order.status = 'Cancelled';
    order.updatedAt = Date.now();
    await order.save();

    // Refund loyalty points if any were awarded
    const pointsAwarded = Math.floor(order.total / 100);
    if (pointsAwarded > 0) {
      const customer = await Customer.findById(req.session.customerId);
      if (customer) {
        customer.loyaltyPoints = Math.max(0, customer.loyaltyPoints - pointsAwarded);
        await customer.save();
      }
    }

    res.json({ message: 'Order cancelled successfully', order });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ message: 'Server error while cancelling order' });
  }
});

// GET /api/orders - Get all orders (for staff/admin)
router.get('/', async (req, res) => {
  try {
    // Check if user is staff
    if (!req.session.staffId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { status } = req.query;
    let query = {};
    
    if (status) {
      query.status = status;
    }

    const orders = await Order.find(query)
      .sort({ createdAt: -1 });
    
    res.json(orders);
  } catch (error) {
    console.error('Get all orders error:', error);
    res.status(500).json({ message: 'Server error while fetching orders' });
  }
});

// PATCH /api/orders/:id/status - Update order status (staff only)
router.patch('/:id/status', async (req, res) => {
  try {
    // Check if user is staff
    if (!req.session.staffId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { status } = req.body;
    
    if (!['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    order.updatedAt = Date.now();
    await order.save();

    res.json({ message: 'Order status updated successfully', order });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Server error while updating order status' });
  }
});

export default router;
