const mongoose = require('mongoose');

const { Schema } = mongoose;

const sltSchema  = new Schema(
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
    },
    schoolId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    coordinator: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  {
    // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
    timestamps: true,
  },
);

const SLT = mongoose.model('SLT', sltSchema);

module.exports = SLT;

