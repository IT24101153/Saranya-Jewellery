import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectionDB } from './config/db.js';
import dns from 'node:dns';
import authRoutes from './routes/auth.js';
import staffRoutes from './routes/staff.js';

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.join(__dirname, '..', 'frontend');

await connectionDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'saranya-jewellery-secret-key-2026',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/staff', staffRoutes);

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
