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

  // Only teachers and SLT have a schoolId property
  // Teachers can only see available requests for the school they work at
  if (user.authLevel === _teacher) filter.schoolId = user.schoolId;

  try {
    const jsonResponse = await ActivityRequestController.getAll(filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

// Get all requests, pending, booked, or negotiating, for a specific user
router.get('/:role::id', requiredRoles([_admin]), async (req, res) => {
  const { role, id } = req.params;
  const filter = {};

  try {
    // Setup database search filter
    if (role === _slt) filter.sltId = id;
    if (role === _teacher) filter.teacherId = id;
    if (role === _employer) filter.employerId = id;

    const jsonResponse = await ActivityRequestController.getAll(filter);
    console.log(jsonResponse.activityRequests.length)

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

router.put('/negotiate', requiredRoles([_admin, _employer]), async (req, res) => {
  const { activityRequestId } = req.body;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update on ActivityRequest by id from DB, then store response to const
    const jsonResponse = await ActivityRequestController.updateNegotiationData(activityRequestId, updateData);

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

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
