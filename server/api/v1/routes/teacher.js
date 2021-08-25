const { Router } = require('express');
const TeacherController = require('../controllers/teacher');
const requiredRoles = require('../middleware/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/register', requiredRoles([_admin, _slt]), TeacherController.register);
router.post('/signin', TeacherController.access);

router.delete('/:teacherId', requiredRoles([_admin, _slt]), async (req, res) => {
  const { teacherId } = req.params;

  try {
    // Delete one Teacher by id from DB, then store response in const
    const jsonResponse = await TeacherController.deleteOne(teacherId);

    res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:teacherId', requiredRoles([_admin, _slt]), async (req, res) => {
  const { teacherId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update one Teacher by id from DB, then store response in const
    const jsonResponse = await TeacherController.updateOne(teacherId, updateData);

    res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
