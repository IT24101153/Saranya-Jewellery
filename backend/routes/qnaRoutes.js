// ./routes/qnaRoutes.js
import express from "express";
import QnA from "../models/qna.js";

const router = express.Router();

// CREATE new Q&A
router.post("/qna", async (req, res) => {
  try {
    const { question, answer, category, status, customerName, customerEmail, customerPhone, orderPlaced, orderNumber } = req.body;

    // Validation
    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const newQnA = new QnA({
      question,
      answer: answer || null,
      category: category || "Other",
      status: status || (answer ? "active" : "pending"),
      customerName: customerName || null,
      customerEmail: customerEmail || null,
      customerPhone: customerPhone || null,
      orderPlaced: orderPlaced || false,
      orderNumber: orderNumber || null,
    });

    await newQnA.save();
    console.log("✅ Q&A created:", newQnA._id);
    res.status(201).json(newQnA);
  } catch (err) {
    console.error("❌ Error creating Q&A:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET all Q&As
router.get("/qna", async (req, res) => {
  try {
    const { category, status } = req.query;
    let query = {};
    
    if (category) query.category = category;
    if (status) query.status = status;
    
    const qnas = await QnA.find(query).sort({ createdAt: -1 });
    res.status(200).json(qnas);
  } catch (err) {
    console.error("❌ Error fetching Q&As:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET single Q&A by ID
router.get("/qna/:id", async (req, res) => {
  try {
    const qna = await QnA.findById(req.params.id);
    if (!qna) {
      return res.status(404).json({ error: "Q&A not found" });
    }
    
    // Increment views
    qna.views += 1;
    await qna.save();
    
    res.status(200).json(qna);
  } catch (err) {
    console.error("❌ Error fetching Q&A:", err);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE Q&A
router.put("/qna/:id", async (req, res) => {
  try {
    const { question, answer, category, status } = req.body;
    
    const qna = await QnA.findById(req.params.id);
    if (!qna) {
      return res.status(404).json({ error: "Q&A not found" });
    }

    // Update fields
    if (question) qna.question = question;
    if (answer) qna.answer = answer;
    if (category) qna.category = category;
    if (status) qna.status = status;

    await qna.save();
    console.log("✅ Q&A updated:", qna._id);
    res.status(200).json(qna);
  } catch (err) {
    console.error("❌ Error updating Q&A:", err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE Q&A
router.delete("/qna/:id", async (req, res) => {
  try {
    const qna = await QnA.findByIdAndDelete(req.params.id);
    if (!qna) {
      return res.status(404).json({ error: "Q&A not found" });
    }
    console.log("✅ Q&A deleted:", qna._id);
    res.status(200).json({ message: "Q&A deleted successfully", data: qna });
  } catch (err) {
    console.error("❌ Error deleting Q&A:", err);
    res.status(500).json({ error: err.message });
  }
});

// Mark Q&A as helpful
router.post("/qna/:id/helpful", async (req, res) => {
  try {
    const qna = await QnA.findById(req.params.id);
    if (!qna) {
      return res.status(404).json({ error: "Q&A not found" });
    }
    
    qna.helpful += 1;
    await qna.save();
    
    res.status(200).json(qna);
  } catch (err) {
    console.error("❌ Error marking helpful:", err);
    res.status(500).json({ error: err.message });
  }
});

// Mark Q&A as unhelpful
router.post("/qna/:id/unhelpful", async (req, res) => {
  try {
    const qna = await QnA.findById(req.params.id);
    if (!qna) {
      return res.status(404).json({ error: "Q&A not found" });
    }
    
    qna.unhelpful += 1;
    await qna.save();
    
    res.status(200).json(qna);
  } catch (err) {
    console.error("❌ Error marking unhelpful:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET Q&A stats
router.get("/qna/stats/all", async (req, res) => {
  try {
    const totalQnA = await QnA.countDocuments();
    const activeQnA = await QnA.countDocuments({ status: "active" });
    const totalViews = await QnA.aggregate([
      { $group: { _id: null, total: { $sum: "$views" } } },
    ]);

    res.status(200).json({
      totalQnA,
      activeQnA,
      totalViews: totalViews[0]?.total || 0,
    });
  } catch (err) {
    console.error("❌ Error fetching stats:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
