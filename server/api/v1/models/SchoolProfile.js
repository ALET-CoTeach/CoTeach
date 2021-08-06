const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolProfileSchema = new Schema(
    {
        schoolName: {
            type: String,
            required: true,
        },
        SchoolAddress: {
            type: String,
            required: true,
        },
        coordinatorName: {
            type: String,
            required: true,
        },
        schoolEmail: {
            type: String,
            required: true,
        },
        schoolPhone: {
            type: String,
            required: true,
        },
        coordinatorEmail: {
            type: String,
            required: true,
        },
        coordinatorPhone: {
            type: String,
            required: true,
        },
        schoolWebsite: {
            type: String,
            required: true,
        }
    },
    {
        // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
        timestamps: true,
    },
);

const schoolProfile = mongoose.model('schoolProfile', schoolProfileSchema);


module.exports = schoolProfile;
