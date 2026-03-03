import express from 'express';
import Customer from '../models/Customer.js';
import emailService from '../utils/emailService.js';

const router = express.Router();

// POST /api/customer/register - Register new customer
router.post('/register', async (req, res) => {
  try {
    const { email, password, fullName, phone, address } = req.body;

    // Validate required fields
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: 'Email, password, and full name are required' });
    }

    // Check if customer already exists
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new customer
    const newCustomer = new Customer({
      email,
      password,
      fullName,
      phone,
      address
    });

    await newCustomer.save();

    // Send welcome email asynchronously (don't block registration)
    emailService.sendWelcomeEmail(newCustomer).catch(err => {
      console.error('Failed to send welcome email:', err);
    });

    res.status(201).json({ 
      message: 'Registration successful. Welcome email sent! You can now login.',
      customer: {
        id: newCustomer._id,
        email: newCustomer.email,
        fullName: newCustomer.fullName,
        phone: newCustomer.phone,
        loyaltyPoints: newCustomer.loyaltyPoints
      }
    });
  } catch (error) {
    console.error('Customer registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// POST /api/customer/login - Login customer
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find customer by email
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if account is active
    if (!customer.isActive) {
      return res.status(403).json({ message: 'Account has been deactivated' });
    }

    // Verify password
    const isMatch = await customer.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Set session
    req.session.customerId = customer._id;
    req.session.email = customer.email;
    req.session.fullName = customer.fullName;
    req.session.isCustomer = true;

    res.json({
      message: 'Login successful',
      customer: {
        id: customer._id,
        email: customer.email,
        fullName: customer.fullName,
        phone: customer.phone,
        loyaltyPoints: customer.loyaltyPoints
      }
    });
  } catch (error) {
    console.error('Customer login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// POST /api/customer/logout - Logout customer
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});

// GET /api/customer/me - Get current logged-in customer
router.get('/me', async (req, res) => {
  try {
    if (!req.session.customerId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const customer = await Customer.findById(req.session.customerId).select('-password');
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({ customer });
  } catch (error) {
    console.error('Get customer error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/customer/profile - Update customer profile
router.put('/profile', async (req, res) => {
  try {
    if (!req.session.customerId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const { fullName, phone, address } = req.body;

    const customer = await Customer.findById(req.session.customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update fields
    if (fullName) customer.fullName = fullName;
    if (phone) customer.phone = phone;
    if (address) customer.address = address;
    customer.updatedAt = Date.now();

    await customer.save();

    res.json({
      message: 'Profile updated successfully',
      customer: {
        id: customer._id,
        email: customer.email,
        fullName: customer.fullName,
        phone: customer.phone,
        address: customer.address,
        loyaltyPoints: customer.loyaltyPoints
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/customer/change-password - Change customer password
router.put('/change-password', async (req, res) => {
  try {
    if (!req.session.customerId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current and new password are required' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }

    const customer = await Customer.findById(req.session.customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Verify current password
    const isMatch = await customer.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Update password
    customer.password = newPassword;
    customer.updatedAt = Date.now();
    await customer.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
