const { Router } = require('express');
const AdminController = require('../controllers/admin');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['admin']),  AdminController.register);
router.post('/signin', AdminController.access);
router.post('/signout', requiredRoles(['admin']), AdminController.deauth);

module.exports = router;
