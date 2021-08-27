const express = require('express');

const router = express.Router();

const Unit = require('../models/unit');

router.post('/units/add', (req, res) => {
  const unit = new Unit({
    name: req.body.name,
    exam: req.body.exam,
  });

  unit.save(function (err) {
    if (err) console.log(err);
  });

  res.sendStatus(200);
});

router.get('/units/search/:unit', async (req, res) => {
  try {
    const unit = await Unit.findOne({ name: req.params.unit }).exec();
    res.json(unit);
  } catch (e) {
    res.sendStatus(500).send({ message: e.message });
  }
});

module.exports = router;
