const School = require("../models/School");
const Address = require("../models/Address");

module.exports.createOne = (schoolData) =>
  new Promise(async (resolve, reject) => {
    // Destruct schoolData
    const {
      name,
      email,
      line1,
      towncity,
      county,
      postcode,
      customerId,
    } = schoolData;

    try {
      // Returns a single document from unique email
      const school = await School.findOne({ email });
      if (!school) {
        // Creates new Address Object for School
        const address = new Address({
          line1,
          towncity,
          county,
          postcode,
        });

        // Creates new School Object
        const newSchool = new School({
          name,
          email,
          address,
        });

        // Saves school object to database
        const savedSchool = await newSchool.save();
        resolve(savedSchool);
      } else {
        // Runs if account already exits
        reject(new Error("School already exists"));
      }
    } catch (err) {
      reject(err);
    }
  });

module.exports.deleteOne = (schoolId) =>
  new Promise(async (resolve, reject) => {
    try {
      const school = await School.findByIdAndDelete(schoolId);

      if (!school) {
        resolve({ message: "School document never existed or has already been deleted" });
      }

      resolve({ message: "School successfuly deleted", school });
    } catch (err) {
      reject(err);
    }
  });

module.exports.updateOne = (schoolId, updateData) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        name,
        email,
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
        address,
      };

      const updatedSchool = await School.findOneAndUpdate(
        { _id: schoolId },
        update,
        {
          new: true,
        }
      );
      console.log(updatedSchool);
      resolve(updatedSchool);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const schools = await School.find({});
      resolve(schools);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOne = (schoolId) =>
  new Promise(async (resolve, reject) => {
    try {
      const school = await School.findOne({ _id: schoolId });
      resolve(school);
    } catch (err) {
      reject(err);
    }
  });

