const Majors = require('../models/Major');
exports.getAvailableCourses = async (req, res, next) => {
  try {
    const courses = await Majors.findOne({ name: req.student.major });

    if (!courses)
      return res
        .status(404)
        .json({ success: false, msg: 'Major Not Recognized!' });

    req.courses = courses.required_classes;
    next();
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
