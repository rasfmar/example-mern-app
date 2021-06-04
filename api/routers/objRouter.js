const express = require('express');
const router = express.Router();
const monk = require('monk');
const schema = require('../schemas/objSchema');

const db = monk(process.env.MONGO_URI);
const objs = db.get('objs');

// create one obj
router.post('/', async (req, res, next) => {
  try {
    const validatedObj = await schema.validateAsync(req.body);
    const insertedObj = await objs.insert(validatedObj);
    res.json(insertedObj);
  } catch (error) {
    next(error);
  }
});

// update one obj
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneObj = await objs.findOne({ _id: id });
    if (!oneObj) throw 'obj not found';
    const validatedObj = await schema.validateAsync(req.body);
    await objs.update({ _id: id }, { $set: validatedObj });
    res.json(validatedObj);
  } catch (error) {
    next(error);
  }
});

// read all objs
router.get('/', async (req, res, next) => {
  try {
    const allObjs = await objs.find();
    res.json(allObjs);
  } catch (error) {
    next(error);
  }
});

// read one obj
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneObj = await objs.findOne({ _id: id });
    if (!oneObj) throw 'obj not found';
    res.json(oneObj);
  } catch (error) {
    next(error);
  }
});

// delete one obj
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneObj = await objs.findOne({ _id: id });
    if (!oneObj) throw 'obj not found';
    await objs.remove({ _id: id });
    res.json({ message: 'OK' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
