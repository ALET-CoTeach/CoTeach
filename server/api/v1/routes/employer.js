const { Router } = require('express');
const EmployerController = require('../controllers/employer');
const checkEmployerAuth = require('../middleware/check_employer_auth');

const router = Router();

router.post('/register', checkEmployerAuth, EmployerController.register);
router.post('/signin', EmployerController.access);
router.post('/signout', checkEmployerAuth, EmployerController.deauth);

module.exports = router;


