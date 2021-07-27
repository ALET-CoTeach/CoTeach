const SLT = require('../models/SLT');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.deleteOne = (sltId) =>
  new Promise(async (resolve, reject) => {
    try {
      const slt = await SLT.deleteOne({ _id: sltId });
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

      const updatedSLT = await SLT.findOneAndUpdate(
        { _id: sltId },
        update,
        {
          new: true,
        }
      );
      console.log(updatedSLT);
      resolve(updatedSLT);
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

module.export.getOneByEmail = (email) => 
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
  SLT.findOne({ email })
    .exec()
    .then((slt) => {
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
  SLT.findOne({ email })
    .exec()
    .then((slt) => {
      if (!slt) {
        return res.status(401).json({
          message: 'Auth failed',
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
              sltId: slt._id,
            },
            process.env.JWT_TEACHER_KEY,
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
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.deauth = (res, req) => {
  try {
    req.headers.authentication = null;
    req.sltData = null;
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
