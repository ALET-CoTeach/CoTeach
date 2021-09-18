const { Router } = require('express');
const SLTController = require('../controllers/slt');
const requiredRoles = require('../utils/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/register', requiredRoles([_admin]), SLTController.register);
router.post('/signin', SLTController.access);

router.get('/', requiredRoles([_admin, _slt, _teacher, _employer]), async (req, res) => {
  const { user } = req;
  const filter = {};

  // Authenticated teachers and slt users can only see slt members from
  // their own school
  if (user.authLevel === _teacher
      || user.authLevel === _slt) filter.schoolId = user.schoolId;

  try {
    const jsonResponse = await SLTController.getAll(filter);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.delete('/:sltId', requiredRoles([_admin]), async (req, res) => {
  const { sltId } = req.params;

  try {
    // Delete one SLT by id from DB, then store response in const
    const jsonResponse = await SLTController.deleteOne(sltId);

    res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:sltId', requiredRoles([_admin]), async (req, res) => {
  const { sltId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update one SLT by id from DB, then store response in const
    const jsonResponse = await SLTController.updateOne(sltId, updateData);

    res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
