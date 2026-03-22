// ./models/message.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["promotion", "announcement", "welcome", "general"],
    default: "general",
  },
  status: {
    type: String,
    enum: ["active", "inactive", "scheduled"],
    default: "inactive",
  },
  targetAudience: {
    type: String,
    enum: ["all", "new", "existing", "specific"],
    default: "all",
  },
  validUntil: {
    type: Date,
    default: null,
  },
  sendOnLogin: {
    type: Boolean,
    default: true,
  },
  sentCount: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: String,
    default: "system",
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
messageSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
