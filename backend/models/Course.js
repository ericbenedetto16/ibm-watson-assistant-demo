// Name
// Semester
// Professor
// Grade
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

module.exports = CourseSchema;
