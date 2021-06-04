const express = require('express');
const router = express.Router();
const objRouter = require('./objRouter');

router.use('/objs', objRouter);

module.exports = router;
