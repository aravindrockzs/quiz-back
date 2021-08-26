const express = require('express');

const router = express.Router();
const TopicRelation = require('../models/topicRelationSchema');

const Topic = require('../models/topicSchema');

router.post('/topics/relations/add', (req, res) => {
  const topicRelation = new TopicRelation({
    primaryId: req.body.primaryId,
    dependencies: req.body.dependencies,
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
      .populate({ path: 'relations' })
      .exec();

    res.send(result);
  } catch (err) {
    res.sendStatus(500).send({ message: err.message });
  }
});

module.exports = router;
