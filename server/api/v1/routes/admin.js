const { Router } = require('express');
const AdminController = require('../controllers/admin');
const requiredRoles = require('../utils/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/register', requiredRoles([_admin]), AdminController.register);
router.post('/signin', AdminController.access);

// Return all admin's stored in the DB
router.get('/', requiredRoles([_admin]), async (req, res) => {
  try {
    // Get all admins from DB
    const jsonResponse = await AdminController.getAll();

    // Return an array of admins
    res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    res.status(500).json({ error: err });
  }
});

router.get('/:adminId', requiredRoles([_admin]), async (req, res) => {
  const { adminId } = req.params;

  try {
    // Return a single admin object by id from the DB
    const jsonResponse = await AdminController.getOne(adminId);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
