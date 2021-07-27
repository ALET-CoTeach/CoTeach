const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  res.status(statusCode);
  res.json({
    error: {
      message: error.message,
      status: statusCode,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    },
  });
};

module.exports = {
  notFound,
  errorHandler,
};

