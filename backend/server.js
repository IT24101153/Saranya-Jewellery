import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectionDB } from './config/db.js';
import dns from 'node:dns';
<<<<<<< Updated upstream
=======
import authRoutes from './routes/auth.js';
import staffRoutes from './routes/staff.js';
import customerRoutes from './routes/customer.js';
import productRoutes from './routes/product.js';
import uploadRoutes from './routes/upload.js';
import messageRoutes from './routes/message.js';
import testmailRoutes from './routes/testmail.js';
>>>>>>> Stashed changes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = 3000;

const frontendDir = path.join(__dirname, '..', 'frontend');

await connectionDB();

<<<<<<< Updated upstream
=======
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
app.use('/api/customer', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/testmail', testmailRoutes);

// Serve static files from frontend directory
app.use(express.static(frontendDir));

// Routes for cleaner URLs
>>>>>>> Stashed changes
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
