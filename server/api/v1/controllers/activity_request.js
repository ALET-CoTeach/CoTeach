const _ = require('lodash');
const ActivityRequest = require('../models/ActivityRequest');
const Teacher = require('../models/Teacher');
const School = require('../models/School');
const Employer = require('../models/Employer');
const Company = require('../models/Company');

const { _teacher } = require('../utils/UserTypes');
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

  // If authenticated user is not a teacher, use the teacherId from request body
  const teacherId = req.user.authLevel !== _teacher ? req.body.teacherId : req.user._id;

  console.log(teacherId);
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
    console.log(savedActivityRequest);

    if (savedActivityRequest) {
      return res.status(201).json({
        message: 'ActivityRequest successfully created and stored on database',
        activityRequest: savedActivityRequest,
      });
    }
  } catch (err) {
    // Send JSON error response to the 'requestee'
    return res.status(500).json({ error: err });
  }
};

module.exports.updateNegotiationData = (activityRequestId, updateData) => new Promise(async (resolve, reject) => {
  const { employerId, companyId, startDate, endDate, status } = updateData;

  try {
    const activityRequest = await ActivityRequest.getOneById(activityRequestId);

    // If activityRequest currently in negotiations by an employer with the id,
    // employerId, update negotiation data
    // If activityRequest's negotiation data has yet to be set, set it
    if (activityRequest.employerId === employerId
    || activityRequest.employerId == null) {
      const { activityRequest: updatedActivityRequest } = await ActivityRequestController.updateOne(activityRequestId, {
        status,
        employerId,
        companyId,
        startDate,
        endDate,
      })
      
      resolve({ message: 'Updated negotiation data of activity', activityRequest: updatedActivityRequest })
    } else {
      // If a user is trying to change negotiation data where the user
      // should not be involved. Do nothing with the DB
      resolve({ 
        message: 'This activity is in the middle of negotiations. Cannot set negotiation data', 
        activityRequest 
      })
    }
  } catch (err) {
    reject(err);
  }
});

module.exports.deleteOne = (activityRequestId) => new Promise(async (resolve, reject) => {
  try {
    const activityRequest = await ActivityRequest.findByIdAndDelete(activityRequestId).lean();

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
    ).lean();

    if (!updatedActivityRequest) {
      resolve({ message: 'ActivityRequest was never created or has been deleted' });
    }

    resolve({ message: 'ActivityRequest has been successfully updated', activityRequest: updatedActivityRequest });
  } catch (err) {
    reject(err);
  }
});

// TODO: Rename function
const tempFunc = (data) => new Promise(async (resolve, reject) => {
  try {
    const [teacher, school, employer, company] = await Promise.all([
      Teacher.findById(data.teacherId).lean(),
      School.findById(data.schoolId).lean(),
      Employer.findById(data.employerId).lean(),
      Company.findById(data.companyId).lean(),
    ]);

    delete data.__v;
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

module.exports.getOne = (activityRequestId, filter) => new Promise(async (resolve, reject) => {
  try {
    const activityRequest = await ActivityRequest.findOne({
      _id: activityRequestId,
      ...filter,
    }).lean();

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
    const activityRequests = await ActivityRequest.find({ schoolId }).lean();
    resolve(activityRequests);
  } catch (err) {
    reject(err);
  }
});
