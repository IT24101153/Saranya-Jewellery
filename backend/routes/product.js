import express from 'express';
import Product from '../models/Product.js';
import { isAuthenticated, isProductManager } from '../middleware/auth.js';
import Staff from '../models/Staff.js';

const router = express.Router();

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
    const { category, kType, karat, availabilityStatus, isAvailable, featured } = req.query;
    
    let filter = {};
    if (category) filter.category = category;
    // Support both kType and karat parameters
    if (kType) filter.kType = kType;
    if (karat) filter.kType = karat;
    // Support both availabilityStatus and isAvailable parameters
    if (availabilityStatus) filter.availabilityStatus = availabilityStatus;
    if (isAvailable !== undefined) {
      filter.availabilityStatus = isAvailable === 'true' ? 'In Stock' : { $ne: 'In Stock' };
    }
    if (featured) filter.featured = featured === 'true';

    const products = await Product.find(filter)
      .populate('createdBy', 'fullName email')
      .sort({ createdAt: -1 });
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
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
      name,
      description,
      image,
      category,
      featured
    } = req.body;

    // Debug logging
    console.log('Creating product with data:', {
      name, category,
      createdBy: req.session.staffId,
      sessionData: req.session
    });

    // Validate required fields (only basic info from Product Manager)
    if (!name || !description || !image || !category) {
      return res.status(400).json({ message: 'Please provide name, description, image, and category' });
    }

    // Check if staff exists
    if (!req.session.staffId) {
      return res.status(401).json({ message: 'User session invalid. Please log in again.' });
    }

    const staff = await Staff.findById(req.session.staffId);
    if (!staff) {
      return res.status(401).json({ message: 'User not found. Please log in again.' });
    }

    const product = new Product({
      name,
      description,
      image,
      category,
      featured: featured || false,
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
      featured
    } = req.body;

    if (name) product.name = name;
    if (description) product.description = description;
    if (image) product.image = image;
    if (category) product.category = category;
    if (featured !== undefined) product.featured = featured;

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

    await Product.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
});

export default router;
