const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer');
const Company = require('../models/Company');
const { _employer } = require('../utils/UserTypes');

module.exports.deleteOne = (employerId) => new Promise(async (resolve, reject) => {
  try {
    const employer = await Employer.findByIdAndDelete(employerId).lean();

    if (!employer) {
      resolve({ message: 'Employer document never existed or has already been deleted' });
    }

    resolve({ message: 'Employer successfuly deleted', employer });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (employerId, updateData) => new Promise(async (resolve, reject) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      companyName,
    } = updateData;

    // Check if company exists
    const company = await Company.findOne({ name: companyName }).lean();

    if (!company) {
      // Runs if company does not exist
      throw new Error('Company does not exist on database');
    }

    const update = {
      firstname,
      lastname,
      email,
      phone,
      companyId: company._id,
    };

    const updatedEmployer = await Employer.findByIdAndUpdate(
      employerId,
      update,
      {
        new: true,
      },
    ).lean();

    if (!updatedEmployer) {
      resolve({ message: 'Employer has successfully been updated' });
    }

    resolve({ message: 'Employer has successfully been updated', employer: updatedEmployer });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = (filter) => new Promise(async (resolve, reject) => {
  try {
    const employers = await Employer.find(filter).lean();
    resolve({ employers });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (employerId, filter) => new Promise(async (resolve, reject) => {
  try {
    const employer = await Employer.findOne({ _id: employerId, ...filter }).lean();

    if (!employer) {
      resolve({ message: 'Employer does not exist in database' });
    }

    resolve({ message: 'Employer successfully found', employer });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOneByEmail = (email) => new Promise(async (resolve, reject) => {
  try {
    const employer = await Employer.findOne({ email }).lean();
    resolve(employer);
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
    companyName,
    password,
  } = req.body;

  try {
    // Returns a single document from unique email
    const employer = await Employer.findOne({ email }).lean();

    // Checks if account already exits
    if (employer) {
      // Send response, can't register an account that already exists
      return res.status(200).json({
        message: 'Account already exists',
      });
    }

    // Hashes password for security
    const hash = await bcrypt.hash(password, 10);
    // Throw error if hashing failed function failed
    if (!hash) throw new Error('Password hashing failed unexpectedly');

    // Check if company exists
    const company = await Company.findOne({ name: companyName }).lean();
    if (!company) {
      // Since an employer 'belongs' to a company
      // If no company is found, employer cannot be registered,
      // Hence, return valid response
      return res.status(200).json({
        error: 'Company does not exist on the database, cannot register an employer without a valid company',
      });
    }

    // Creates new Employer Object
    const newEmployer = new Employer({
      firstname,
      lastname,
      email,
      phone,
      companyId: company._id,
      password: hash,
    });

    // Saves employer object to database asynchronously
    // Stores saved employer data to constant
    const savedEmployer = await newEmployer.save().lean();
    // Throws error if saving to database fails
    if (!savedEmployer) throw new Error('Saving new Employer to database failed unexpectedly');

    return res.status(201).json({
      message: 'Employer account created',
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
    // Find single employer user from unique email
    const employer = await Employer.findOne({ email }).lean();

    // Checks if employer doesn't exist
    if (!employer) {
      // Cannot signin if employer account does not exist
      return res.status(404).json({
        message: 'Employer account does not exist',
      });
    }

    // result is true or false, true if hashed passwords match
    const result = await bcrypt.compare(password, employer.password);
    if (result) {
      // Removes password from employer object,
      // When employer is returned it won't return the hashed password
      employer.password = undefined;

      // Sign unique data with jwt to create a user access token
      const token = jwt.sign(
        {
          ...employer,
          authLevel: _employer,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        },
      );

      // Previous tasks have processed properly
      // Return success message as well as access token and authenticated employer data
      return res.status(200).json({
        message: 'Auth successful',
        token,
        employer,
      });
    }
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
};

module.exports.deauth = (req, res) => {
  try {
    // Clear authentication headers and stored user data
    req.headers.authentication = null;
    req.user = null;

    // Sign out successful, send success response
    return res.status(200).json({
      message: 'De-authenticated (Sign Out) success',
    });
  } catch (err) {
    // Sign out unsuccessfull, send failure response
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
