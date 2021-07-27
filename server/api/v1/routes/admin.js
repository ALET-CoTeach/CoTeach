const { Router } = require('express');
const AdminController = require('../controllers/admin');

const router = Router();

router.post('/register', AdminController.create);
router.post('/signin', AdminController.access);

module.exports = router;
