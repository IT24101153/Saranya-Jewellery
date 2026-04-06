// ./routes/messageRoutes.js
import express from "express";
import Message from "../models/message.js";

const router = express.Router();

// CREATE new message
router.post("/messages", async (req, res) => {
  try {
    const { title, message, type, status, targetAudience, validUntil, sendOnLogin } = req.body;

    // Validation
    if (!title || !message) {
      return res.status(400).json({ error: "Title and message are required" });
    }

    const newMessage = new Message({
      title,
      message,
      type: type || "general",
      status: status || "inactive",
      targetAudience: targetAudience || "all",
      validUntil: validUntil ? new Date(validUntil) : null,
      sendOnLogin: sendOnLogin !== undefined ? sendOnLogin : true,
    });

    await newMessage.save();
    console.log("✅ Message created:", newMessage._id);
    res.status(201).json(newMessage);
  } catch (err) {
    console.error("❌ Error creating message:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error("❌ Error fetching messages:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET active messages
router.get("/messages/active", async (req, res) => {
  try {
    const messages = await Message.find({ status: "active" }).sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error("❌ Error fetching active messages:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET message stats
router.get("/messages/stats", async (req, res) => {
  try {
    const totalMessages = await Message.countDocuments();
    const activeMessages = await Message.countDocuments({ status: "active" });
    const totalSent = await Message.aggregate([
      { $group: { _id: null, total: { $sum: "$sentCount" } } },
    ]);

    res.status(200).json({
      totalMessages,
      activeMessages,
      totalSent: totalSent[0]?.total || 0,
    });
  } catch (err) {
    console.error("❌ Error fetching stats:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET single message
router.get("/messages/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(message);
  } catch (err) {
    console.error("❌ Error fetching message:", err);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE message
router.put("/messages/:id", async (req, res) => {
  try {
    const { title, message, type, status, targetAudience, validUntil, sendOnLogin } = req.body;
    
    const msg = await Message.findById(req.params.id);
    if (!msg) {
      return res.status(404).json({ error: "Message not found" });
    }

    // Update fields
    if (title) msg.title = title;
    if (message) msg.message = message;
    if (type) msg.type = type;
    if (status) msg.status = status;
    if (targetAudience) msg.targetAudience = targetAudience;
    if (validUntil !== undefined) msg.validUntil = validUntil ? new Date(validUntil) : null;
    if (sendOnLogin !== undefined) msg.sendOnLogin = sendOnLogin;

    await msg.save();
    console.log("✅ Message updated:", msg._id);
    res.status(200).json(msg);
  } catch (err) {
    console.error("❌ Error updating message:", err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE message
router.delete("/messages/:id", async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    console.log("✅ Message deleted:", message._id);
    res.status(200).json({ message: "Message deleted successfully", data: message });
  } catch (err) {
    console.error("❌ Error deleting message:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
