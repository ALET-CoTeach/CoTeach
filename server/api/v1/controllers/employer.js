const Employer = require('../models/Employer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.deleteOne = (employerId) =>
  new Promise(async (resolve, reject) => {
    try {
      const employer = await Employer.findByIdAndDelete(employerId);

      if (!employer) {
        resolve({ message: "Employer document never existed or has already been deleted" });
      }

      resolve({ message: "Employer successfuly deleted", employer });
    } catch (err) {
      reject(err);
    }
  });

module.exports.updateOne = (employerId, updateData) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        firstname,
        lastname,
        email,
        phone,
        companyName,
      } = updateData;

      // Check if school exists
      const company = await Company.findOne({ name: companyName });

      if (!company) {
        // Runs if school does not exist
        reject(new Error("School does not exist on database"));
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
        }
      );

      if (!updatedTeacher) {
        resolve({ message: "Employer has successfully been updated" });
      }

      resolve({ message: "Employer has successfully been updated", employer: updatedEmployer });
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const employers = await Employer.find({});
      resolve({ employers });
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOne = (employerId) =>
  new Promise(async (resolve, reject) => {
    try {
      const employer = await Employer.findOneById(employerId);

      if (!employer) {
        resolve({ message: "Employer does not exist in database" });
      }

      resolve({ message: "Employer successfully found", employer });
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOneByEmail = (email) => 
  new Promise(async (resolve, reject) => {
    try {
      const employer = await Employer.findOne({ email });
      resolve(employer);
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
  Employer.findOne({ email } , (err, employer) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    // Checks if account already exits
    if (employer !== null) {
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


      // Creates new Employer Object
      const newEmployer = new Employer({
        firstname,
        lastname,
        email,
        phone,
        companyId : company._id,
        password: hash,
      });

      // Saves employer object to database
      newEmployer
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: 'Employer account created',
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

  // Find single employer user from unique email
  Employer.findOne({ email }, (err, employer) => {

    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    bcrypt.compare(password, employer.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            email: employer.email,
            id: employer._id,
          },
          process.env.JWT_EMPLOYER_KEY,
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
    req.employerData = null;
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
