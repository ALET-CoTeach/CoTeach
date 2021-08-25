const mongoose = require('mongoose');

const { Schema } = mongoose;

const employerSchema = new Schema(
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
    companyId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
    timestamps: true,
  },
);

employerSchema.virtual('fullname').get(() => `${this.firstname} ${this.lastname}`);

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
