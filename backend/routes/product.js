import express from 'express';
import Product from '../models/Product.js';
import { isAuthenticated, isProductManager } from '../middleware/auth.js';
import Staff from '../models/Staff.js';

const router = express.Router();

// Get inventory-backed stock options for product manager (protected)
router.get('/stock-options', isProductManager, async (req, res) => {
  try {
    const stockItems = await Product.find({
      stockQuantity: { $gt: 0 },
      productStatus: 'Draft'
    })
      .select('name category stockQuantity kType weight supplier image productStatus')
      .sort({ updatedAt: -1 });

    res.json(stockItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stock options', error: error.message });
  }
});

// Get product statistics (protected route) - Must be before /:id route
router.get('/stats/overview', isAuthenticated, async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const featuredProducts = await Product.countDocuments({ featured: true });
    const inStockProducts = await Product.countDocuments({ availabilityStatus: 'In Stock' });
    
    // Get products created this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const newThisWeek = await Product.countDocuments({ createdAt: { $gte: oneWeekAgo } });

    // Get category count
    const categories = await Product.distinct('category');

    res.json({
      totalProducts,
      featuredProducts,
      inStockProducts,
      newThisWeek,
      totalCategories: categories.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching statistics', error: error.message });
  }
});

// Get all products (public route)
router.get('/', async (req, res) => {
  try {
    const { category, kType, karat, availabilityStatus, isAvailable, featured, productStatus, isAvailableForSale, isVisibleToCustomers, q } = req.query;
    
    let filter = {};
    if (category) filter.category = category;
    if (productStatus) filter.productStatus = productStatus;
    // Support both kType and karat parameters
    if (kType) filter.kType = kType;
    if (karat) filter.kType = karat;
    // Support both availabilityStatus and isAvailable parameters
    if (availabilityStatus) filter.availabilityStatus = availabilityStatus;
    if (isAvailable !== undefined) {
      if (isAvailable === 'true') {
        filter.availabilityStatus = 'In Stock';
        filter.isAvailableForSale = true;
      } else {
        filter.$or = [
          { availabilityStatus: { $ne: 'In Stock' } },
          { isAvailableForSale: false }
        ];
      }
    }
    if (featured) filter.featured = featured === 'true';
    if (isAvailableForSale !== undefined) filter.isAvailableForSale = isAvailableForSale === 'true';
    if (isVisibleToCustomers !== undefined) filter.isVisibleToCustomers = isVisibleToCustomers === 'true';

    // Public storefront should not receive hidden products
    if (!req.session?.staffId) {
      filter.isVisibleToCustomers = true;
      filter.productStatus = 'Active';
    }

    if (q && q.trim()) {
      const safeQuery = q.trim();
      const searchOr = [
        { name: { $regex: safeQuery, $options: 'i' } },
        { category: { $regex: safeQuery, $options: 'i' } },
        { description: { $regex: safeQuery, $options: 'i' } }
      ];

      if (filter.$or) {
        const existingOr = filter.$or;
        delete filter.$or;
        filter.$and = [
          { $or: existingOr },
          { $or: searchOr }
        ];
      } else {
        filter.$or = searchOr;
      }
    }

    const products = await Product.find(filter)
      .populate('createdBy', 'fullName email')
      .sort({ createdAt: -1 });
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Toggle customer visibility (product manager only)
router.patch('/:id/customer-visibility', isProductManager, async (req, res) => {
  try {
    const { isVisibleToCustomers } = req.body;

    if (typeof isVisibleToCustomers !== 'boolean') {
      return res.status(400).json({ message: 'isVisibleToCustomers must be boolean' });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.isVisibleToCustomers = isVisibleToCustomers;
    await product.save();

    res.json({ message: 'Customer visibility updated', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating customer visibility', error: error.message });
  }
});

// Toggle sale availability (product manager only)
router.patch('/:id/availability', isProductManager, async (req, res) => {
  try {
    const { isAvailableForSale } = req.body;

    if (typeof isAvailableForSale !== 'boolean') {
      return res.status(400).json({ message: 'isAvailableForSale must be boolean' });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (isAvailableForSale) {
      if ((product.stockQuantity || 0) > 0) {
        product.isAvailableForSale = true;
        product.availabilityStatus = 'In Stock';
      } else {
        product.isAvailableForSale = false;
        product.availabilityStatus = 'Out of Stock';
      }
    } else {
      // Explicitly mark as out of stock when Product Manager sets unavailable.
      product.isAvailableForSale = false;
      product.availabilityStatus = 'Out of Stock';
    }
    await product.save();

    if (isAvailableForSale && (product.stockQuantity || 0) <= 0) {
      return res.json({ message: 'Cannot mark available because stock is 0. Product remains out of stock.', product });
    }

    res.json({ message: 'Availability updated', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating availability', error: error.message });
  }
});

// Get single product (public route)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('createdBy', 'fullName email');
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Customers can only view active + visible products.
    if (!req.session?.staffId && (!product.isVisibleToCustomers || product.productStatus !== 'Active')) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
});

// Create new product (protected route - requires Product Manager role)
// Product Manager can ONLY set: name, description, image, category, featured
router.post('/', isProductManager, async (req, res) => {
  try {
    const {
      stockProductId,
      name,
      description,
      image,
      category,
      featured,
      taxPercentage
    } = req.body;

    // Debug logging
    console.log('Creating product with data:', {
      name, category,
      createdBy: req.session.staffId,
      sessionData: req.session
    });

    // Check if staff exists
    if (!req.session.staffId) {
      return res.status(401).json({ message: 'User session invalid. Please log in again.' });
    }

    const staff = await Staff.findById(req.session.staffId);
    if (!staff) {
      return res.status(401).json({ message: 'User not found. Please log in again.' });
    }

    // If product manager selected an existing inventory stock item,
    // update and publish that same product instead of creating a duplicate.
    if (stockProductId) {
      const stockProduct = await Product.findById(stockProductId);
      if (!stockProduct) {
        return res.status(404).json({ message: 'Selected stock item not found' });
      }

      if (description) stockProduct.description = description;
      if (image) stockProduct.image = image;
      if (featured !== undefined) stockProduct.featured = featured;
      if (taxPercentage !== undefined) stockProduct.taxPercentage = Math.max(0, Math.min(100, Number(taxPercentage) || 0));

      // Keep inventory values as source of truth, but allow optional overrides.
      if (name) stockProduct.name = name;
      if (category) stockProduct.category = category;

      stockProduct.productStatus = 'Active';
      await stockProduct.save();

      const populatedStockProduct = await Product.findById(stockProduct._id)
        .populate('createdBy', 'fullName email');

      return res.status(200).json(populatedStockProduct);
    }

    // Validate required fields for brand-new product creation
    if (!name || !description || !image || !category) {
      return res.status(400).json({ message: 'Please provide name, description, image, and category' });
    }

    const product = new Product({
      name,
      description,
      image,
      category,
      featured: featured || false,
      taxPercentage: Math.max(0, Math.min(100, Number(taxPercentage) || 0)),
      productStatus: 'Draft',
      createdBy: req.session.staffId
    });

    await product.save();
    
    const populatedProduct = await Product.findById(product._id)
      .populate('createdBy', 'fullName email');
    
    console.log('Product created successfully:', populatedProduct._id);
    res.status(201).json(populatedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

// Update product basic info (protected route - requires Product Manager role)
// Product Manager can ONLY update: name, description, image, category, featured
router.put('/:id', isProductManager, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const {
      name,
      description,
      image,
      category,
      featured,
      taxPercentage
    } = req.body;

    if (name) product.name = name;
    if (description) product.description = description;
    if (image) product.image = image;
    if (category) product.category = category;
    if (featured !== undefined) product.featured = featured;
    if (taxPercentage !== undefined) product.taxPercentage = Math.max(0, Math.min(100, Number(taxPercentage) || 0));

    await product.save();
    
    const updatedProduct = await Product.findById(product._id)
      .populate('createdBy', 'fullName email');
    
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

// Delete product (protected route - requires Product Manager role)
router.delete('/:id', isProductManager, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Product Manager delete should NOT remove stock record.
    // Keep stock for inventory and allow republish later.
    product.productStatus = 'Draft';
    product.isVisibleToCustomers = false;
    product.isAvailableForSale = false;
    product.availabilityStatus = 'Out of Stock';
    await product.save();

    res.json({ message: 'Product removed from customer view. Stock is retained in inventory.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
});

export default router;
