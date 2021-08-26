const { Router } = require('express');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const SocialMediaPostController = require('../controllers/social_media_post');
const requiredRoles = require('../middleware/requiredRoles');

const upload = multer({ dest: multer.memoryStorage() });

const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/', requiredRoles([_admin, _slt, _teacher]), multer({ storage: multer.memoryStorage() }).single('image'), async (req, res) => {
  const socialMediaPostData = req.body;

  if (req.user.authLevel === _teacher) {
    socialMediaPostData.status = 'pending';
  }
  const timestamp = Date.now();

  const storage = new Storage({ keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS });
  const bucketName = 'images-aeon';
  const bucket = storage.bucket(bucketName);
  console.log(req.file);

  const fileExt = req.file.originalname.split('.')[1];

  const file = bucket.file(`${req.user._id}:${timestamp}.${fileExt}`);

  console.log(req.file.buffer);

  socialMediaPostData.image = file.publicUrl();

  try {
    // Create and save new SocialMediaPost from DB, then store response in const
    const jsonResponse = await SocialMediaPostController.createOne(socialMediaPostData);
    if (!jsonResponse) await file.delete();
    await file.save(req.file.buffer);

    res.status(jsonResponse.status).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.get('/', requiredRoles([_admin, _slt]), async (req, res) => {
  try {
    // Get all SocialMediaPosts from DB, then store response in const
    const jsonResponse = await SocialMediaPostController.getAll();

    res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.delete('/:socialMediaPostId', requiredRoles([_admin]), async (req, res) => {
  const { socialMediaPostId } = req.params;

  try {
    // Delete one SocialMediaPost by id from DB, then store response in const
    const jsonResponse = await SocialMediaPostController.deleteOne(socialMediaPostId);

    res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:socialMediaPostId', requiredRoles([_admin]), async (req, res) => {
  const { socialMediaPostId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update one SocialMediaPost by id from DB, then store response in const
    const jsonResponse = await SocialMediaPostController.updateOne(socialMediaPostId, updateData);

    res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
