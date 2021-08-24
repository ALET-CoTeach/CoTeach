const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    line1: {
      type: String,
      required: true,
    },
    towncity: {
      type: String,
      required: true,
    },
    county: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
  { _id: false },
); // disables _id field, because Address is a child model 😃

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
module.exports.addressSchema = addressSchema;
