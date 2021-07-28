const { Router } = require('express');
const SLTController = require('../controllers/slt');
const checkSLTAuth = require('../middleware/check_slt_auth');

const router = Router();

router.post('/register', checkSLTAuth,  SLTController.register);
router.post('/signin', SLTController.access);

module.exports = router;

