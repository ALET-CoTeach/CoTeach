const { Router } = require('express');
const LessonRequestController = require('../controllers/lesson_request');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/', requiredRoles(['admin', 'slt', 'teacher']), LessonRequestController.createOne);

router.get('/', requiredRoles(['admin', 'slt', 'employer']), async (req, res) => {
  try {
    // Get all LessonRequests from DB, then store response to const
    const jsonResponse = await LessonRequestController.getAll();

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.delete('/:lessonRequestId', requiredRoles(['admin']), async (req, res) => {
  const { lessonRequestId } = req.params;

  try {
    // Delete one LessonRequest by id from DB, then store response to const
    const jsonResponse = await LessonRequestController.deleteOne(lessonRequestId);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:lessonRequestId', requiredRoles(['admin']), async (req, res) => {
  const { lessonRequestId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update on LessonRequest by id from DB, then store response to const
    const jsonResponse = await LessonRequestController.updateOne(lessonRequestId, updateData);

    return res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
