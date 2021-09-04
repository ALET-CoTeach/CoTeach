const { Router } = require('express');
const ActivityRequestController = require('../controllers/activity_request');
const requiredRoles = require('../utils/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/', requiredRoles([_admin, _slt, _teacher]), ActivityRequestController.createOne);

// Return all activity requests based on what the user is allowed to see
// based on authLevel
// As well as filtering out requests of the authenticated user from the
// returned array
router.get('/', requiredRoles([_admin, _slt, _teacher, _employer]), async (req, res) => {
  const { user } = req;
  const filter = {};

  // SLT and Teachers can only see available requests for the school they work at
  // Only teachers and SLT have a schoolId property
  if (user.authLevel === _teacher
      || user.authLevel === _slt) filter.schoolId = user.schoolId;
  // Filter option to exclude activity requests from the current user by
  // their id
  filter[`${user.authLevel}Id`] = { $ne: user._id };
  console.log(filter);

  try {
    const jsonResponse = await ActivityRequestController.getAll(filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.get('/:role::id', requiredRoles([_admin, _slt, _teacher, _employer]), async (req, res) => {
  const { user } = req;
  const { role, id } = req.params;
  const filter = {};

  try {
    // Setup database search filter
    if (role === _slt) filter.sltId = id;
    if (role === _teacher) filter.teacherId = id;
    if (role === _employer) filter.employerId = id;

    // If teacher is authenticated overwrite teacherId field in filter, since teachers
    // can only see their own booked lessons
    if (user.authLevel === _teacher) filter.teacherId = user._id;
    console.log(filter);

    const jsonResponse = await ActivityRequestController.getAll(filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.delete('/:activityRequestId', requiredRoles([_admin]), async (req, res) => {
  const { activityRequestId } = req.params;

  try {
    // Delete one ActivityRequest by id from DB, then store response to const
    const jsonResponse = await ActivityRequestController.deleteOne(activityRequestId);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:activityRequestId', requiredRoles([_admin]), async (req, res) => {
  const { activityRequestId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update on ActivityRequest by id from DB, then store response to const
    const jsonResponse = await ActivityRequestController.updateOne(activityRequestId, updateData);

    return res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
