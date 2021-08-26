const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicRelationSchema = new Schema({
  primaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'topic',
  },
  relations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'topic',
    },
  ],
});

module.exports = TopicRelation = mongoose.model(
  'topicrelation',
  topicRelationSchema
);
