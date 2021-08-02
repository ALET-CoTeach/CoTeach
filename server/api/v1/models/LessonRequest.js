const mongoose = require('mongoose');

const { Schema } = mongoose;

const LessonRequestSchema = new Schema(
    {
        schoolid: {
            type: String,
            require: true,
        },
        year: {
            type: Number,
            require: true,
        },
        subject: {
            type: String,
            require: true,
        },
        lessonTitle: {
            type: String,
            require: true,
        },
        lessonDetails: {
            type: String,
            require: true,
        },
        term: {
            typ: String,
            require: true,
            
        },
        preferredDay: {
            type: String,
            require: true,
        },
        preferredTime: {
            type: String,
            require: true
        },
        teacherId: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
    },
);

const LessonRequest = mongoose.model('LessonRequest', LessonRequestSchema );

module.exports = LessonRequest;
