const express = require('express');

const router = express.Router();

const Exam = require('../models/exam');

router.post('/exams/add', (req, res) => {
  const exam = new Exam({
    name: req.body.name,
  });

  exam.save(function (err) {
    if (err) console.log(err);
  });
  res.sendStatus(200);
});

router.get('/exams/search/:exam', async (req, res) => {
  try {
    const exam = await Exam.findOne({ name: req.params.exam }).exec();
    res.json(exam);
  } catch (e) {
    res.sendStatus(500).send({ message: e.message });
  }
});

module.exports = router;
