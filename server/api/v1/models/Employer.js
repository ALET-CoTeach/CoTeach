const mongoose = require('mongoose');

const { Schema } = mongoose;

const employerSchema  = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    phone: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
    timestamps: true,
  },
);

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;

