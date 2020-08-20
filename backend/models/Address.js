const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    apt_number: {
      type: String,
    },
  },
  { _id: false }
);

module.exports = AddressSchema;
