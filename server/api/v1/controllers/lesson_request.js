const LessonRequest = require("../models/LessonRequest");
const Address = require("../models/Address");

// TODO: Write suitable functions for all methods for the LessonRequest model


module.exports.createOne = (req, res) => {
  // Destruct lessonRequestData
  let {
    schoolId,
    year,
    subject,
    lessonTitle,
    lessonDetails,
    term,
    preferredDay,
    preferredTime,
  } = req.body; 

  // If the front-end devs first send a GET request to get a list of teachers
  // They can create a dropbdown with all the teachers emails and names and set the value to the corresponding teacher's id
  
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
  const savedLessonRequest = await newLessonRequest.save();
};

module.exports.deleteOne = (lessonRequestId) =>
  new Promise(async (resolve, reject) => {
    try {
      const lessonRequest = await LessonRequest.deleteOne({ _id: lessonRequestId });
      resolve({ message: "LessonRequest successfuly deleted", lessonRequest });
    } catch (err) {
      reject(err);
    }
  });

module.exports.updateOne = (lessonRequestId, updateData) =>
  new Promise(async (resolve, reject) => {
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

      const updatedLessonRequest = await LessonRequest.findOneAndUpdate(
        { _id: lessonRequestId },
        update,
        {
          new: true,
        }
      );
      console.log(updatedLessonRequest);
      resolve(updatedLessonRequest);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const lessonRequests = await LessonRequest.find({});
      resolve(lessonRequests);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getOne = (lessonRequestId) =>
  new Promise(async (resolve, reject) => {
    try {
      const lessonRequest = await LessonRequest.findOne({ _id: lessonRequestId });
      resolve(lessonRequest);
    } catch (err) {
      reject(err);
    }
  });

module.exports.getAllBySchool = (schoolId) =>
  new Promise(async (resolve, reject) => {
    try {
      const lessonRequests = await LessonRequests.find({ schoolId });
      resolve(lessonRequests);
    } catch (err) {
      reject(err);
    }
  });



