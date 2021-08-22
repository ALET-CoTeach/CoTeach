const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SLT = require('../models/SLT');
const School = require('../models/School');

module.exports.deleteOne = (sltId) => new Promise(async (resolve, reject) => {
  try {
    const slt = await SLT.findByIdAndDelete(sltId);

    if (!slt) {
      resolve({ message: 'SLT document never existed or has already been deleted' });
    }

    resolve({ message: 'SLT successfuly deleted', slt });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (sltId, updateData) => new Promise(async (resolve, reject) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      schoolName,
      coordinator,
    } = updateData;

    // Check if school exists
    const school = await School.findOne({ name: schoolName });

    if (!school) {
      // Runs if school does not exist
      reject(new Error('School does not exist on database'));
    }

    const update = {
      firstname,
      lastname,
      email,
      phone,
      schoolId: school._id,
      coordinator,
    };

    const updatedSLT = await SLT.findByIdAndUpdate(
      sltId,
      update,
      {
        new: true,
      },
    );

    if (!updatedSLT) {
      resolve({ message: 'SLT document was never creator or has been deleted ' });
    }

    resolve({ message: 'SLT has successfully been updated', slt: updatedSLT });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = () => new Promise(async (resolve, reject) => {
  try {
    const slts = await SLT.find({});
    resolve({ slts });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (sltId) => new Promise(async (resolve, reject) => {
  try {
    const slt = await SLT.findOneById(sltId);

    if (!slt) {
      resolve({ message: 'SLT does not exist in database' });
    }

    resolve({ message: 'SLT successfully found', slt });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOneByEmail = (email) => new Promise(async (resolve, reject) => {
  try {
    const slt = await SLT.findOne({ email });
    resolve(slt);
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
    schoolName,
    password,
    coordinator,
  } = req.body;

  try {
  // Returns a single document from unique email
    const slt = await SLT.findOne({ email });

    // Checks if account already exits
    if (slt) {
      // Send response, can't register an account that already exists
      return res.status(200).json({
        message: 'Account already exists',
      });
    }

    // Hashes password for security
    const hash = await bcrypt.hash(password, 10);
    // Throw error if hashing failed function failed
    if (!hash) throw new Error('Password hashing failed unexpectedly');

    // Check if school exists
    const school = await School.findOne({ name: schoolName });
    if (!school) {
      // Since a member of slt 'belongs' to a school
      // If no school is found, slt cannot be registered,
      // Hence, return valid response
      return res.status(200).json({
        error: 'School does not exist on the database, cannot register an slt without a valid school',
      });
    }

    // Creates new SLT Object
    const newSLT = new SLT({
      firstname,
      lastname,
      email,
      phone,
      schoolId: school._id,
      password: hash,
      coordinator,
    });

    // Saves slt object to database asynchronously
    // Stores saved slt data to constant
    const savedSLT = await newSLT.save();
    // Throws error if saving to database fails
    if (!savedSLT) throw new Error('Saving new SLT to database failed unexpectedly');

    return res.status(201).json({
      message: 'SLT account created',
    });
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
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

    return bcrypt.compare(password, slt.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }

      if (result) {
        // Removes password from teacher object,
        // When slt is returned it won't return the hashed password
        delete slt.password;

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
          slt,
        });
      }

      return res.status(401).json({
        message: 'Auth failed',
      });
    });
  });
};

module.exports.deauth = (req, res) => {
  try {
    req.headers.authentication = null;
    req.sltData = null;
    return res.status(200).json({
      message: 'De-authentication (Sign Out) success',
    });
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
