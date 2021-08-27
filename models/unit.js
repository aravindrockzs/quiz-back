const mongoose = require('mongoose');
const { Schema } = mongoose;

const UnitSchema = new Schema({
  name: {
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

module.exports = Unit = mongoose.model('unit', UnitSchema);
