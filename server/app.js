const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();

const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/todo', apiRouter);

app.get('/', (req, res) => {
   res.send("Todo app")
});

async function start() {
 try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })

  app.listen(port, () => {
   console.log(`Server started on port ${port}`)
  })

 } catch(err) {console.error(err)}
}
start();

module.exports = app;
