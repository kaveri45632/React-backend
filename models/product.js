const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  Ratings: {
    type: Number,
    required: true,
    max: 5
  },

  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Books', 'Other']
  },

  Quality: {
    type: String,
    required: true,
    enum: ['Good', 'Bad']
  },

  salesAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('product', productSchema); 