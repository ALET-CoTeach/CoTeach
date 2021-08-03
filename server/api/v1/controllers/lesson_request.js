const LessonRequest = require("../models/LessonRequest");
const Address = require("../models/Address");

// TODO: Write suitable functions for all methods for the LessonRequest model


module.exports.createOne = (lessonRequestData) =>
  new Promise(async (resolve, reject) => {
    // Destruct lessonRequestData
    const {
      image,
      caption,
      teacherId,
      schoolId,
    } = lessonRequestData;

    try {
      // Returns a single document from unique email
      const lessonRequest = await LessonRequest.findOne({ email });
      if (!lessonRequest) {
        // Creates new Address Object for LessonRequest
        const address = new Address({
          line1,
          towncity,
          county,
          postcode,
        });

        // Creates new LessonRequest Object
        const newLessonRequest = new LessonRequest({
          name,
          email,
          address,
        });

        // Saves lessonRequest object to database
        const savedLessonRequest = await newLessonRequest.save();
        resolve(savedLessonRequest);
      } else {
        // Runs if account already exits
        reject(new Error("LessonRequest already exists"));
      }
    } catch (err) {
      reject(err);
    }
  });

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


