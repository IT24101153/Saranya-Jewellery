// ./models/qna.js
import mongoose from "mongoose";

const qnaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    enum: ["Account", "Billing", "Orders", "Returns", "Support", "Products", "Other"],
    default: "Other",
  },
  // Customer information (for customer-submitted questions)
  customerName: {
    type: String,
    default: null,
  },
  customerEmail: {
    type: String,
    default: null,
  },
  customerPhone: {
    type: String,
    default: null,
  },
  orderPlaced: {
    type: Boolean,
    default: false,
  },
  orderNumber: {
    type: String,
    default: null,
  },
  views: {
    type: Number,
    default: 0,
  },
  helpful: {
    type: Number,
    default: 0,
  },
  unhelpful: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "draft", "pending", "answered"],
    default: "active",
  },
  createdBy: {
    type: String,
    default: "staff",
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
qnaSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

const QnA = mongoose.model("QnA", qnaSchema);
export default QnA;
