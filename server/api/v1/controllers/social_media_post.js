const axios = require('axios');
const SocialMediaPost = require('../models/SocialMediaPost');

// TODO: Write suitable functions for all methods for the SocialMediaPost model

module.exports.createOne = (socialMediaPostData) => new Promise(async (resolve, reject) => {
  // Destruct socialMediaPostData
  const {
    image,
    activityId,
    caption,
    teacherId,
    schoolId,
  } = socialMediaPostData;

  try {
    const newSocialMediaPost = new SocialMediaPost({
      // Creates new SocialMediaPost Object
      image,
      activityId,
      caption,
      teacherId,
      schoolId,
    });

    // Saves socialMediaPost object to database
    const savedSocialMediaPost = await newSocialMediaPost.save().lean();
    resolve({
      message: 'SocialMediaPost successfully created and stored on database',
      socialMediaPost: savedSocialMediaPost,
      status: 201,
    });
  } catch (err) {
    reject(err);
  }
});

module.exports.deleteOne = (socialMediaPostId) => new Promise(async (resolve, reject) => {
  try {
    const socialMediaPost = await SocialMediaPost.findByIdAndDelete(socialMediaPostId).lean();

    if (!socialMediaPost) {
      resolve({ message: 'SocialMediaPost document never existed or has already been deleted' });
    }

    resolve({ message: 'SocialMediaPost successfuly deleted', socialMediaPost });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (socialMediaPostId, updateData) => new Promise(async (resolve, reject) => {
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

    const updatedSocialMediaPost = await SocialMediaPost.findByIdAndUpdate(
      socialMediaPostId,
      update,
      {
        // Returns the new document after update is made
        new: true,
      },
    ).lean();

    if (!updatedSocialMediaPost) {
      resolve({ message: 'SocialMediaPost document was never created or has never been deleted' });
    }

    resolve({ message: 'SocialMediaPost has successfully been updated', socialMediaPost: updatedSocialMediaPost });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = (filter) => new Promise(async (resolve, reject) => {
  try {
    const socialMediaPosts = await SocialMediaPost.find(filter).lean();
    resolve({ socialMediaPosts });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (socialMediaPostId, filter) => new Promise(async (resolve, reject) => {
  try {
    const socialMediaPost = await SocialMediaPost.findOne({
      _id: socialMediaPostId,
      ...filter,
    }).lean();

    if (!socialMediaPost) {
      resolve({ message: 'SocialMediaPost does not exist in database' });
    }

    resolve({ message: 'SocialMediaPost successfully found', socialMediaPost });
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
        message: 'SocialMediaPost document updated successfuly',
        post,
      });
    });
  } else {
    // Respond with error message
    return res.status(406).json({
      message: 'Error: Status values are not valid. Check for spelling error',
    });
  }
};
//
module.exports.postFacebook = (id) => new Promise(async (resolve, reject) => {
  try {
    const post = await SocialMediaPost.findById(id).lean();
    if (post && post.facebookStatus === 'approved') {
      const url = `https://graph.facebook.com/v11.0/105175718455172/photos?url=${post.image}&message=${post.caption}&access_token=${process.env.FACEBOOK_TOKEN}`;

      const response = await axios.post(url);
      if (response) resolve(response);
    }
  } catch (err) {
    reject(err);
  }
});
