const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const middleware = require('./middleware');
const deauth = require('./api/v1/utils/deauth');

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
}).catch((err) => {
  console.log(err);
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

mongoose.set('toJSON', { virtuals: true });

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

app.get('/api/v1/signout', deauth);

// Imports for version 1 of the api
const adminRoutes = require('./api/v1/routes/admin');
const employerRoutes = require('./api/v1/routes/employer');
const sltRoutes = require('./api/v1/routes/slt');
const teacherRoutes = require('./api/v1/routes/teacher');
const socialMediaPostRoutes = require('./api/v1/routes/social_media_post');
const activityRequestRoutes = require('./api/v1/routes/activity_request');
const schoolRoutes = require('./api/v1/routes/school');
const companyRoutes = require('./api/v1/routes/company');

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/employer', employerRoutes);
app.use('/api/v1/slt', sltRoutes);
app.use('/api/v1/teacher', teacherRoutes);
app.use('/api/v1/socialmediapost', socialMediaPostRoutes);
app.use('/api/v1/activityrequest', activityRequestRoutes);
app.use('/api/v1/school', schoolRoutes);
app.use('/api/v1/company', companyRoutes);

// Swagger API documentation generator setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'CoTeach API',
      description: 'Documentation for CoTeach API',
      contact: {
        name: 'Samson Nagamani',
      },
      servers: ['https://localhost:5001'],
    },
  },
  apis: ['app.js', './api/v1/routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
