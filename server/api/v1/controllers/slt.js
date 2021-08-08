const SLT = require('../models/SLT');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.deleteOne = (sltId) =>
  new Promise(async (resolve, reject) => {
    try {
      const slt = await SLT.findByIdAndDelete(sltId);

      if (!slt) {
        resolve({ message: "SLT document never existed or has already been deleted" });
      }

      resolve({ message: "SLT successfuly deleted", slt });
    } catch (err) {
      reject(err);
    }
  });

module.exports.updateOne = (sltId, updateData) =>
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

      const updatedSLT = await SLT.findByIdAndUpdate(
        sltId,
        update,
        {
          new: true,
        }
      );

      if (!updatedSLT) {
        resolve({ message: "SLT document was never creator or has been deleted "});
      }

      resolve({ message: "SLT has successfully been updated", slt: updatedSLT });
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const slts = await SLT.find({});
      resolve(slts);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOne = (sltId) =>
  new Promise(async (resolve, reject) => {
    try {
      const slt = await SLT.findOne({ _id: sltId });
      resolve(slt);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOneByEmail = (email) => 
  new Promise(async (resolve, reject) => {
    try {
      const slt = await SLT.findOne({ email });
      resolve(slt);
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
  SLT.findOne({ email }, (err, slt) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    // Checks if account already exits
    if (slt !== null) {
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

      // Creates new SLT Object
      const newSLT = new SLT({
        firstname,
        lastname,
        email,
        phone,
        schoolId : school._id,
        password: hash,
      });

      // Saves slt object to database
      newSLT
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: 'SLT account created',
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

  // Find single slt user from unique email
  SLT.findOne({ email }, (err, slt) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    bcrypt.compare(password, slt.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            email: slt.email,
            id: slt._id,
          },
          process.env.JWT_SLT_KEY,
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
    req.sltData = null;
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
