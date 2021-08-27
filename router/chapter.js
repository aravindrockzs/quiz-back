const express = require('express');

const router = express.Router();

const Chapter = require('../models/chapter');

router.post('/chapters/add', (req, res) => {
  const chapter = new Chapter({
    name: req.body.name,
    unit: req.body.unit,
    exam: req.body.exam,
  });

  chapter.save(function (err) {
    if (err) console.log(err);
  });
  res.sendStatus(200);
});

router.get('/chapters/search/:chapter', async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ name: req.params.chapter }).exec();
    res.json(chapter);
  } catch (e) {
    res.status(500).send('search not found');
  }
});

module.exports = router;
