const { Router } = require('express');
const AdminController = require('../controllers/admin');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['admin']),  AdminController.register);
router.post('/signin', AdminController.access);
router.post('/signout', requiredRoles(['admin']), AdminController.deauth);

router.delete('/:adminId', requiredRoles(['admin']), (req, res) => {
    const { adminId } = req.params;

    AdminController.deleteOne(adminId)
        .then((jsonResponse) => {
            res.status(200).json(jsonResponse);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});

router.put('/:adminId', requiredRoles(['admin']), (req, res) => {
    const { adminId } = req.params;

    const updateData = req.body;

    AdminController.updateOne(adminId, updateData)
        .then((jsonResponse) => {
            res.status(500).json(jsonResponse);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});
module.exports = router;
