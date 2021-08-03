const mongoose = require('mongoose');

const { Schema } = mongoose;

const LessonRequestSchema = new Schema(
    {
        schoolid: {
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
        lessonTitle: {
            type: String,
            required: true,
        },
        lessonDetails: {
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
            required: true
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
        }
    },
    {
        timestamps: true,
    },
);

const LessonRequest = mongoose.model('LessonRequest', LessonRequestSchema);

module.exports = LessonRequest;
