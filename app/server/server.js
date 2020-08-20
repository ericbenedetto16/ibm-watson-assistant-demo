const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
require('colors');

const env = process.env.NODE_ENV || 'development';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

if (env === 'development') {
  app.use(morgan('dev'));
}

app.get('/ping', (req, res) => res.status(200).send('ok'));
const watson = require('./routes/watson');
app.use('/api/watson', watson);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Watson App Listening on http://localhost:${PORT}`.yellow.bold);
});
