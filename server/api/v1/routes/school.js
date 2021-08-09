const { Router } = require('express');
const SchoolController = require('../controllers/school');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

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

