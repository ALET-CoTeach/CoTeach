const { Router } = require('express');
const SocialMediaPostController = require('../controllers/social_media_post');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/'. requiredRoles(['admin', 'slt', 'teacher']), (req, res) => {
  const socialMediaPostData = req.body;

  SocialMediaPostController.createOne(socialMediaPostData)
    .then((jsonResponse) => {
      res.status(jsonResponse.status).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.get('/', requiredRoles(['admin', 'slt']), (req, res) => {
  SocialMediaPostController.getAll()
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete('/:socialMediaPostId', requiredRoles(['admin']), (req, res) => {
  const { socialMediaPostId } = req.params;

  SocialMediaPostController.deleteOne(socialMediaPostId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:socialMediaPostId', requiredRoles(['admin']), (req, res) => {
  const { socialMediaPostId } = req.params;

  const updateData = req.body;

  SocialMediaPostController.updateOne(socialMediaPostId, updateData)
    .then((jsonResponse) => {
      res.status(500).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;

