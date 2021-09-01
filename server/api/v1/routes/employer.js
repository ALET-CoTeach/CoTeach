const { Router } = require('express');
const EmployerController = require('../controllers/employer');
const requiredRoles = require('../utils/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/register', requiredRoles([_admin]), EmployerController.register);
router.post('/signin', EmployerController.access);

router.delete('/:employerId', requiredRoles([_admin]), async (req, res) => {
  const { employerId } = req.params;

  try {
    // Delete employer by id from DB, then stores response in const
    const jsonResponse = await EmployerController.deleteOne(employerId);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:employerId', requiredRoles([_admin]), async (req, res) => {
  const { employerId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update employer by id from DB, then stores response in const
    const jsonResponse = await EmployerController.updateOne(employerId, updateData);

    return res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
