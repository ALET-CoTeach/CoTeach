const SocialMediaPost = require("../models/SocialMediaPost");
const Address = require("../models/Address");

// TODO: Write suitable functions for all methods for the SocialMediaPost model


module.exports.createOne = (socialMediaPostData) =>
  new Promise(async (resolve, reject) => {
    // Destruct socialMediaPostData
    const {
      image,
      caption,
      teacherId,
      schoolId,
    } = socialMediaPostData;

    try {
      const newSocialMediaPost = new SocialMediaPost({
        // Creates new SocialMediaPost Object
        image,
        caption,
        teacherId,
        schoolId,
      });

      // Saves socialMediaPost object to database
      const savedSocialMediaPost = await newSocialMediaPost.save();
      resolve(savedSocialMediaPost);
    } catch (err) {
      reject(err);
    }
  });

module.exports.deleteOne = (socialMediaPostId) =>
  new Promise(async (resolve, reject) => {
    try {
      const socialMediaPost = await SocialMediaPost.deleteOne({ _id: socialMediaPostId });
      resolve({ message: "SocialMediaPost successfuly deleted", socialMediaPost });
    } catch (err) {
      reject(err);
    }
  });

module.exports.updateOne = (socialMediaPostId, updateData) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        image,
        caption,
        teacherId,
        schoolId,
      } = updateData;

      const update = {
        image,
        caption,
        teacherId,
        schoolId,
      };

      const updatedSocialMediaPost = await SocialMediaPost.findOneAndUpdate(
        { _id: socialMediaPostId },
        update,
        {
          // Returns the new document after update is made
          new: true,
        }
      );
      console.log(updatedSocialMediaPost);
      resolve(updatedSocialMediaPost);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const socialMediaPosts = await SocialMediaPost.find({});
      resolve(socialMediaPosts);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOne = (socialMediaPostId) =>
  new Promise(async (resolve, reject) => {
    try {
      const socialMediaPost = await SocialMediaPost.findOne({ _id: socialMediaPostId });
      resolve(socialMediaPost);
    } catch (err) {
      reject(err);
    }
  });

