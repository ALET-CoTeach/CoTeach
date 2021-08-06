const mongoose = require('mongoose');

const { Schema } = mongoose;

const { addressSchema } = require('./Address');

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  website: {
    type: String,
    required: true,
  }
}, {
  // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
  timestamps: true,
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;


