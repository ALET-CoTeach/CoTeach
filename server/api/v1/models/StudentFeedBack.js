const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentFeedbackSchema  = new Schema(
  {
    name: {
      type: String,
    },
    data: {
      type: String,
      required: true,
    },
    reviewed: {
        default: false,
    },
  },
  {
    // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
    timestamps: true,
  },
);

const studentFeedback = mongoose.model('studentFeedback', studentFeedbackSchema);

module.exports = studentFeedback;

