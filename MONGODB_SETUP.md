# MongoDB Database Setup Guide

## Overview

This guide provides complete instructions for setting up and configuring MongoDB for the Smart Jewellery Management System.

---

## Prerequisites

- MongoDB Community Edition installed (version 4.4 or higher)
- MongoDB Shell (mongosh) or MongoDB Compass
- Node.js and npm installed
- Your terminal/command prompt

---

## Step 1: Install MongoDB

### macOS

```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Check if MongoDB is running
brew services list
```

### Windows

1. Download from: https://www.mongodb.com/try/download/community
2. Run the installer
3. Follow the setup wizard
4. MongoDB will start automatically as a service

### Linux (Ubuntu)

```bash
# Import the GPG key
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update and install
sudo apt-get update
sudo apt-get install mongodb-org

# Start MongoDB service
sudo systemctl start mongod
```

---

## Step 2: Verify MongoDB Installation

```bash
# Check MongoDB version
mongod --version

# Connect to MongoDB (default connection)
mongosh
```

---

## Step 3: Create the Database and Collections

### Option A: Using MongoDB Shell (mongosh)

Open your terminal and run:

```bash
mongosh
```

Inside the MongoDB shell, execute these commands:

```javascript
// Use or create the database
use smartJewelleryDB

// Create collections
db.createCollection("users")
db.createCollection("products")
db.createCollection("orders")
db.createCollection("categories")
db.createCollection("inventory")

// Insert sample data for users
db.users.insertMany([
  {
    _id: "user1",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    username: "johndoe",
    password: "$2b$10$...", // bcrypt hashed password
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true
  }
])

// Insert sample products
db.products.insertMany([
  {
    _id: "prod1",
    name: "Diamond Ring",
    description: "Elegant 18K gold ring with certified diamond",
    category: "Rings",
    price: 2499,
    image: "diamond-ring.jpg",
    stock: 10,
    material: "18K Gold",
    gemstone: "Diamond",
    weight: 5.5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "prod2",
    name: "Pearl Necklace",
    description: "Luxurious freshwater pearl necklace",
    category: "Necklaces",
    price: 899,
    image: "pearl-necklace.jpg",
    stock: 15,
    material: "Sterling Silver",
    gemstone: "Pearl",
    weight: 3.2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

// Insert sample orders
db.orders.insertMany([
  {
    _id: "order1",
    userId: "user1",
    products: [
      {
        productId: "prod1",
        quantity: 1,
        price: 2499
      }
    ],
    totalAmount: 2499,
    status: "pending",
    shippingAddress: "123 Main St, City, State 12345",
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

// Insert categories
db.categories.insertMany([
  { _id: "cat1", name: "Rings", description: "Beautiful rings collection" },
  { _id: "cat2", name: "Necklaces", description: "Elegant necklaces" },
  { _id: "cat3", name: "Earrings", description: "Stunning earrings" },
  { _id: "cat4", name: "Bracelets", description: "Stylish bracelets" }
])

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ username: 1 }, { unique: true })
db.products.createIndex({ name: "text", description: "text" })
db.orders.createIndex({ userId: 1 })
db.orders.createIndex({ createdAt: -1 })

// Verify collections were created
show collections
```

### Option B: Using MongoDB Compass (GUI)

1. Download MongoDB Compass from: https://www.mongodb.com/products/compass
2. Open MongoDB Compass
3. Click "Create Database"
4. Database Name: `smartJewelleryDB`
5. Collection Name: `users`
6. Repeat for each collection: products, orders, categories, inventory

---

## Step 4: Database Schema Details

### Users Collection

```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique),
  username: String (unique),
  password: String (bcrypt hashed),
  phone: String,
  address: String,
  createdAt: Date,
  updatedAt: Date,
  isActive: Boolean
}
```

### Products Collection

```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String (URL or file path),
  stock: Number,
  material: String,
  gemstone: String,
  weight: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  products: [
    {
      productId: ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: String (pending, processing, shipped, delivered),
  shippingAddress: String,
  paymentMethod: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Categories Collection

```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  createdAt: Date
}
```

### Inventory Collection

```javascript
{
  _id: ObjectId,
  productId: ObjectId,
  quantity: Number,
  location: String,
  lastUpdated: Date
}
```

---

## Step 5: Connect MongoDB with Node.js

### Install MongoDB Driver

```bash
npm install mongodb
# or use Mongoose
npm install mongoose
```

### Using MongoDB Driver

Create `backend/config/db.js`:

```javascript
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const DB_NAME = "smartJewelleryDB";

let db;

export async function connectDB() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log("MongoDB connected successfully");
    return db;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

export function getDB() {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}
```

### Using Mongoose

Create `backend/config/db.js`:

```javascript
import mongoose from "mongoose";

export async function connectDB() {
  try {
    const MONGODB_URI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/smartJewelleryDB";
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}
```

---

## Step 6: Create User Model (Example with Mongoose)

Create `backend/models/user.model.js`:

```javascript
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
```

---

## Step 7: Test the Connection

Update your `backend/server.js`:

```javascript
import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

// Connect to MongoDB
connectDB();

// Routes
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Run the server:

```bash
npm run dev
```

---

## Step 8: Useful MongoDB Commands

```javascript
// Connect to database
use smartJewelleryDB

// View all collections
show collections

// Count documents
db.users.countDocuments()

// Find all users
db.users.find()

// Find user by username
db.users.findOne({ username: "johndoe" })

// Update user
db.users.updateOne(
  { username: "johndoe" },
  { $set: { phone: "+1 (555) 987-6543" } }
)

// Delete user
db.users.deleteOne({ username: "johndoe" })

// Create index
db.users.createIndex({ email: 1 })

// Drop collection
db.users.drop()

// Drop database
db.dropDatabase()
```

---

## Step 9: Backup and Restore

### Backup MongoDB

```bash
# Backup single database
mongodump --db smartJewelleryDB --out ./backup

# Backup all databases
mongodump --out ./backup
```

### Restore MongoDB

```bash
# Restore single database
mongorestore --db smartJewelleryDB ./backup/smartJewelleryDB

# Restore all databases
mongorestore ./backup
```

---

## Step 10: Environment Variables

Create `.env` file in your project root:

```env
MONGODB_URI=mongodb://localhost:27017/smartJewelleryDB
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

Update `.gitignore`:

```
.env
node_modules/
backup/
```

---

## Troubleshooting

### MongoDB not starting

```bash
# Check if MongoDB service is running
sudo systemctl status mongod  # Linux
brew services list           # macOS

# Restart MongoDB
sudo systemctl restart mongod  # Linux
brew services restart mongodb-community  # macOS
```

### Connection refused error

- Ensure MongoDB is running
- Check if port 27017 is not blocked
- Verify connection string in .env

### Authentication errors

- Use correct username and password
- Ensure user has proper permissions
- Reset password if needed

---

## Next Steps

1. Create API endpoints for user registration and login
2. Implement JWT authentication
3. Create CRUD operations for products and orders
4. Set up validation and error handling
5. Implement pagination for large datasets

---

## Resources

- MongoDB Documentation: https://docs.mongodb.com/
- Mongoose Documentation: https://mongoosejs.com/
- MongoDB University: https://university.mongodb.com/
