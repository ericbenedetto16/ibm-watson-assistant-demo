const Student = require('../models/Student');

exports.getStudent = async (req, res, next) => {
  try {
    console.log(req.body);
    // TODO: Get Structure of Request to Get ID
    const student = await Student.findOne({ emplid: req.body.text });

    if (!student)
      return res.status(404).json({
        success: true,
        msg: 'Student Not Found!',
      });

    req.student = student;
    next();
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
