import express from 'express';
import Product from '../models/Product.js';
import GoldRate from '../models/GoldRate.js';
import Order from '../models/Order.js';
import { isInventoryManager } from '../middleware/auth.js';
import emailService from '../utils/emailService.js';

const router = express.Router();

// ===== GOLD RATE MANAGEMENT =====

// GET /api/inventory/gold-rates - Get current gold rates
router.get('/gold-rates', async (req, res) => {
  try {
    let rates = await GoldRate.findOne().sort({ lastUpdated: -1 });
    if (!rates) {
      rates = { '18K': 0, '22K': 0, '24K': 0, lastUpdated: null };
    }
    res.json(rates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gold rates', error: error.message });
  }
});

// POST /api/inventory/gold-rates - Update gold rates (Inventory Manager only)
router.post('/gold-rates', isInventoryManager, async (req, res) => {
  try {
    const { '18K': rate18K, '22K': rate22K, '24K': rate24K } = req.body;

    if (!rate18K || !rate22K || !rate24K) {
      return res.status(400).json({ message: 'Please provide all three karat rates' });
    }

    // Upsert the single gold rate document
    let goldRate = await GoldRate.findOne();
    if (goldRate) {
      goldRate['18K'] = rate18K;
      goldRate['22K'] = rate22K;
      goldRate['24K'] = rate24K;
      goldRate.updatedBy = req.session.staffId;
    } else {
      goldRate = new GoldRate({
        '18K': rate18K,
        '22K': rate22K,
        '24K': rate24K,
        updatedBy: req.session.staffId
      });
    }
    await goldRate.save();

    // Update karatRate for ALL products that have a kType assigned
    const products = await Product.find({ kType: { $in: ['18K', '22K', '24K'] } });
    for (const product of products) {
      product.karatRate = goldRate[product.kType];
      // Price auto-calculated in pre-save hook (weight × karatRate)
      await product.save();
    }

    res.json({ 
      message: 'Gold rates updated and product prices recalculated', 
      rates: goldRate,
      productsUpdated: products.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating gold rates', error: error.message });
  }
});

// ===== PRODUCT INVENTORY MANAGEMENT =====

// GET /api/inventory/products - Get all products for inventory view
router.get('/products', isInventoryManager, async (req, res) => {
  try {
    const { category, status } = req.query;
    let filter = {};
    if (category) filter.category = category;
    if (status) filter.productStatus = status;

    const products = await Product.find(filter)
      .populate('createdBy', 'fullName email')
      .sort({ createdAt: -1 });
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// PATCH /api/inventory/products/:id - Update product inventory details (Inventory Manager only)
// Inventory can update: weight, kType, karatRate, sku, stockQuantity
router.patch('/products/:id', isInventoryManager, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const { weight, kType, karatRate, sku, stockQuantity } = req.body;

    if (weight !== undefined) product.weight = weight;
    if (kType) {
      product.kType = kType;
      // Auto-fetch karatRate from gold rates if not explicitly provided
      if (!karatRate) {
        const rates = await GoldRate.findOne().sort({ lastUpdated: -1 });
        if (rates && rates[kType]) {
          product.karatRate = rates[kType];
        }
      }
    }
    if (karatRate !== undefined) product.karatRate = karatRate;
    if (sku !== undefined) product.sku = sku;
    if (stockQuantity !== undefined) product.stockQuantity = stockQuantity;

    // If all inventory fields are filled, mark as Active
    if (product.weight > 0 && product.kType && product.karatRate > 0 && product.stockQuantity > 0) {
      product.productStatus = 'Active';
    }

    // Price auto-calculated in pre-save hook
    await product.save();

    const updatedProduct = await Product.findById(product._id)
      .populate('createdBy', 'fullName email');

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product inventory', error: error.message });
  }
});

// ===== ORDER FULFILLMENT =====

// GET /api/inventory/orders - Get orders that need inventory fulfillment
router.get('/orders', isInventoryManager, async (req, res) => {
  try {
    const orders = await Order.find({ 
      inventoryNotified: true,
      status: { $in: ['Confirmed', 'Preparing'] }
    }).sort({ updatedAt: -1 });
    
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// PATCH /api/inventory/orders/:id/accept - Inventory accepts order for preparation
router.patch('/orders/:id/accept', isInventoryManager, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (!order.inventoryNotified) {
      return res.status(400).json({ message: 'This order has not been assigned to inventory' });
    }

    order.status = 'Preparing';
    order.inventoryAccepted = true;
    await order.save();

    // Send email to customer
    try {
      await emailService.sendCustomEmail(
        order.customerEmail,
        `Order #${order.orderNumber} - Being Prepared`,
        `<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6f0022; color: white; padding: 2rem; text-align: center;">
            <h1 style="margin: 0;">Saranya Jewellery</h1>
          </div>
          <div style="padding: 2rem; background: #f9f9f9;">
            <h2 style="color: #6f0022;">Your Order is Being Prepared!</h2>
            <p>Dear ${order.customerName},</p>
            <p>Great news! Your order <strong>#${order.orderNumber}</strong> is now being prepared by our inventory team.</p>
            <p>We will notify you once it's ready for collection.</p>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
              <p><strong>Order Number:</strong> ${order.orderNumber}</p>
              <p><strong>Status:</strong> Preparing</p>
              <p><strong>Total:</strong> Rs. ${order.total.toLocaleString()}</p>
            </div>
            <p style="color: #666;">Thank you for choosing Saranya Jewellery!</p>
          </div>
        </div>`
      );
    } catch (emailErr) {
      console.error('Failed to send preparation email:', emailErr);
    }

    res.json({ message: 'Order accepted for preparation', order });
  } catch (error) {
    res.status(500).json({ message: 'Error accepting order', error: error.message });
  }
});

// PATCH /api/inventory/orders/:id/ready - Mark order as ready for collection
router.patch('/orders/:id/ready', isInventoryManager, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status !== 'Preparing') {
      return res.status(400).json({ message: 'Order must be in Preparing status' });
    }

    order.status = 'Ready for Collection';
    await order.save();

    // Send email to customer about collection
    try {
      await emailService.sendCustomEmail(
        order.customerEmail,
        `Order #${order.orderNumber} - Ready for Collection!`,
        `<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6f0022; color: white; padding: 2rem; text-align: center;">
            <h1 style="margin: 0;">Saranya Jewellery</h1>
          </div>
          <div style="padding: 2rem; background: #f9f9f9;">
            <h2 style="color: #28a745;">🎉 Your Order is Ready!</h2>
            <p>Dear ${order.customerName},</p>
            <p>Your order <strong>#${order.orderNumber}</strong> is ready for collection from our shop!</p>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
              <p><strong>Order Number:</strong> ${order.orderNumber}</p>
              <p><strong>Status:</strong> Ready for Collection</p>
              <p><strong>Total:</strong> Rs. ${order.total.toLocaleString()}</p>
            </div>
            <div style="background: #d4edda; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
              <h3 style="color: #155724; margin-top: 0;">📍 Collection Details</h3>
              <p style="color: #155724;">You can collect your jewellery from our shop. Please bring your order number and a valid ID for verification.</p>
            </div>
            <p style="color: #666;">Thank you for choosing Saranya Jewellery!</p>
          </div>
        </div>`
      );
    } catch (emailErr) {
      console.error('Failed to send collection email:', emailErr);
    }

    res.json({ message: 'Order marked as ready for collection', order });
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error: error.message });
  }
});

export default router;
