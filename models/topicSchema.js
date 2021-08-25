const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  exam: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  relations: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Topics',
  },
});

module.exports = Topic = mongoose.model('Topic', topicSchema);
