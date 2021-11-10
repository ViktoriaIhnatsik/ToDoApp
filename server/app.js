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

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/todo', apiRouter);


async function start() {
 try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
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
