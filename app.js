const mongoose = require('mongoose');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//environments

require('dotenv').config();

//routers
const topic = require('./router/addTopic');
const topicRelation = require('./router/addTopicRelation');

//middlewares for routing requests
app.use([topic, topicRelation]);

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
    logError(err);
  });
