import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import Staff from '../models/staff.model.js';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    console.log('Register endpoint hit with data:', req.body);
    const { firstName, lastName, email, username, password, phone } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ 
        message: 'Please provide all required fields' 
      });
    }

    // Check if user already exists
    let user = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (user) {
      return res.status(400).json({ 
        message: 'User with this email or username already exists' 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      phone: phone || ''
    });

    await user.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Error registering user. Please try again.' 
    });
  }
});

// @route   POST /api/auth/login
// @desc    Login a user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ 
        message: 'Please provide username and password' 
      });
    }

    // Check if user exists
    const user = await User.findOne({ 
      $or: [{ username }, { email: username }] 
    });

    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid username or password' 
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Invalid username or password' 
      });
    }

    res.status(200).json({
      message: 'Login successful',
      token: `${user._id}`, // Simple token (in production, use JWT)
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Error logging in. Please try again.' 
    });
  }
});

// @route   POST /api/auth/staff-login
// @desc    Staff login
// @access  Public
router.post('/staff-login', async (req, res) => {
  try {
    const { email, password, staffId } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Please provide email and password' 
      });
    }

    // Check if staff exists
    const staff = await Staff.findOne({ 
      $or: [{ email }, { staffId }] 
    });

    if (!staff) {
      return res.status(401).json({ 
        message: 'Invalid email or staff ID' 
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, staff.password);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Invalid credentials' 
      });
    }

    // Check if staff is active
    if (!staff.isActive) {
      return res.status(401).json({ 
        message: 'Staff account is inactive' 
      });
    }

    res.status(200).json({
      message: 'Staff login successful',
      token: `${staff._id}`,
      user: {
        id: staff._id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        staffId: staff.staffId,
        role: staff.role,
        department: staff.department
      }
    });
  } catch (error) {
    console.error('Staff login error:', error);
    res.status(500).json({ 
      message: 'Error logging in. Please try again.' 
    });
  }
});

export default router;
