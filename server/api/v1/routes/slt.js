const { Router } = require('express');
const SLTController = require('../controllers/slt');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['admin']), SLTController.register);
router.post('/signin', SLTController.access);
router.post('/signout', requiredRoles(['slt']), SLTController.deauth);

router.delete('/:sltId', requiredRoles(['admin']), (req, res) => {
  const { sltId } = req.params;

  SLTController.deleteOne(sltId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:sltId', requiredRoles(['admin']), (req, res) => {
  const { sltId } = req.params;

  const updateData = req.body;

  TeacherController.updateOne(sltId, updateData)
    .then((jsonResponse) => {
      res.status(500).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
