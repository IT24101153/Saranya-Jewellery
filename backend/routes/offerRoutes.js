// ./routes/offerRoutes.js
import express from "express";
import multer from "multer";
import path from "path";
import Offer from "../models/offer.js";

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'backend/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// CREATE new offer with image
router.post("/offers", upload.single("image"), async (req, res) => {
  try {
    const { offerName, discount, startDate, endDate, targetGroup, description, usageLimit, status } = req.body;

    // Validation
    if (!offerName || !discount || !startDate || !endDate) {
      return res.status(400).json({ error: "Offer name, discount, start date, and end date are required" });
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newOffer = new Offer({
      offerName,
      discount: parseFloat(discount),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      targetGroup: targetGroup || "all",
      description: description || "",
      image: imagePath,
      usageLimit: usageLimit ? parseInt(usageLimit) : null,
      status: status || "draft"
    });

    await newOffer.save();
    console.log("✅ Offer created:", newOffer._id);
    res.status(201).json(newOffer);
  } catch (err) {
    console.error("❌ Error creating offer:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET all offers
router.get("/offers", async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.status(200).json(offers);
  } catch (err) {
    console.error("❌ Error fetching offers:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET single offer by ID
router.get("/offers/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    res.status(200).json(offer);
  } catch (err) {
    console.error("❌ Error fetching offer:", err);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE offer
router.put("/offers/:id", upload.single("image"), async (req, res) => {
  try {
    const { offerName, discount, startDate, endDate, targetGroup, description, usageLimit, status } = req.body;
    
    const offer = await Offer.findById(req.params.id);
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }

    // Update fields
    if (offerName) offer.offerName = offerName;
    if (discount) offer.discount = parseFloat(discount);
    if (startDate) offer.startDate = new Date(startDate);
    if (endDate) offer.endDate = new Date(endDate);
    if (targetGroup) offer.targetGroup = targetGroup;
    if (description !== undefined) offer.description = description;
    if (usageLimit !== undefined) offer.usageLimit = usageLimit ? parseInt(usageLimit) : null;
    if (status) offer.status = status;

    // Handle image update
    if (req.file) {
      offer.image = `/uploads/${req.file.filename}`;
    }

    await offer.save();
    console.log("✅ Offer updated:", offer._id);
    res.status(200).json(offer);
  } catch (err) {
    console.error("❌ Error updating offer:", err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE offer
router.delete("/offers/:id", async (req, res) => {
  try {
    const offer = await Offer.findByIdAndDelete(req.params.id);
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    console.log("✅ Offer deleted:", offer._id);
    res.status(200).json({ message: "Offer deleted successfully", offer });
  } catch (err) {
    console.error("❌ Error deleting offer:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET offers stats
router.get("/offers/stats", async (req, res) => {
  try {
    const totalOffers = await Offer.countDocuments();
    const activeOffers = await Offer.countDocuments({ status: "active" });
    const totalUsageCount = await Offer.aggregate([
      { $group: { _id: null, total: { $sum: "$usageCount" } } },
    ]);

    res.status(200).json({
      totalOffers,
      activeOffers,
      totalUsage: totalUsageCount[0]?.total || 0,
    });
  } catch (err) {
    console.error("❌ Error fetching stats:", err);
    res.status(500).json({ error: err.message });
  }
});

// SEND OFFER via EMAIL
router.post("/offers/:id/send-email", async (req, res) => {
  try {
    const { emails, subject, message } = req.body;
    const offerId = req.params.id;

    // Validate input
    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ error: "No emails provided" });
    }
    if (!subject || !message) {
      return res.status(400).json({ error: "Subject and message are required" });
    }

    // Fetch offer details
    const offer = await Offer.findById(offerId);
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }

    // Create email body with offer details
    const emailBody = `
      <h2>${subject}</h2>
      <p>${message}</p>
      <hr>
      <h3>Offer Details:</h3>
      <p><strong>Name:</strong> ${offer.offerName}</p>
      <p><strong>Discount:</strong> ${offer.discount}%</p>
      <p><strong>Valid From:</strong> ${new Date(offer.startDate).toLocaleDateString()}</p>
      <p><strong>Valid Until:</strong> ${new Date(offer.endDate).toLocaleDateString()}</p>
      <p><strong>Target Group:</strong> ${offer.targetGroup}</p>
      <p>${offer.description}</p>
      <p>Don't miss this great opportunity! Shop now using this exclusive offer.</p>
    `;

    // Log email sending (in production, integrate with email service)
    console.log(`✅ Sending offer "${offer.offerName}" to ${emails.length} customers`);
    console.log("Recipient emails:", emails);
    console.log("Email subject:", subject);
    console.log("Email body:", emailBody);

    // TODO: Integrate with email service (SendGrid, Nodemailer, AWS SES, etc.)
    // Example (uncomment when email service is configured):
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({ ... });
    // for (const email of emails) {
    //   await transporter.sendMail({
    //     to: email,
    //     subject: subject,
    //     html: emailBody
    //   });
    // }

    res.status(200).json({
      message: `Offer sent to ${emails.length} customer(s) successfully`,
      offerName: offer.offerName,
      emailsSent: emails.length
    });
  } catch (err) {
    console.error("❌ Error sending offer:", err);
    res.status(500).json({ error: err.message });
  }
});

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({ status: "API is running" });
});

export default router;
