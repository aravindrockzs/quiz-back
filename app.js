const mongoose = require('mongoose');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//environments

require('dotenv').config();

//model
const Topic = require('./models/topicSchema');

//routers

const AddTopic = require('./router/addTopic');
app.use(AddTopic);

app.listen(process.env.PORT, () => {
  console.log('Listening at 3000');
});

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/topics', async (req, res) => {
  //  [
  //     {
  //       '$search': {
  //         'index': 'movies',
  //         'autocomplete': {
  //           'query': 'test',
  //           'path': 'title'
  //         }
  //       }
  //     }, {
  //       '$project': {
  //         '_id': 0,
  //         'title': 1
  //       }
  //     }
  //  ]
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
