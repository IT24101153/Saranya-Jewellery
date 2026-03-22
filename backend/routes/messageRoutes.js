// ./routes/messageRoutes.js
/*import express from "express";
import Message from "../models/message.js";

const router = express.Router();

// GET all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
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
    res.status(500).json({ error: err.message });
  }
});

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
      validUntil: validUntil || null,
      sendOnLogin: sendOnLogin !== undefined ? sendOnLogin : true,
      createdBy: "staff", // TODO: Get from authenticated user
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE message
router.put("/messages/:id", async (req, res) => {
  try {
    const { title, message, type, status, targetAudience, validUntil, sendOnLogin } = req.body;

    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        title,
        message,
        type,
        status,
        targetAudience,
        validUntil: validUntil || null,
        sendOnLogin,
        updatedAt: Date.now(),
      },
      { new: true, runValidators: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json(updatedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE message
router.delete("/messages/:id", async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully", deletedMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// BROADCAST message to customers
router.post("/messages/broadcast/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    if (message.status !== "active") {
      return res.status(400).json({ 
        error: "Only active messages can be broadcast",
        successCount: 0,
        failCount: 0
      });
    }

    // Check if message has expired
    if (message.validUntil && new Date() > new Date(message.validUntil)) {
      return res.status(400).json({ 
        error: "Message has expired",
        successCount: 0,
        failCount: 0
      });
    }

    // TODO: Integrate with email service to actually send messages
    // For now, simulate sending to random number of customers
    const recipientCount = Math.floor(Math.random() * 100) + 10;
    const failCount = Math.floor(Math.random() * 5);
    const successCount = recipientCount - failCount;

    // Update sentCount
    message.sentCount += successCount;
    await message.save();

    res.status(200).json({
      message: "Broadcast completed",
      successCount,
      failCount,
      totalRecipients: recipientCount,
      messageSentCount: message.sentCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message, successCount: 0, failCount: 0 });
  }
});

export default router;*/
import express from "express";
import Message from "../models/message.js";

const router = express.Router();

// GET all messages
router.get("/messages", async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
});

// GET message stats
router.get("/messages/stats", async (req, res, next) => {
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
    next(err);
  }
});

// GET single message
router.get("/messages/:id", async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
});

router.get("/messages/active", async (req, res, next) => {
  try {
    const now = new Date();

    const messages = await Message.find({
      status: "active",
      sendOnLogin: true,
      $or: [
        { validUntil: null },
        { validUntil: { $gte: now } }
      ]
    }).sort({ createdAt: -1 });

    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// CREATE new message
router.post("/messages", async (req, res, next) => {
  try {
    const {
      title,
      message,
      type,
      status,
      targetAudience,
      validUntil,
      sendOnLogin,
    } = req.body;

    if (!title || !message) {
      return res.status(400).json({ error: "Title and message are required" });
    }

    const newMessage = new Message({
      title,
      message,
      type: type || "general",
      status: status || "inactive",
      targetAudience: targetAudience || "all",
      validUntil: validUntil || null,
      sendOnLogin: sendOnLogin !== undefined ? sendOnLogin : true,
      createdBy: "staff", // TODO: Get from authenticated user
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    next(err);
  }
});

// UPDATE message
router.put("/messages/:id", async (req, res, next) => {
  try {
    const {
      title,
      message,
      type,
      status,
      targetAudience,
      validUntil,
      sendOnLogin,
    } = req.body;

    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        title,
        message,
        type,
        status,
        targetAudience,
        validUntil: validUntil || null,
        sendOnLogin,
        updatedAt: Date.now(),
      },
      { new: true, runValidators: true },
    );

    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json(updatedMessage);
  } catch (err) {
    next(err);
  }
});

// DELETE message
router.delete("/messages/:id", async (req, res, next) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res
      .status(200)
      .json({ message: "Message deleted successfully", deletedMessage });
  } catch (err) {
    next(err);
  }
});

// BROADCAST message to customers
router.post("/messages/broadcast/:id", async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    if (message.status !== "active") {
      return res.status(400).json({
        error: "Only active messages can be broadcast",
        successCount: 0,
        failCount: 0,
      });
    }

    if (message.validUntil && new Date() > new Date(message.validUntil)) {
      return res.status(400).json({
        error: "Message has expired",
        successCount: 0,
        failCount: 0,
      });
    }

    const recipientCount = Math.floor(Math.random() * 100) + 10;
    const failCount = Math.floor(Math.random() * 5);
    const successCount = recipientCount - failCount;

    message.sentCount += successCount;
    await message.save();

    res.status(200).json({
      message: "Broadcast completed",
      successCount,
      failCount,
      totalRecipients: recipientCount,
      messageSentCount: message.sentCount,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
