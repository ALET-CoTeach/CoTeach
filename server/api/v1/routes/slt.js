const { Router } = require('express');
const SLTController = require('../controllers/slt');
const checkAdminAuth = require('../middleware/check_admin_auth');

const router = Router();

router.post('/register', checkAdminAuth,  SLTController.register);
router.post('/signin', SLTController.access);

module.exports = router;

