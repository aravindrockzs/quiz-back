const mongoose = require('mongoose');
const { Schema } = mongoose;

const chapterSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  unit: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  exam: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

module.exports = Chapter = mongoose.model('chapter', chapterSchema);
