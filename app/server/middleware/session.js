const Assistant = require('../config/ibm-cloud');

exports.makeSession = async (req, res, next) => {
  try {
    const session = await Assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });

    req.session_id = session.result.session_id;

    next();
  } catch (err) {
    console.log(`Could Not Get Session:\n${err}`.red.bold);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
