module.exports = (req, res) => {
  try {
    // Clear authentication headers and stored user data
    req.headers.authentication = null;
    req.user = null;

    // Sign out successful, send success response
    return res.status(200).json({
      message: 'De-authentication (Sign Out) success',
    });
  } catch (err) {
    // Sign out unsuccessfull, send failure response
    return res.status(401).json({
      message: 'De-authentication (Sign Out) failed',
    });
  }
};
