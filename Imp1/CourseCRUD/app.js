var express = require('express');
var app = express();
var app1 = express();
var path = require('path');
var path1 = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bodyParser1 = require('body-parser');
var mongoose = require('mongoose');
var hbs = require('express-handlebars');
//routes
var routes = require('./routes/index');
var routes1 = require('./routes/imagefile');

// connect to mongo,
//i have created mongo collection in mlab.com.. the below is my database access url..
//So make sure you give your connection details..
mongoose.connect('mongodb://localhost:27017/document');
 
app1.use('/file', routes1);
// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app1.get('/images', function(req, res) {
//calling the function from index.js class using routes object..
routes1.getImages(function(err, genres) {
if (err) {
throw err;
 
}
res.json(genres);
 
});
});

app.get('/images/:id', function(req, res) {
 
//calling the function from index.js class using routes object..
routes1.getImageById(req.params.id, function(err, genres) {
if (err) {
throw err;
}
//res.download(genres.path);
res.send(genres.path1)
});
});

module.exports = app;


