const jwt = require('jsonwebtoken');

module.exports = (roles) => (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  let isVerified = false;

  roles.forEach(async (role) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.authLevel === role) {
        isVerified = true;
        req.user = decoded;
        console.log(req.user);
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
