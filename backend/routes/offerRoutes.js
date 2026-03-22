// ./routes/offerRoutes.js
import express from "express";
import Offer from "../models/offer.js";

const router = express.Router();

router.post("/offers", async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/offers", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({ status: "API is running" });
});

export default router;
