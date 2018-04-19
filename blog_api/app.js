var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser')

//这是路由,进行页面渲染
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup//视图引擎设置进行页面的渲染   设置模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//模板引擎是ejs




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(bodyParser())

//静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



//接口
let apiUser=require('./api/back/user.js')
app.use('/api/back/user',apiUser)
let apiClass=require('./api/back/class.js')
app.use('/api/back/class',apiClass)
let getOne=require('./api/back/getone.js')//读取one中的数据
app.use('/api/back/get',getOne)

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
