const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const School = require('../models/School');

module.exports.deleteOne = (teacherId) => new Promise(async (resolve, reject) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(teacherId);

    if (!teacher) {
      resolve({ message: 'Teacher document never existed or has already been deleted' });
    }

    resolve({ message: 'Teacher successfuly deleted', teacher });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (teacherId, updateData) => new Promise(async (resolve, reject) => {
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
      reject(new Error('School does not exist on database'));
    }

    const update = {
      firstname,
      lastname,
      email,
      phone,
      schoolId: school._id,
    };

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      update,
      {
        new: true,
      },
    );

    if (!updatedTeacher) {
      resolve({ message: 'Teacher document was never created or has been deleted' });
    }

    resolve({ message: 'Teacher has successfully been updated', teacher: updatedTeacher });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = () => new Promise(async (resolve, reject) => {
  try {
    const teachers = await Teacher.find({});
    resolve({ teachers });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (teacherId) => new Promise(async (resolve, reject) => {
  try {
    const teacher = await Teacher.findOneById(teacherId);

    if (!teacher) {
      resolve({ message: 'Teacher does not exist in database' });
    }

    resolve({ message: 'Teacher successfully found', teacher });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOneByEmail = (email) => new Promise(async (resolve, reject) => {
  try {
    const teacher = await Teacher.findOne({ email });
    resolve(teacher);
  } catch (err) {
    reject(err);
  }
});

module.exports.checkForMissingPosts = (teacherId) => new Promise(async (resolve, reject) => {
  try {
    // Get all lesson requests by a teacher
    const lessonRequests = await LessonRequest.find({ teacherId });

    // Empty array for LessonRequest id's with no corresponding SocialMediaPost
    const noMatches = [];

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

module.exports.register = async (req, res) => {
  // Destruct request body
  const {
    firstname,
    lastname,
    email,
    phone,
    schoolName,
    password,
  } = req.body;

  try {
    // Returns a single document from unique email
    const teacher = await Teacher.findOne({ email });

    // Checks if account already exits
    if (teacher) {
      // Send response, can't register an account that already exists
      return res.status(200).json({
        message: 'Account already exists',
      });
    }

    // Hashes password for security
    const hash = await bcrypt.hash(password, 10);
    // Throw error if hashing failed function failed
    if (!hash) throw new Error('Password hashing failed unexpectedly');

    // Check if school exists
    const school = await School.findOne({ name: schoolName });
    if (!school) {
      // Since an teacher 'belongs' to a school
      // If no school is found, teacehr cannot be registered,
      // Hence, return valid response
      res.status(200).json({
        error: 'School does not exist on the database, cannot register a teacher without a valid school',
      });
    }

    // Creates new Teacher Object
    const newTeacher = new Teacher({
      firstname,
      lastname,
      email,
      phone,
      schoolId: school._id,
      password: hash,
    });

    // Saves teacher object to database asynchronously
    // Stores saved teacher data to constant
    const savedTeacher = await newTeacher.save();
    // Throws error if saving to database fails
    if (!savedTeacher) throw new Error('Saving new Teacher to database failed unexpectedly');

    return res.status(201).json({
      message: 'Teacher account created',
    });
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
};

module.exports.access = async (req, res) => {
  // Destruct req.body
  const { email, password } = req.body;

  try {
    // Find single teacher user from unique email
    const teacher = await Teacher.findOne({ email });

    // Checks if teacher doesn't exist
    if (!teacher) {
    // Cannot signin if teacher account does not exist
      return res.status(200).json({
        message: 'Teacher account does not exist on database',
      });
    }

    // result is true or false, true if hashed passwords match
    const result = await bcrypt.compare(password, teacher.password);
    if (result) {
      // Removes password from teacher object,
      // When teacher is returned it won't return the hashed password
      delete teacher.password;

      // Sign unique data with jwt to create a user access token
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

      // Previous tasks have processed properly
      // Return success message as well as access token and authenticated teacher data
      return res.status(200).json({
        message: 'Auth successful',
        token,
        teacher,
      });
    }
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
};

module.exports.deauth = (req, res) => {
  try {
    req.headers.authentication = null;
    req.teacherData = null;
    return res.status(200).json({
      message: 'De-authenticated (Sign Out) success',
    });
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
