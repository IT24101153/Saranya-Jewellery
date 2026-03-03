import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Ring', 'Necklace', 'Bracelet', 'Earring', 'Pendant', 'Chain', 'Bangles', 'Anklet', 'Other']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  weight: {
    type: Number,
    required: true,
    min: 0
  },
  kType: {
    type: String,
    required: true,
    enum: ['18K', '22K', '24K']
  },
  karatRate: {
    type: Number,
    required: true,
    min: 0
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0
  },
  sku: {
    type: String,
    trim: true
  },
  availabilityStatus: {
    type: String,
    required: true,
    enum: ['In Stock', 'Out of Stock', 'Pre-Order'],
    default: 'In Stock'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual fields for frontend compatibility
productSchema.virtual('imageUrl').get(function() {
  return this.image;
});

productSchema.virtual('karat').get(function() {
  return this.kType;
});

productSchema.virtual('isAvailable').get(function() {
  return this.availabilityStatus === 'In Stock';
});

// Ensure virtual fields are included when converting to JSON
productSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    // Add virtual fields to the JSON output
    return ret;
  }
});

productSchema.set('toObject', { virtuals: true });

// Update the updatedAt timestamp before saving
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;
