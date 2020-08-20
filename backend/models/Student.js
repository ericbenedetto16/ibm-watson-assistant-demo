const mongoose = require('mongoose');
const Address = require('./Address');
const Grade = require('./Grade');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emplid: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: Address,
    required: true,
  },
  credits_completed: {
    type: Number,
    required: true,
  },
  credits_completed: {
    type: Number,
    required: true,
  },
  ant_grad_year: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
  },
  gpa: {
    type: Number,
    required: true,
  },
  completed_courses: {
    type: [Grade],
    required: true,
    default: [],
  },
});

module.exports = mongoose.model('students', StudentSchema);
