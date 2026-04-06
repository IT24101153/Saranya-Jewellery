// ./models/offer.js
import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  offerName: {
    type: String,
    required: true,
    trim: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  targetGroup: {
    type: String,
    default: "all",
  },
  status: {
    type: String,
    enum: ["active", "inactive", "draft", "expired"],
    default: "draft",
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    default: null,
  },
  usageLimit: {
    type: Number,
    default: null,
  },
  usageCount: {
    type: Number,
    default: 0,
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

// Update timestamp on save
offerSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

const Offer = mongoose.model("Offer", offerSchema);
export default Offer;
