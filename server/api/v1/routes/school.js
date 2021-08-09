const { Router } = require('express');
const SchoolController = require('../controllers/school');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/'. requiredRole(['admin']), (req, res) => {
  const schoolData = req.body;

  SchoolController.createOne(schoolData)
    .then((jsonResponse) => {
      res.status(jsonResponse.status).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.get('/', requiredRoles(['admin', 'slt', 'employer']), (req, res) => {
  SchoolController.getAll()
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete('/:schoolId', requiredRoles(['admin']), (req, res) => {
  const { schoolId } = req.params;

  SchoolController.deleteOne(schoolId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:schoolId', requiredRoles(['admin']), (req, res) => {
  const { schoolId } = req.params;

  const updateData = req.body;

  SchoolController.updateOne(schoolId, updateData)
    .then((jsonResponse) => {
      res.status(500).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;

