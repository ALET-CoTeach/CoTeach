const Company = require('../models/Company');
const Address = require('../models/Address');

module.exports.createOne = (companyData) => new Promise(async (resolve, reject) => {
  // Destruct companyData
  const {
    name,
    email,
    website,
    line1,
    towncity,
    county,
    postcode,
  } = companyData;

  try {
    // Returns a single document from unique email
    const company = await Company.findOne({ email });
    if (!company) {
      // Creates new Address Object for Company
      const address = new Address({
        line1,
        towncity,
        county,
        postcode,
      });

      // Creates new Company Object
      const newCompany = new Company({
        name,
        email,
        website,
        address,
      });

      // Saves company object to database
      const savedCompany = await newCompany.save();
      resolve({
        message: 'Company successfully created and stored on database',
        company: savedCompany,
        status: 201,
      });
    } else {
      // Runs if account already exits
      resolve({
        message: 'Company already stored on database',
        company,
        status: 200,
      });
    }
  } catch (err) {
    reject(err);
  }
});

module.exports.deleteOne = (companyId) => new Promise(async (resolve, reject) => {
  try {
    const company = await Company.findByIdAndDelete(companyId);

    if (!company) {
      resolve({ message: 'Company document never existed or has already been deleted' });
    }

    resolve({ message: 'Company successfuly deleted', company });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (companyId, updateData) => new Promise(async (resolve, reject) => {
  try {
    const {
      name,
      email,
      website,
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
      website,
      address,
    };

    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      update,
      {
        new: true,
      },
    );

    if (!updatedCompany) {
      resolve({ message: 'Company document was never created or has been deleted' });
    }

    resolve({ message: 'Company has successfully been updated', company: updatedCompany });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = () => new Promise(async (resolve, reject) => {
  try {
    const companies = await Company.find({});
    resolve({ companies });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (companyId) => new Promise(async (resolve, reject) => {
  try {
    const company = await Company.findById(companyId);

    if (!company) {
      resolve({ message: 'Company does not exist in database' });
    }

    resolve({ message: 'Company successfully found', company });
  } catch (err) {
    reject(err);
  }
});
