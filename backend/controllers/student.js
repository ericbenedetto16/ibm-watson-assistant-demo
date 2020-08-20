const Student = require('../models/Student');

exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create({ ...req.body });

    res.status(200).json({ success: true, student });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
