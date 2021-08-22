const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

module.exports.register = async (req, res) => {
  // Destruct request body
  const { name, email, password } = req.body;

  try {
    // Returns a single document from unique email
    const admin = await Admin.findOne({ email });

    // Checks if account already exits
    if (admin) {
      return res.status(409).json({
        message: 'Account already exists',
      });
    }

    // Hashes password for security
    const hash = await bcrypt.hash(password, 10);

    if (!hash) throw new Error('Password hashing failed unexpectedly');
    //
    // Creates new Admin object
    const newAdmin = new Admin({
      name,
      email,
      password: hash,
    });

    // Saves admin object to database
    const savedAdmin = await newAdmin.save();

    if (!savedAdmin) throw new Error('Saving new Admin to database failed unexpectedly');

    return res.status(201).json({
      message: 'Admin account created',
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports.access = (req, res) => {
  // Destruct req.body
  const { email, password } = req.body;

  // Find single admin user from unique email
  Admin.findOne({ email }, (err, admin) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    console.log(email, password);

    bcrypt.compare(password, admin.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            email: admin.email,
            id: admin._id,
          },
          process.env.JWT_ADMIN_KEY,
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
  });
};

module.exports.deauth = (req, res) => {
  try {
    req.headers.authentication = null;
    req.adminData = null;
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
