const { Router } = require('express');
const SchoolController = require('../controllers/school');
const requiredRoles = require('../middleware/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/', requiredRoles([_admin]), async (req, res) => {
  // Request body will be processed in Controller
  // And will be validated
  const schoolData = req.body;

  try {
    // Create and save new School to DB, then store response to const

    const jsonResponse = await SchoolController.createOne(schoolData);
    return res.status(jsonResponse.status).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.get('/', requiredRoles([_admin, _slt, _employer]), async (req, res) => {
  try {
    // Get all Schools from DB, then store response to const
    const jsonResponse = await SchoolController.getAll();
    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.delete('/:schoolId', requiredRoles([_admin]), async (req, res) => {
  const { schoolId } = req.params;

  try {
    // Delete one School by id from DB, then store response in const
    const jsonResponse = await SchoolController.deleteOne(schoolId);
    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:schoolId', requiredRoles([_admin]), async (req, res) => {
  const { schoolId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update one School by id from DB, then store response to const
    const jsonResponse = await SchoolController.updateOne(schoolId, updateData);

    res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
