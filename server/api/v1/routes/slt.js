const { Router } = require('express');
const SLTController = require('../controllers/slt');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['slt']),  SLTController.register);
router.post('/signin', SLTController.access);
router.post('/signout', requiredRoles(['slt']), SLTController.deauth);

module.exports = router;

