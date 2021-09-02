const _ = require('lodash');
const ActivityRequest = require('../models/ActivityRequest');
const Teacher = require('../models/Teacher');
const School = require('../models/School');
const Employer = require('../models/Employer');
const Company = require('../models/Company');

// TODO: Write suitable functions for all methods for the ActivityRequest model

module.exports.createOne = async (req, res) => {
  // Destruct activityRequestData
  const {
    schoolId,
    year,
    subject,
    title,
    details,
    term,
    preferredDay,
    preferredTime,
    type,
  } = req.body;

  let teacherId;

  // If authenticated user is not a teacher, use the teacherId from request body
  if (!req.user) {
    teacherId = req.body.teacherId;
  } else {
    // If teacher is signed in
    teacherId = req.user.id;
  }

  // Creates new ActivityRequest Object
  const newActivityRequest = new ActivityRequest({
    schoolId,
    year,
    subject,
    title,
    details,
    term,
    preferredDay,
    preferredTime,
    teacherId,
    type,
    status: 'pending',
  });

  try {
    // Saves activityRequest object to database
    const savedActivityRequest = await newActivityRequest.save();

    if (savedActivityRequest) {
      res.status(201).json({
        message: 'ActivityRequest successfully created and stored on database',
        activityRequest: savedActivityRequest,
      });
    }
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
};

module.exports.deleteOne = (activityRequestId) => new Promise(async (resolve, reject) => {
  try {
    const activityRequest = await ActivityRequest.findByIdAndDelete(activityRequestId);

    if (!activityRequest) {
      resolve({ message: 'ActivityRequest document never existed or has already been deleted' });
    }

    resolve({ message: 'ActivityRequest successfuly deleted', activityRequest });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (activityRequestId, updateData) => new Promise(async (resolve, reject) => {
  try {
    const updatedActivityRequest = await ActivityRequest.findByIdAndUpdate(
      activityRequestId,
      updateData,
      {
        new: true,
      },
    );

    if (!updatedActivityRequest) {
      resolve({ message: 'ActivityRequest was never created or has been deleted' });
    }

    resolve({ message: 'ActivityRequest has been successfully updated', activityRequest: updatedActivityRequest });
  } catch (err) {
    reject(err);
  }
});

const tempFunc = (data) => new Promise(async (resolve, reject) => {
  try {
    const [teacher, school, employer, company] = await Promise.all([
      Teacher.findById(data.teacherId).lean(),
      School.findById(data.schoolId),
      Employer.findById(data.employerId).lean(),
      Company.findById(data.companyId),
    ]);

    delete data.__v;
    delete data.createdAt;
    delete data.updatedAt;
    delete data.teacherId;
    delete data.schoolId;
    delete data.employerId;
    delete data.companyId;

    const teacherName = _.upperFirst(`${teacher.firstname} ${teacher.lastname}`);

    if (employer) {
      const employerName = _.upperFirst(`${employer.firstname} ${employer.lastname}`);

      resolve({
        ...data, teacherName, school: school.name, employerName, company: company.name,
      });
    }

    resolve({
      ...data, teacherName, school: school.name,
    });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = (filter) => new Promise(async (resolve, reject) => {
  try {
    let t;
    const lr = await ActivityRequest.find(filter).lean();
    for (const [i, l] of lr.entries()) {
      t = await tempFunc(l);
      lr[i] = t;
    }
    resolve({ activityRequests: lr });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (activityRequestId) => new Promise(async (resolve, reject) => {
  try {
    const activityRequest = await ActivityRequest.findById(activityRequestId);

    if (!activityRequest) {
      resolve({ message: 'ActivityRequest does not exist in database' });
    }

    resolve({ message: 'ActivityRequest successfully found', activityRequest });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAllBySchool = (schoolId) => new Promise(async (resolve, reject) => {
  try {
    const activityRequests = await ActivityRequest.find({ schoolId });
    resolve(activityRequests);
  } catch (err) {
    reject(err);
  }
});
