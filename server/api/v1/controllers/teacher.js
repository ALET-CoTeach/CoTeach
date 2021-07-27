const Teacher = require("../models/Teacher");
const Address = require("../models/Address");

module.exports.createOne = (teacherData) =>
  new Promise(async (resolve, reject) => {
    // Destruct teacherData
    const {
      name,
      email,
      phone,
      line1,
      towncity,
      county,
      postcode,
      customerId,
    } = teacherData;

    try {
      // Returns a single document from unique email
      const teacher = await Teacher.findOne({ email });
      if (!teacher) {
        // Creates new Address Object for Teacher
        const address = new Address({
          line1,
          towncity,
          county,
          postcode,
        });

        // Creates new Teacher Object
        const newTeacher = new Teacher({
          name,
          email,
          phone,
          address,
          customerId,
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
        name,
        email,
        phone,
        line1,
        towncity,
        county,
        postcode,
      } = updateData;

      const address = {
        line1,
        towncity,
        county,
        postcode,
      };

      const update = {
        name,
        email,
        phone,
        address,
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
