const { Router } = require('express');
const TeacherController = require('../controllers/teacher');
const requiredRoles = require('../middleware/requiredRoles');

const router = Router();

router.post('/register', requiredRoles(['admin', 'slt']), TeacherController.register);
router.post('/signin', TeacherController.access);
router.post('/signout', requiredRoles(['teacher']), TeacherController.deauth);

router.delete('/:teacherId', requiredRoles(['admin', 'slt']), (req, res) => {
  const { teacherId } = req.params;
  
  TeacherController.deleteOne(teacherId)
    .then((jsonResponse) => {
      res.status(200).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});  

router.put('/:teacherId', requiredRoles(['admin', 'slt']), (req, res) => {
  const { teacherId } = req.params;

  const updateData = req.body;

  TeacherController.updateOne(teacherId, updateData)
    .then((jsonResponse) => {
      res.status(500).json(jsonResponse);
    })
    .catch((err) => {
      res.status(500).json({ error: err }); 
    });
}); 

module.exports = router;
