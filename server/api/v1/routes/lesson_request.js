const { Router } = require('express');
const LessonRequestController = require('../controllers/lesson_request');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.delete('/:lessonRequestId', requiredRoles(['admin']), (req, res) => {
  const { lessonRequestId } = req.params;

  LessonRequestController.deleteOne(lessonRequestId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:lessonRequestId', requiredRoles(['admin']), (req, res) => {
  const { lessonRequestId } = req.params;

  const updateData = req.body;

  LessonRequestController.updateOne(lessonRequestId, updateData)
    .then((jsonResponse) => {
      res.status(500).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;

