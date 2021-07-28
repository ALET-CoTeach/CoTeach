const { Router } = require('express');
const TeacherController = require('../controllers/teacher');
const checkAdminAuth = require('../middleware/check_admin_auth');

const router = Router();

router.post('/register', checkAdminAuth, TeacherController.register);
router.post('/signin', TeacherController.access);

module.exports = router;

