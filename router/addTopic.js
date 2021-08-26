const express = require('express');

const router = express.Router();

const Topic = require('../models/topicSchema');

router.get('/topics/search/:name', async (req, res) => {
  try {
    let result = await Topic.aggregate([
      {
        $search: {
          index: 'Topics',
          autocomplete: {
            query: req.params.name,
            path: 'name',
          },
        },
      },
    ]);
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post('/topics/add', (req, res) => {
  const topic = new Topic({
    name: req.body.name,
    unit: req.body.unit,
    chapter: req.body.chapter,
    exam: req.body.exam,
  });

  topic.save(function (err) {
    if (err) console.log(err);
  });

  res.sendStatus(200);
});

module.exports = router;
