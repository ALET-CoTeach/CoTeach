const LessonRequest = require('../models/LessonRequest');
const Address = require('../models/Address');

// TODO: Write suitable functions for all methods for the LessonRequest model

module.exports.createOne = (req, res) => {
  // Destruct lessonRequestData
  const {
    schoolId,
    year,
    subject,
    lessonTitle,
    lessonDetails,
    term,
    preferredDay,
    preferredTime,
  } = req.body;

  let teacherId;

  // If authenticated user is not a teacher, use the teacherId from request body
  if (!req.teacherData) {
    teacherId = req.body.teacherId;
  } else {
    // If teacher is signed in
    teacherId = req.teacherData.id;
  }

  // Creates new LessonRequest Object
  const newLessonRequest = new LessonRequest({
    schoolId,
    year,
    subject,
    lessonTitle,
    lessonDetails,
    term,
    preferredDay,
    preferredTime,
    teacherId,
  });

  // Saves lessonRequest object to database
  newLessonRequest.save((err, lessonRequest) => {
    if (err) {
      res.status(500).json({ error: err });
    }

    res.status(201).json({
      message: 'LessonRequest successfully created and stored on database',
      lessonRequest,
    });
  });
};

module.exports.deleteOne = (lessonRequestId) => new Promise(async (resolve, reject) => {
  try {
    const lessonRequest = await LessonRequest.findByIdAndDelete(lessonRequestId);

    if (!lessonRequest) {
      resolve({ message: 'LessonRequest document never existed or has already been deleted' });
    }

    resolve({ message: 'LessonRequest successfuly deleted', lessonRequest });
  } catch (err) {
    reject(err);
  }
});

module.exports.updateOne = (lessonRequestId, updateData) => new Promise(async (resolve, reject) => {
  try {
    const {
      name,
      email,
      line1,
      towncity,
      county,
      postcode,
    } = updateData;

    const address = {
      line1,
      towncity,
      county,
      postcode,
    };

    const update = {
      name,
      email,
      address,
    };

    const updatedLessonRequest = await LessonRequest.findByIdAndUpdate(
      lessonRequestId,
      update,
      {
        new: true,
      },
    );

    if (!updatedLessonRequest) {
      resolve({ message: 'LessonRequest was never created or has been deleted' });
    }

    resolve({ message: 'LessonRequest has been successfully updated', lessonRequest: updatedLessonRequest });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAll = () => new Promise(async (resolve, reject) => {
  try {
    const lessonRequests = await LessonRequest.find({});
    resolve({ lessonRequests });
  } catch (err) {
    reject(err);
  }
});

module.exports.getOne = (lessonRequestId) => new Promise(async (resolve, reject) => {
  try {
    const lessonRequest = await LessonRequest.findOneById(lessonRequestId);

    if (!lessonRequest) {
      resolve({ message: 'LessonRequest does not exist in database' });
    }

    resolve({ message: 'LessonRequest successfully found', lessonRequest });
  } catch (err) {
    reject(err);
  }
});

module.exports.getAllBySchool = (schoolId) => new Promise(async (resolve, reject) => {
  try {
    const lessonRequests = await LessonRequests.find({ schoolId });
    resolve(lessonRequests);
  } catch (err) {
    reject(err);
  }
});
