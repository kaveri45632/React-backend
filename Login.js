 const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
   name: {

    type: String,
    required: true,
    trim: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  address: {
     type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Login',LoginSchema);