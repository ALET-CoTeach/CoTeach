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

module.exports.review = (req, res) => {
  const {
    id: postId,
    facebookStatus,
    linkedinStatus,
  } = req.body;

  const updateData = {
    facebookStatus,
    linkedinStatus,
    reviewerId: req.adminId.id || req.sltId.id,
  }; 

  // Array of valid values for facebookStatus and linkedinStatus
  const valid = ['pending', 'approved', 'rejected', null];

  // Check that statuses are valid
  if (valid.included(facebookStatus) && valid.included(linkedinStatus)) {
  
    // Update SocialMediaPost document
    SocialMediaPost.updateOne({ _id: postId }, updateData, (err, post) => { 
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      
      // Return success response with updated post attached
      return res.status(200).json({
        message: "SocialMediaPost document updated successfuly",
        post,
      });
    }); 

  } else {
    // Respond with error message
    return res.status(406).json({
      message: "Error: Status values are not valid. Check for spelling error"
    });
  }
};
//
module.exports.postFacebook = (req, res) => {
  const { id:postId} = req.body;
  SocialMediaPost.findOne({ _id: postId }, (err, post) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    if (post.facebookStatus === 'approved'){
      const url = `https://graph.facebook.com/v11.0/105175718455172/photos?url=${post.image}&message=${post.caption}&access_token=${process.env.FACEBOOK_TOKEN}`
      axios.post(url)
        .then((response) => {
          res.status(201).json({
            message: "Posted to Facebook successfully",
          });
        })
        .catch((err) => {
          return res.status(500).json({
            error: err,
          });
        });
      }
  });
};




