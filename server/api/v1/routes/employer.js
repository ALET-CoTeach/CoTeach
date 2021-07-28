const { Router } = require('express');
const EmployerController = require('../controllers/employer');
const checkAdminAuth = require('../middleware/check_admin_auth');

const router = Router();

router.post('/register', checkAdminAuth, EmployerController.register);
router.post('/signin', EmployerController.access);

module.exports = router;


