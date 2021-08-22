const { Router } = require('express');
const CompanyController = require('../controllers/company');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/', requiredRoles(['admin']), async (req, res) => {
  // Request body will be processed in Controller
  // And will be validated
  const companyData = req.body;

  try {
    // Create new Company in DB, and store success response in const
    const jsonResponse = await CompanyController.createOne(companyData);

    return res.status(jsonResponse.status).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.get('/', requiredRoles(['admin', 'slt', 'employer']), async (req, res) => {
  try {
    // Get all companies from DB, and store success response in const
    const jsonResponse = await CompanyController.getAll();

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.delete('/:companyId', requiredRoles(['admin']), async (req, res) => {
  const { companyId } = req.params;

  try {
    // Delete a company by id in DB, and store success response in const
    const jsonResponse = await CompanyController.deleteOne(companyId);

    return res.status(200).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

router.put('/:companyId', requiredRoles(['admin']), async (req, res) => {
  const { companyId } = req.params;

  // Request body will be destructured in Controller method
  // And will be validated
  const updateData = req.body;

  try {
    // Update a company by id in DB, and store success response in const
    const jsonResponse = await CompanyController.updateOne(companyId, updateData);

    return res.status(500).json(jsonResponse);
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
