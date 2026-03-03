import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectionDB } from './config/db.js';
import dns from 'node:dns';
import authRoutes from './routes/auth.js';
import staffRoutes from './routes/staff.js';
import customerRoutes from './routes/customer.js';
import productRoutes from './routes/product.js';
import uploadRoutes from './routes/upload.js';
import messageRoutes from './routes/message.js';
import testmailRoutes from './routes/testmail.js';
import orderRoutes from './routes/order.js';
import chatRoutes from './routes/chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = 3000;

const frontendDir = path.join(__dirname, '..', 'frontend');

await connectionDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session configuration with MongoDB store for persistence
app.use(session({
  secret: process.env.SESSION_SECRET || 'saranya-jewellery-secret-key-2026',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/saranyadb',
    touchAfter: 24 * 3600, // Lazy session update - only update session once per 24 hours
    crypto: {
      secret: process.env.SESSION_SECRET || 'saranya-jewellery-secret-key-2026'
    }
  }),
  cookie: {
    secure: false, // Set to true if using HTTPS in production
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    sameSite: 'lax' // Protects against CSRF
  }
}));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/testmail', testmailRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/chat', chatRoutes);

// Serve static files from frontend directory
app.use(express.static(frontendDir));

// Routes for cleaner URLs
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

app.get('/staff-login', (req, res) => {
  res.sendFile(path.join(frontendDir, 'staff-login.html'));
});

app.get('/staff-register', (req, res) => {
  res.sendFile(path.join(frontendDir, 'staff-register.html'));
});

app.get('/customer-login', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-login.html'));
});

app.get('/customer-register', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-register.html'));
});

app.get('/customer-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-dashboard.html'));
});

app.get('/customer-shop', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-shop.html'));
});

app.get('/customer-cart', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-cart.html'));
});

app.get('/customer-orders', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-orders.html'));
});

app.get('/customer-loyalty', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-loyalty.html'));
});

app.get('/customer-support', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-support.html'));
});

app.get('/admin-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'admin-dashboard.html'));
});

app.get('/customer-care-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'customer-care-dashboard.html'));
});

app.get('/inventory-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'inventory-dashboard.html'));
});

app.get('/order-management-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'order-management-dashboard.html'));
});

app.get('/loyalty-management-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'loyalty-management-dashboard.html'));
});

app.get('/product-management-dashboard', (req, res) => {
  res.sendFile(path.join(frontendDir, 'product-management-dashboard.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
