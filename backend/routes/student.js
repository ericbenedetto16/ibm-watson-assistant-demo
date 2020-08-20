const router = require('express').Router();
const { createStudent } = require('../controllers/student');

router.route('/').post(createStudent);

module.exports = router;
