const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    line3: {
      type: String,
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
    lat: {
      type: Number,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
); // disables _id field, because Address is a child model 😃

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
module.exports.addressSchema = addressSchema;
