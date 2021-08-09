const { Router } = require('express');
const CompanyController = require('../controllers/company');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.delete('/:companyId', requiredRoles(['admin']), (req, res) => {
  const { companyId } = req.params;

  CompanyController.deleteOne(companyId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put('/:companyId', requiredRoles(['admin']), (req, res) => {
    const { companyId } = req.params;

    const updateData = req.body;

    CompanyController.updateOne(companyId, updateData)
        .then((jsonResponse) => {
            res.status(500).json(jsonResponse);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});

module.exports = router;

