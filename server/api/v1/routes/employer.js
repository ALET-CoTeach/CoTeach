const { Router } = require('express');
const EmployerController = require('../controllers/employer');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['admin']), EmployerController.register);
router.post('/signin', EmployerController.access);
router.post('/signout', requiredRoles(['admin']), EmployerController.deauth);

router.delete('/:employerId', requiredRoles(['admin']), (req, res) => {
  const { employerId } = req.params;

  EmployerController.deleteOne(employerId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:employerId', requiredRoles(['admin']), (req, res) => {
  const { employerId } = req.params;

  const updateData = req.body;

  EmployerController.updateOne(employerId, updateData)
    .then((jsonResponse) => {
      res.status(500).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
