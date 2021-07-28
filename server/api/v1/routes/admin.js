const { Router } = require('express');
const AdminController = require('../controllers/admin');
const checkAdminAuth = require('../middleware/check_admin_auth');

const router = Router();

router.post('/register', checkAdminAuth,  AdminController.register);
router.post('/signin', AdminController.access);

module.exports = router;
