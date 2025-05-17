const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
 dish_name: {
    type: String,
    required: true,
    trim: true
  },
  restaurant: {
    type: String,
    
    required: true,
  },
  description: {
    type: String,
    required: true
  },

  order_status: {
    type: String,
    required: true,
    enum: ['confirm','pending']
  },
  category: {
    type: String,
    required: true,
    enum: ['Food','Others']
  },
  Quantity: {
    type: Number,
    required: true,
    min:1
  },
  price:{
    type:Number,
    require:true,
    min:10
  },
  orderedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('cart', cartSchema)