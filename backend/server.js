const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
require('dotenv').config();
require('colors');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const lookup = require('./routes/lookup');
const student = require('./routes/student');
const majors = require('./routes/major');
app.get('/ping', (req, res) => res.status(200).send('ok'));
app.use('/api/v1/lookup', lookup);
app.use('/api/v1/student', student);
app.use('/api/v1/majors', majors);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend Listening at http://localhost:${PORT}`.yellow.bold);
});
