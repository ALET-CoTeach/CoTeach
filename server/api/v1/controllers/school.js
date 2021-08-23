const School = require('../models/School');
const Address = require('../models/Address');

module.exports.createOne = (schoolData) => new Promise(async (resolve, reject) => {
  // Destruct schoolData
  const {
    name,
    email,
    phone,
    website,
    parking,
    ofstedlink,
    line1,
    towncity,
    county,
    postcode,
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
        phone,
        website,
        address,
        parking,
        ofstedlink,
      });

      // Saves school object to database
      const savedSchool = await newSchool.save();
      resolve({
        message: 'School successfully created and stored on database',
        school: savedSchool,
        status: 201,
      });
    } else {
      // Runs if account already exits
      resolve({
        message: 'School already stored on database',
        school,
        status: 200,
      });
    }
  } catch (err) {
    reject(err);
  }
});

module.exports.deleteOne = (schoolId) => new Promise(async (resolve, reject) => {
  try {
    const school = await School.findByIdAndDelete(schoolId);

    if (!school) {
      resolve({ message: 'School document never existed or has already been deleted' });
    }

    resolve({ message: 'School successfuly deleted', school });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (schoolId, updateData) => new Promise(async (resolve, reject) => {
  try {
    const {
      name,
      email,
      phone,
      website,
      parking,
      ofstedlink,
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
      website,
      address,
      parking,
      ofstedlink,
    };

    const updatedSchool = await School.findByIdAndUpdate(
      schoolId,
      update,
      {
        new: true,
      },
    );

    if (!updatedSchool) {
      resolve({ message: 'School document was never created or has been deleted' });
    }

    resolve({ message: 'School has succesfully been update', school: updatedSchool });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = () => new Promise(async (resolve, reject) => {
  try {
    const schools = await School.find({});
    resolve({ schools });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (schoolId) => new Promise(async (resolve, reject) => {
  try {
    const school = await School.findOneById(schoolId);

    if (!school) {
      resolve({ message: 'School does not exist in database' });
    }

    resolve({ message: 'School successfully found', school });
  } catch (err) {
    reject(err);
  }
});
