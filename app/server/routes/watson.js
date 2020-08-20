const router = require('express').Router();
const { sendSession, sendMessage } = require('../controllers/watson');
const { makeSession } = require('../middleware/session');
const { makePayload } = require('../middleware/message');

router.route('/session').get(makeSession, sendSession);

router.route('/message').post(makePayload, sendMessage);

module.exports = router;
