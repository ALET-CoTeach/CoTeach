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
      // Returns a single document from unique email
      const socialMediaPost = await SocialMediaPost.findOne({ email });
      if (!socialMediaPost) {
        // Creates new Address Object for SocialMediaPost
        const address = new Address({
          line1,
          towncity,
          county,
          postcode,
        });

        // Creates new SocialMediaPost Object
        const newSocialMediaPost = new SocialMediaPost({
          name,
          email,
          address,
        });

        // Saves socialMediaPost object to database
        const savedSocialMediaPost = await newSocialMediaPost.save();
        resolve(savedSocialMediaPost);
      } else {
        // Runs if account already exits
        reject(new Error("SocialMediaPost already exists"));
      }
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
        name,
        email,
        line1,
        towncity,
        county,
        postcode,
      } = updateData;

      const address = {
        line1,
        towncity,
        county,
        postcode,
      };

      const update = {
        name,
        email,
        address,
      };

      const updatedSocialMediaPost = await SocialMediaPost.findOneAndUpdate(
        { _id: socialMediaPostId },
        update,
        {
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

