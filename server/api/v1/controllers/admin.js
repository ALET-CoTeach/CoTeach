const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

module.exports.register = (req, res) => {
  // Destruct request body
  const { name, email, password } = req.body;

  // Returns a single document from unique email
  Admin.findOne({ email }, (err, admin) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    
    console.log(admin);
    // Checks if account already exits
    if (admin !== null) {
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
      // Creates new Admin object
      const newAdmin = new Admin({
        name,
        email,
        password: hash,
      });

      // Saves admin object to database
      newAdmin
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: 'Admin account created',
          });
        })
        .catch((saveErr) => {
          console.log(saveErr);
          res.status(500).json({
            error: saveErr,
          });
        });
    });
  })
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

    if (admin !== null) {
      return res.status(401).json({
        message: 'Auth failed',
      });
    }

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
            adminId: admin._id,
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
  })
};

module.exports.deauth = (res, req) => {
  try {
    req.headers.authentication = null;
    req.adminData = null;
  } catch (err) {
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
