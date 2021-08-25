const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { _admin } require('../utils/UserTypes');

module.exports.register = async (req, res) => {
  // Destruct request body
  const { name, email, password } = req.body;

  try {
    // Returns a single document from unique email
    const admin = await Admin.findOne({ email });

    // Checks if account already exists
    if (admin) {
      // Send response, can't register an account that already exists
      return res.status(200).json({
        message: 'Account already exists',
      });
    }

    // Hashes password for security
    const hash = await bcrypt.hash(password, 10);
    // Throw error if hashing failed function failed
    if (!hash) throw new Error('Password hashing failed unexpectedly');

    // Creates new Admin object
    const newAdmin = new Admin({
      name,
      email,
      password: hash,
    });

    // Saves admin object to database asynchronously
    // Stores saved admin data to constant
    const savedAdmin = await newAdmin.save();
    // Throws error if saving to database fails
    if (!savedAdmin) throw new Error('Saving new Admin to database failed unexpectedly');

    // Succesfully stored to database
    // Response contains the saved admin's data
    return res.status(201).json({
      message: 'Admin account created',
      admin: savedAdmin,
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
    // Find single admin user from unique email
    const admin = await Admin.findOne({ email });

    // Checks if admin doesn't exist
    if (!admin) {
      // Cannot signin if admin account does not exist
      return res.status(200).json({
        message: 'Admin account does not exist on database',
      });
    }

    // result is true or false, true if hashed passwords match
    const result = await bcrypt.compare(password, admin.password);
    if (result) {
      // Removes password from admin object,
      // When admin is returned it won't return the hashed password
      admin.password = undefined;

      // Sign unique data with jwt to create a user access token
      const token = jwt.sign(
        {
          ...admin,
          authLevel: _admin,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        },
      );

      // Previous tasks have processed properly
      // Return success message as well as access token and authenticated admin data
      return res.status(200).json({
        message: 'Auth successful',
        token,
        admin,
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
