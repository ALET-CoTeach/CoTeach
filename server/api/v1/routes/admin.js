const { Router } = require('express');
const AdminController = require('../controllers/admin');
const requiredRoles = require('../middleware/requiredRoles');
const {
  _admin, _employer, _slt, _teacher,
} = require('../utils/UserTypes');

const router = Router();

router.post('/register', requiredRoles([_admin]), AdminController.register);
router.post('/signin', AdminController.access);

module.exports = router;
