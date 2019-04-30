const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
const body_parser = require('body-parser');

//middleware
app.use(body_parser.json());

/* GET home page. */
app.use('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//fire routes
app.use(require('./routes/get_contact_list'));
app.use(require('./routes/update_contact_list'));
app.use(require('./routes/create_contact'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req
        .app
        .get('env') === 'development'
        ? err
        : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
