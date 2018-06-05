var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Chapter = require('./api/models/chapterModel'), //created model loading here
  Member = require('./api/models/memberModel'),
  Address = require('./api/models/addressModel'),
  bodyParser = require('body-parser'),
  env = require('env-variable')();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

env.MONGO_URL ? mongoose.connect(env.MONGO_URL) : mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/chapterRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);