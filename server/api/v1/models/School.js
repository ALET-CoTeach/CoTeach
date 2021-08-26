const mongoose = require('mongoose');

const { Schema } = mongoose;

const { addressSchema } = require('./Address');

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  emailDomains: [{
    type: String,
    required: true,
  }],
  website: {
    type: String,
    required: true,
  },
  phone: [{
    type: String,
    required: true,
  }],
  address: {
    type: addressSchema,
    required: true,
  },
  parking: {
    type: String,
  },
  ofstedlink: {
    type: String,
  },
}, {
  // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
  timestamps: true,
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
