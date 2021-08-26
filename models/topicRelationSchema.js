const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicRelationSchema = new Schema({
  primaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
  },
  relations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
    },
  ],
});

module.exports = TopicRelation = mongoose.model(
  'topicRelation',
  topicRelationSchema
);
