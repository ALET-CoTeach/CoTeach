const jwt = require('jsonwebtoken');

module.exports = (roles) => (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  let isVerified = false;

  roles.forEach(async (role) => {
    try {
      const decoded = jwt.verify(token, process.env[`JWT_${role.toUpperCase()}_KEY`]);

      if (decoded) {
        isVerified = true;
        req[`${role}Data`] = decoded._doc;
        console.log(req[`${role}Data`]);
      }
    } catch (err) {}
  });

  if (!isVerified) {
    return res.status(403).json({
      message: 'Forbidden',
    });
  }

  next();
};
