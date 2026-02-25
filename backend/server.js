import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectionDB } from './config/db.js';
import dns from 'node:dns';
import bcrypt from 'bcrypt';
import Staff from './models/Staff.js';

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.join(__dirname, '..', 'frontend');

app.use(express.json());
app.use(express.static(frontendDir));

await connectionDB();

// ── Seed default staff account ────────────────────────────────────────────────
const STAFF_EMAIL    = 'loyalty@saranya.com';
const STAFF_PASSWORD = 'loyalty1234';

const existing = await Staff.findOne({ email: STAFF_EMAIL });
if (!existing) {
  const hashed = await bcrypt.hash(STAFF_PASSWORD, 10);
  await Staff.create({ email: STAFF_EMAIL, password: hashed });
  console.log('✅ Default staff account created:', STAFF_EMAIL);
} else {
  console.log('ℹ️  Staff account already exists:', STAFF_EMAIL);
}

// ── Routes ────────────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const staff = await Staff.findOne({ email: email.toLowerCase().trim() });
    if (!staff) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const match = await bcrypt.compare(password, staff.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.json({ message: 'Login successful', redirect: '/loyalty-dashboard.html' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
