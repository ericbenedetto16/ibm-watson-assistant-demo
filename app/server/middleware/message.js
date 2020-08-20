exports.makePayload = async (req, res, next) => {
  try {
    req.payload = {
      assistantId: process.env.WATSON_ASSISTANT_ID,
      sessionId: req.headers.sessionid,
      input: {
        message_type: 'text',
        text: req.body.user_message,
      },
    };

    next();
  } catch (err) {
    console.log(`Error ${err}`.red.bold);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
