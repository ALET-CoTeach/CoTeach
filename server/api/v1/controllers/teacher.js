const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.deleteOne = (teacherId) =>
  new Promise(async (resolve, reject) => {
    try {
      const teacher = await Teacher.findOneByIdAndDelete(teacherId);
      
      if (!teacher) {
        resolve({ message: "Teacher document never existed or has already been deleted" }); 
      }

      resolve({ message: "Teacher successfuly deleted", teacher });
    } catch (err) {
      reject(err);
    }
  });

module.exports.updateOne = (teacherId, updateData) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        firstname,
        lastname,
        email,
        phone,
        schoolName,
      } = updateData;

      // Check if school exists
      const school = await School.findOne({ name: schoolName });

      if (!school) {
        // Runs if school does not exist
        reject(new Error("School does not exist on database"));
      }

      const update = {
        firstname,
        lastname,
        email,
        phone,
        schoolId: school._id,
      };

      const updatedTeacher = await Teacher.findOneAndUpdate(
        { _id: teacherId },
        update,
        {
          new: true,
        }
      );
      console.log(updatedTeacher);
      resolve(updatedTeacher);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const teachers = await Teacher.find({});
      resolve(teachers);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOne = (teacherId) =>
  new Promise(async (resolve, reject) => {
    try {
      const teacher = await Teacher.findOne({ _id: teacherId });
      resolve(teacher);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOneByEmail = (email) => 
  new Promise(async (resolve, reject) => {
    try {
      const teacher = await Teacher.findOne({ email });
      resolve(teacher);
    } catch (err) {
      reject(err);
    }
  });

module.exports.checkForMissingPosts = (teacherId) =>
  new Promise(async (resolve, reject) => {
    try {
      // Get all lesson requests by a teacher
      const lessonRequests = await LessonRequest.find({ teacherId });

      // Empty array for LessonRequest id's with no corresponding SocialMediaPost
      let noMatches = [];
      
      // Checks for atleast one SocialMediaPost for a specific lessonId
      lessonRequests.forEach(async (lessonRequest) => {
        // Null when no document found
        const socialMediaPost = await SocialMediaPost.findOne({ lessonId: lessonRequest._id });
       
        // Adds LessonRequest id to array if no social media post found
        if (!socialMediaPost) {
          noMatches.push(lessonRequest._id);
        }
      });

      resolve(noMatches);
    } catch (err) {
      reject(err);
    }
  });

module.exports.register = (req, res) => {
  // Destruct request body
  const {
    firstname,
    lastname,
    email,
    phone,
    schoolName,
    password,
  } = req.body;

  // Returns a single document from unique email
  Teacher.findOne({ email }, (err, teacher) => {

    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    // Checks if account already exits
    if (teacher !== null) {
      return res.status(409).json({
        message: 'Account already exists',
      });
    }

    // Hashes password for security
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }

      // Check if school exists
      const school = School.findOne({ name: schoolName }, (err, school) => {
        if (!school) {
          // Runs if school does not exist
          res.status(500).json({
            error: 'School does not exist on the database',
          });
        }
      });


      // Creates new Teacher Object
      const newTeacher = new Teacher({
        firstname,
        lastname,
        email,
        phone,
        schoolId : school._id,
        password: hash,
      });

      // Saves teacher object to database
      newTeacher
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: 'Teacher account created',
          });
        })
        .catch((saveErr) => {
          console.log(saveErr);
          res.status(500).json({
            error: saveErr,
          });
        });
    });
  });
};

module.exports.access = (req, res) => {
  // Destruct req.body
  const { email, password } = req.body;

  // Find single teacher user from unique email
  Teacher.findOne({ email }, (err, teacher) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    bcrypt.compare(password, teacher.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            email: teacher.email,
            id: teacher._id,
          },
          process.env.JWT_TEACHER_KEY,
          {
            expiresIn: '1h',
          },
        );
        return res.status(200).json({
          message: 'Auth successful',
          token,
        });
      }
      res.status(401).json({
        message: 'Auth failed',
      });
    });
  })
};

module.exports.deauth = (req, res) => {
  try {
    req.headers.authentication = null;
    req.teacherData = null;
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
