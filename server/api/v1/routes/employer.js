const { Router } = require('express');
const EmployerController = require('../controllers/employer');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['employer']), EmployerController.register);
router.post('/signin', EmployerController.access);
router.post('/signout', requiredRoles(['employer']), EmployerController.deauth);

module.exports = router;


