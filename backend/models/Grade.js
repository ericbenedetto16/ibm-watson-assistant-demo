const mongoose = require('mongoose');
const Course = require('./Course');

const GradeSchema = new mongoose.Schema(
  {
    course: {
      type: Course,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

module.exports = GradeSchema;
