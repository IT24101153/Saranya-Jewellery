import express from 'express';
import Order from '../models/Order.js';
import Customer from '../models/Customer.js';
import Product from '../models/Product.js';
import emailService from '../utils/emailService.js';

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
    const { items, phoneNumber, paymentReceipt, orderNotes, subtotal, tax, total } = req.body;

    // Validate required fields
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must have at least one item' });
    }
    if (!phoneNumber) {
      return res.status(400).json({ message: 'Please provide your phone number' });
    }

    // Get customer details
    const customer = await Customer.findById(req.session.customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Validate and decrease stock quantity for each ordered item
    const stockUpdatedProducts = [];
    for (const item of items) {
      if (!item.productId) {
        return res.status(400).json({ message: 'Invalid item in order - missing product ID' });
      }
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(400).json({ message: `Product "${item.name}" is no longer available` });
      }
      if (product.stockQuantity < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}. Available: ${product.stockQuantity}` });
      }
      product.stockQuantity -= item.quantity;
      await product.save();
      stockUpdatedProducts.push({ product, quantity: item.quantity });
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
      deliveryAddress: 'Shop Collection - Visit Saranya Jewellery',
      phoneNumber,
      paymentMethod: 'Bank Transfer',
      paymentReceipt: paymentReceipt || null,
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

    // Send order confirmation email
    try {
      await emailService.sendCustomEmail(
        customer.email,
        `Order #${newOrder.orderNumber} - Placed Successfully`,
        `<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6f0022; color: white; padding: 2rem; text-align: center;">
            <h1 style="margin: 0;">Saranya Jewellery</h1>
          </div>
          <div style="padding: 2rem; background: #f9f9f9;">
            <h2 style="color: #6f0022;">Order Placed Successfully!</h2>
            <p>Dear ${customer.fullName},</p>
            <p>Your order has been placed and is pending confirmation.</p>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
              <p><strong>Order Number:</strong> ${newOrder.orderNumber}</p>
              <p><strong>Items:</strong> ${items.length} item(s)</p>
              <p><strong>Total:</strong> Rs. ${total.toLocaleString()}</p>
              <p><strong>Payment:</strong> Bank Transfer</p>
              <p><strong>Collection:</strong> Visit Saranya Jewellery shop</p>
            </div>
            <p style="color: #666;">Once your order is confirmed and prepared, we will notify you to collect it from our shop.</p>
          </div>
        </div>`
      );
    } catch (emailErr) {
      console.error('Failed to send order confirmation email:', emailErr);
    }

    res.status(201).json({
      message: 'Order placed successfully',
      orderNumber: newOrder.orderNumber,
      orderId: newOrder._id,
      pointsEarned
    });
  } catch (error) {
    console.error('Create order error:', error);
    // Return detailed error for debugging
    const errorMessage = error.name === 'ValidationError'
      ? Object.values(error.errors).map(e => e.message).join(', ')
      : error.code === 11000
        ? 'Order number conflict, please try again'
        : error.message || 'Server error while creating order';
    res.status(500).json({ message: errorMessage });
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

// PATCH /api/orders/:id/cancel - Cancel an order (customer - only if Pending)
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

    // Restore stock quantities
    for (const item of order.items) {
      const product = await Product.findById(item.productId);
      if (product) {
        product.stockQuantity += item.quantity;
        await product.save();
      }
    }

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

// ===== STAFF ORDER MANAGEMENT =====

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
    const validStatuses = ['Pending', 'Confirmed', 'Invoice Created', 'Payment Received', 'Preparing', 'Ready for Collection', 'Completed', 'Cancelled', 'Refunded'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const oldStatus = order.status;
    order.status = status;
    order.updatedAt = Date.now();

    // If cancelled or refunded, restore stock
    if ((status === 'Cancelled' || status === 'Refunded') && !['Cancelled', 'Refunded'].includes(oldStatus)) {
      for (const item of order.items) {
        const product = await Product.findById(item.productId);
        if (product) {
          product.stockQuantity += item.quantity;
          await product.save();
        }
      }
      if (status === 'Refunded') {
        order.paymentStatus = 'Refunded';
      }
    }

    await order.save();

    // Send email notification to customer for status changes
    const statusMessages = {
      'Confirmed': {
        subject: `Order #${order.orderNumber} - Confirmed!`,
        heading: 'Order Confirmed!',
        message: 'Your order has been confirmed by our team. We will create an invoice shortly.'
      },
      'Invoice Created': {
        subject: `Order #${order.orderNumber} - Invoice Created`,
        heading: 'Invoice Created',
        message: `Your invoice has been created. Invoice Number: ${order.invoiceNumber || 'N/A'}. Please proceed with payment.`
      },
      'Payment Received': {
        subject: `Order #${order.orderNumber} - Payment Received`,
        heading: 'Payment Received!',
        message: 'We have received your payment. Your order is being processed and will be sent to our inventory team for preparation.'
      },
      'Cancelled': {
        subject: `Order #${order.orderNumber} - Cancelled`,
        heading: 'Order Cancelled',
        message: 'Your order has been cancelled. If payment was made, a refund will be processed.'
      },
      'Refunded': {
        subject: `Order #${order.orderNumber} - Refunded`,
        heading: 'Order Refunded',
        message: 'Your order has been refunded. The amount will be credited to your account.'
      },
      'Completed': {
        subject: `Order #${order.orderNumber} - Completed`,
        heading: 'Order Completed!',
        message: 'Thank you for your purchase! We hope you enjoy your jewellery.'
      }
    };

    if (statusMessages[status]) {
      try {
        const msg = statusMessages[status];
        await emailService.sendCustomEmail(
          order.customerEmail,
          msg.subject,
          `<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #6f0022; color: white; padding: 2rem; text-align: center;">
              <h1 style="margin: 0;">Saranya Jewellery</h1>
            </div>
            <div style="padding: 2rem; background: #f9f9f9;">
              <h2 style="color: #6f0022;">${msg.heading}</h2>
              <p>Dear ${order.customerName},</p>
              <p>${msg.message}</p>
              <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                <p><strong>Order Number:</strong> ${order.orderNumber}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Total:</strong> Rs. ${order.total.toLocaleString()}</p>
              </div>
              <p style="color: #666;">Thank you for choosing Saranya Jewellery!</p>
            </div>
          </div>`
        );
      } catch (emailErr) {
        console.error('Failed to send status update email:', emailErr);
      }
    }

    res.json({ message: 'Order status updated successfully', order });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Server error while updating order status' });
  }
});

