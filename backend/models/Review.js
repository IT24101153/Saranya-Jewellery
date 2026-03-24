import mongoose from 'mongoose';

const careReplySchema = new mongoose.Schema({
  comment: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff'
  },
  staffName: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    index: true
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
    index: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
    index: true
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    trim: true,
    maxlength: 1000,
    default: ''
  },
  careReply: {
    type: careReplySchema,
    default: null
  }
}, {
  timestamps: true
});

reviewSchema.index({ customerId: 1, orderId: 1, productId: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;
