const Teacher = require("../models/Teacher");

module.exports.createOne = (teacherData) =>
  new Promise(async (resolve, reject) => {
    // Destruct teacherData
    const {
      firstname,
      lastname,
      email,
      phone,
      schoolName,
    } = teacherData;

    try {

      // Returns a single document from unique email
      const teacher = await Teacher.findOne({ email });
      if (!teacher) {
        // Check if school exists
        const school = await School.findOne({ name: schoolName });

        if (!school) {
          // Runs if school does not exist
          reject(new Error("School does not exist on database"));
        }

        // Creates new Teacher Object
        const newTeacher = new Teacher({
          firstname,
          lastname,
          email,
          phone,
          school,
        });

        // Saves teacher object to database
        const savedTeacher = await newTeacher.save();
        resolve(savedTeacher);
      } else {
        // Runs if account already exits
        reject(new Error("Teacher already exists"));
      }
    } catch (err) {
      reject(err);
    }
  });

module.exports.deleteOne = (teacherId) =>
  new Promise(async (resolve, reject) => {
    try {
      const teacher = await Teacher.deleteOne({ _id: teacherId });
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
        school,
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

module.export.getOneByEmail = (email) => 
  new Promise(async (resolve, reject) => {
    try {
      const teacher = await Teacher.findOne({ email });
      resolve(teacher);
    } catch (err) {
      reject(err);
    }
