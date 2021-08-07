const jwt = require('jsonwebtoken');

module.exports = (roles) => {
  return (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    let isVerified = false;

    roles.forEach((role) => {
      jwt.verify(token, process.env[`JWT_${role}_KEY}`], (err, decoded) => {
        if (!err) {
          isVerified = true;
        }

        req[`${role}Data`] = decoded;
      });
    });

    if (isVerified) {
      next();
    } else {
      return res.status(403).json({
        message: 'Forbidden'
      });
    }
  }
};

