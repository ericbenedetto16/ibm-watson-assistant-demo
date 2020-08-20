const Majors = require('../models/Major');

exports.createMajor = async (req, res, next) => {
  try {
    const major = await Majors.create({ ...req.body });

    res.status(200).json({ success: true, major });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
