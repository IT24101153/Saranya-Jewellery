import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dns from "node:dns";
import multer from "multer";
import cors from "cors";

import { connectionDB } from "./config/db.js";
import offerRoutes from "./routes/offerRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import qnaRoutes from "./routes/qnaRoutes.js";

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());
app.use(cors());

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// fix dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// frontend folder
const frontendDir = path.join(__dirname, "..", "frontend");

// Serve static files (images and other uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(frontendDir));

// routes
console.log("Registering routes...");
app.use("/api", offerRoutes);
app.use("/api", messageRoutes);
app.use("/api", qnaRoutes);
console.log("Routes registered");

// frontend page
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendDir, "customer-care-dashboard.html"));
});

// 404 handler
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.path}`);
  res.status(404).json({ error: "Route not found" });
});

// Error handler (MUST BE LAST)
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  res.status(err.status || 500).json({ 
    error: err.message || "Something went wrong!",
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start server with database connection
(async () => {
  try {
    // Connect to database FIRST
    await connectionDB();
    console.log("✅ Database connected successfully");

    // Then start the server
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
      console.log(`✅ Ready to save messages!`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
})();