// PATCH /api/orders/:id/invoice - Create invoice for an order (Order Manager)
router.patch('/:id/invoice', async (req, res) => {
  try {
    if (!req.session.staffId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status !== 'Confirmed') {
      return res.status(400).json({ message: 'Order must be confirmed before creating invoice' });
    }

    // Generate invoice number
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    order.invoiceNumber = `INV-${dateStr}-${randomNum}`;
    order.invoiceDate = new Date();
    order.status = 'Invoice Created';
    order.paymentStatus = 'Invoice Sent';
    await order.save();

    // Send invoice email
    try {
      const itemsHtml = order.items.map(item => 
        `<tr>
          <td style="padding: 0.5rem; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #eee; text-align: right;">Rs. ${item.price.toLocaleString()}</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #eee; text-align: right;">Rs. ${(item.price * item.quantity).toLocaleString()}</td>
        </tr>`
      ).join('');

      await emailService.sendCustomEmail(
        order.customerEmail,
        `Invoice #${order.invoiceNumber} - Order #${order.orderNumber}`,
        `<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6f0022; color: white; padding: 2rem; text-align: center;">
            <h1 style="margin: 0;">Saranya Jewellery</h1>
            <p style="margin: 0.5rem 0 0; opacity: 0.9;">INVOICE</p>
          </div>
          <div style="padding: 2rem; background: #f9f9f9;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
              <div>
                <p><strong>Invoice #:</strong> ${order.invoiceNumber}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p><strong>Order #:</strong> ${order.orderNumber}</p>
                <p><strong>Customer:</strong> ${order.customerName}</p>
              </div>
            </div>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px;">
              <thead>
                <tr style="background: #f0f0f0;">
                  <th style="padding: 0.75rem; text-align: left;">Item</th>
                  <th style="padding: 0.75rem; text-align: center;">Qty</th>
                  <th style="padding: 0.75rem; text-align: right;">Price</th>
                  <th style="padding: 0.75rem; text-align: right;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            <div style="background: white; padding: 1rem; margin-top: 1rem; border-radius: 8px; text-align: right;">
              <p>Subtotal: Rs. ${order.subtotal.toLocaleString()}</p>
              <p>Tax: Rs. ${order.tax.toLocaleString()}</p>
              <p style="font-size: 1.3rem; font-weight: 700; color: #6f0022;">Total: Rs. ${order.total.toLocaleString()}</p>
            </div>
            <p style="color: #666; margin-top: 1rem;">Please complete payment to proceed with your order.</p>
          </div>
        </div>`
      );
    } catch (emailErr) {
      console.error('Failed to send invoice email:', emailErr);
    }

    res.json({ message: 'Invoice created', order });
  } catch (error) {
    console.error('Create invoice error:', error);
    res.status(500).json({ message: 'Server error while creating invoice' });
  }
});

// PATCH /api/orders/:id/notify-inventory - Notify inventory to prepare order (Order Manager)
router.patch('/:id/notify-inventory', async (req, res) => {
  try {
    if (!req.session.staffId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status !== 'Payment Received') {
      return res.status(400).json({ message: 'Payment must be received before notifying inventory' });
    }

    order.status = 'Confirmed';
    order.inventoryNotified = true;
    await order.save();

    // Send email to customer
    try {
      await emailService.sendCustomEmail(
        order.customerEmail,
        `Order #${order.orderNumber} - Sent to Inventory`,
        `<div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6f0022; color: white; padding: 2rem; text-align: center;">
            <h1 style="margin: 0;">Saranya Jewellery</h1>
          </div>
          <div style="padding: 2rem; background: #f9f9f9;">
            <h2 style="color: #6f0022;">Order Sent to Preparation</h2>
            <p>Dear ${order.customerName},</p>
            <p>Your order <strong>#${order.orderNumber}</strong> has been sent to our inventory team for preparation. You will be notified once it's ready.</p>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
              <p><strong>Order Number:</strong> ${order.orderNumber}</p>
              <p><strong>Status:</strong> Sent to Inventory</p>
              <p><strong>Total:</strong> Rs. ${order.total.toLocaleString()}</p>
            </div>
            <p style="color: #666;">Thank you for your patience!</p>
          </div>
        </div>`
      );
    } catch (emailErr) {
      console.error('Failed to send inventory notification email:', emailErr);
    }

    res.json({ message: 'Inventory notified', order });
  } catch (error) {
    console.error('Notify inventory error:', error);
    res.status(500).json({ message: 'Server error while notifying inventory' });
  }
});

export default router;
