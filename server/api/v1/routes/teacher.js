const { Router } = require('express');
const TeacherController = require('../controllers/teacher');
const requiredRoles = require('../utils/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/register', requiredRoles([_admin, _slt]), TeacherController.register);
router.post('/signin', TeacherController.access);

// Return all teachers stored in the DB
router.get('/', requiredRoles([_admin, _employer, _slt, _teacher]), async (req, res) => {
  const { authLevel, schoolId } = req.user;
  const filter = {};

  if (authLevel === _slt
    || authLevel === _teacher) filter.schoolId = schoolId;

  try {
    // Get all teachers from DB
    const jsonResponse = await TeacherController.getAll(filter);

    // Return a json array of teachers from the DB
    res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    res.status(500).json({ error: err });
  }
});

router.get('/:teacherId', requiredRoles([_admin, _employer, _slt, _teacher]), async (req, res) => {
  const { authLevel, schoolId } = req.user;
  const { teacherId } = req.params;
  const filter = {};

  if (authLevel === _slt
    || authLevel === _teacher) filter.schoolId = schoolId;

  try {
    // Return a single teacher object by id from the DB
    const jsonResponse = await TeacherController.getOne(teacherId, filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

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
