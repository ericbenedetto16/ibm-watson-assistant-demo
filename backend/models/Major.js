const mongoose = require('mongoose');
const Course = require('./Course');

const MajorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  required_classes: {
    type: [Course],
    required: true,
  },
  electives: {
    type: [Course],
    required: true,
  },
});

module.exports = mongoose.model('major', MajorSchema);
