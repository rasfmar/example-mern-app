const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const app = express();
const apiRouter = require('./routers/apiRouter');

app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'OK',
  });
});

app.use('/api/v1', apiRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use((error, req, res, next) => {
  const response = { message: error.message };
  if (process.env.NODE_ENV === 'development') {
    Object.assign(response, { stack: error.stack });
  }
  res.status(500).json(response);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
