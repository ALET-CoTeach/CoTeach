const { Router } = require('express');
const TeacherController = require('../controllers/teacher');
const checkTeacherAuth = require('../middleware/check_teacher_auth');

const router = Router();

router.post('/register', checkTeacherAuth, TeacherController.register);
router.post('/signin', TeacherController.access);
router.post('/signout', checkTeacherAuth, TeacherController.deauth);

module.exports = router;

