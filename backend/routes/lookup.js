const router = require('express').Router();
const { getStudent } = require('../middleware/students');
const { getAvailableCourses } = require('../middleware/courses');
const { lookupRecords } = require('../controllers/lookup');

router.route('/').post(getStudent, getAvailableCourses, lookupRecords);

module.exports = router;
