const { Router } = require('express');
const ActivityRequestController = require('../controllers/activity_request');
const requiredRoles = require('../middleware/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/', requiredRoles([_admin, _slt, _teacher]), ActivityRequestController.createOne);

router.get('/available', requiredRoles([_admin, _slt, _teacher, _employer]), async (req, res) => {
  const filter = { employerId: { $exists: false }, companyId: { $exists: false } };

  // SLT and Teachers can only see available requests for the school they work at
  if (req.sltData) filter.schoolId = req.sltData.schoolId;
  if (req.teacherData) filter.schoolId = req.teacherData.schoolId;

  try {
    const jsonResponse = await ActivityRequestController.getAll(filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.get('/booked/:role::id', requiredRoles([_admin, _slt, _teacher, _employer]), async (req, res) => {
  const { role, id } = req.params;
  const filter = { employerId: { $exists: true } };

  try {
    // Setup database search filter
    if (role === _teacher) filter.teacherId = id;
    if (role === _employer) filter.employerId = id;

    // If teacher is authenticated overwrite teacherId field in filter, since teachers
    // can only see their own booked lessons
    if (req.teacherData) filter.teacherId = req.teacherData._id;
    console.log(filter);

    const jsonResponse = await ActivityRequestController.getAll(filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.delete('/:lessonRequestId', requiredRoles([_admin]), async (req, res) => {
  const { lessonRequestId } = req.params;

  try {
    // Delete one ActivityRequest by id from DB, then store response to const
    const jsonResponse = await ActivityRequestController.deleteOne(lessonRequestId);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:lessonRequestId', requiredRoles([_admin]), async (req, res) => {
  const { lessonRequestId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update on ActivityRequest by id from DB, then store response to const
    const jsonResponse = await ActivityRequestController.updateOne(lessonRequestId, updateData);

    return res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
