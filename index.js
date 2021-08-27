const mongoose = require('mongoose');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//environments

require('dotenv').config();

//routers
const topic = require('./router/topic');
const topicRelation = require('./router/topic_relation');
const chapter = require('./router/chapter');
const unit = require('./router/unit');
const exam = require('./router/exam');

//middlewares for routing requests
app.use([topic, topicRelation, chapter, unit, exam]);

app.listen(process.env.PORT, () => {
  console.log('Listening at 3000');
});

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => {
    console.log('quiz db connnected');
  })
  .on('error', (err) => {
    console.log(err);
  });
