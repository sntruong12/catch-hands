var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');

// load the .env variables
require('dotenv').config();

require('./config/database');
require('./config/passport');

// import user routes
var indexRouter = require('./routes/index');
var pagesRouters = require('./routes/pages');
var fightersRouter = require('./routes/fighters');
var mainsRouter = require('./routes/mains');
var combosRouter = require('./routes/combos')

// import api routes
var fightersApiRouter = require('./routes/api/fighters');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'catch hands',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// user routes
app.use('/', indexRouter);
app.use('/', pagesRouters);
app.use('/fighters', fightersRouter);
app.use('/mains', mainsRouter);
app.use('/', combosRouter);

// api routes
app.use('/api', fightersApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
