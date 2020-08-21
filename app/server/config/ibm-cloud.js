const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
require('colors');

const { WATSON_API_ROUTE, WATSON_API_KEY } = process.env;
if (!WATSON_API_ROUTE || !WATSON_API_KEY) {
  console.log(
    `Error: Missing API Route or Key. Check Your Environment Variable Configuration`
      .red.bold
  );
  process.exit(1);
}

const authenticator = new IamAuthenticator({
  apikey: WATSON_API_KEY,
});

const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: authenticator,
  url: WATSON_API_ROUTE,
});

module.exports = assistant;
