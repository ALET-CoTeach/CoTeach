const mongoose = require('mongoose');

const { Schema } = mongoose;

const socialMediaPostSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    teacherId: {
      type: String,
      required: true,
    },
    schoolId: {
      type: String,
      required: true,
    },
    activityId: {
      type: String,
      required: true,
    },
    reviewerId: {
      type: String,
    },
    linkedinStatus: {
      type: String,
      default: 'pending',
    },
    facebookStatus: {
      type: String,
      default: 'pending',
    },
    facebookPostUrl: {
      type: String,
    },
    linkedinPostUrl: {
      type: String,
    },
  },
  {
    // Mongoose will create a "createdAt" and "updatedAt" properties to schema 😀
    timestamps: true,
  },
);

const SocialMediaPost = mongoose.model('SocialMediaPost', socialMediaPostSchema);

module.exports = SocialMediaPost;
