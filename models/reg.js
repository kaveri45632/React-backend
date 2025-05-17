const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
 username: {
    type: String,
    required: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
  },

  phoneno: {
    type: Number,
    required: true,
    min:10
  },

  pincode: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
    enum: ['Male','Female']
  },
  
}
);

module.exports = mongoose.model('reg', regSchema)