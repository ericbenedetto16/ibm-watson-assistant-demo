const Assistant = require('../config/ibm-cloud');
require('colors');

exports.sendSession = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, session_id: req.session_id });
  } catch (err) {
    console.log(`Error: ${err}`.red.bold);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};

exports.sendMessage = async (req, res, next) => {
  try {
    const msg = await Assistant.message(req.payload);

    res.status(200).json({ success: true, msg });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
