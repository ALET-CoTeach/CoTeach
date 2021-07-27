const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./middleware');

// Imports for version 1 of the api
const adminRoutes = require('./api/v1/routes/admin');
const tenantRoutes = require('./api/v1/routes/tenant');

// Environment variables
require('dotenv').config();

// Init. Express app
const app = express();

// Check for local or remote db connection
// const DATABASE_URL =
//   process.env.LOCAL_DATABASE_URL || process.env.REMOTE_DATABASE_URL;

mongoose.connect(process.env.REMOTE_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(morgan('common'));
app.use(helmet());

const whitelist = [
  process.env.CORS_ORIGIN_CLIENT,
  process.env.CORS_ORIGIN_SERVER,
];

console.log(whitelist);
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1tenants', tenantRoutes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

