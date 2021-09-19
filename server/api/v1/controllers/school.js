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
    line2,
    line3,
    towncity,
    county,
    postcode,
    lat,
    lon,
  } = schoolData;

  try {
    // Returns a single document from unique email
    const school = await School.findOne({ email }).lean();
    if (!school) {
      // Creates new Address Object for School
      const address = new Address({
        line1,
        line2,
        line3,
        towncity,
        county,
        postcode,
        lat,
        lon,
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
      const savedSchool = await newSchool.save().lean();
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
    const school = await School.findByIdAndDelete(schoolId).lean();

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
      line2,
      line3,
      towncity,
      county,
      postcode,
      lat,
      lon,
    } = updateData;

    const update = {
      name,
      email,
      phone,
      website,
      address: {
        line1,
        line2,
        line3,
        towncity,
        county,
        postcode,
        lat,
        lon,
      },
      parking,
      ofstedlink,
    };

    const updatedSchool = await School.findByIdAndUpdate(
      schoolId,
      update,
      {
        new: true,
      },
    ).lean();

    if (!updatedSchool) {
      resolve({ message: 'School document was never created or has been deleted' });
    }

    resolve({ message: 'School has succesfully been update', school: updatedSchool });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = (filter) => new Promise(async (resolve, reject) => {
  try {
    const schools = await School.find(filter).lean();
    resolve({ schools });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (schoolId, filter) => new Promise(async (resolve, reject) => {
  try {
    const school = await School.findOne({ _id: schoolId, ...filter });

    if (!school) {
      resolve({ message: 'School does not exist in database' });
    }

    resolve({ message: 'School successfully found', school });
  } catch (err) {
    reject(err);
  }
});
