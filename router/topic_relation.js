const express = require('express');

const router = express.Router();
const TopicRelation = require('../models/topic_relation');

router.post('/topics/relations/add', (req, res) => {
  const topicRelation = new TopicRelation({
    primaryId: req.body.primaryId,
    relations: req.body.relations,
  });

  topicRelation.save(function (err) {
    if (err) console.log(err);
  });

  res.sendStatus(200);
});

router.get('/topics/relations/aggregate/:primaryId', async (req, res) => {
  try {
    const result = await TopicRelation.findOne({
      primaryId: req.params.primaryId,
    })
      .populate('primaryId')
      .populate('relations')
      .exec();

    res.json(result);
  } catch (err) {
    res.sendStatus(500).send({ message: err.message });
  }
});

module.exports = router;
