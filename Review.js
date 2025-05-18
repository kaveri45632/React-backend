 const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productname: {

    type: String,
    required: true,
    trim: true
  },
  productid: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Ratings: {
    type: Number,
    required: true,
    min: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', itemSchema);