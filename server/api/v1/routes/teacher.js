const { Router } = require('express');
const TeacherController = require('../controllers/teacher');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['teacher']), TeacherController.register);
router.post('/signin', TeacherController.access);
router.post('/signout', requiredRoles(['teacher']), TeacherController.deauth);

module.exports = router;

