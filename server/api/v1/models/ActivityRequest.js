const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActivityRequestSchema = new Schema(
  {
    schoolId: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
    preferredDay: {
      type: String,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    teacherId: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    employerId: {
      type: String,
      required: false,
    },
    companyId: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'Lesson',
    },
    feedback: {
      type: String,
    },
    status: {
      type: String,
      default: 'pending',
      // status can either be 'pending', 'negotiating' and 'booked'
    },
  },
  {
    timestamps: true,
  },
);

const ActivityRequest = mongoose.model('ActivityRequest', ActivityRequestSchema);

module.exports = ActivityRequest;
