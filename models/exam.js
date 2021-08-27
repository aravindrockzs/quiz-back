const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExamSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

module.exports = Exam = mongoose.model('exam', ExamSchema);
