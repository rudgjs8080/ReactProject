var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/**
 * CROSS ORIGIN RESOURCE SHARE
 * 서로 다른 서버간에 데이터를 주고 받을 때 보안문제로 인해
 * 발생할 수 있는 ISSUE
 */
const cors = require('cors')
const mongoose = require('mongoose')

// db가 작동되는 것을 모니터링을 하기 위한 event handler를 등록
const dbConn = mongoose.connection
dbConn.once('open', () => {
	console.log('Mongo Open OK')
})
dbConn.on('error', () =>{
	console.error
})

// config/mongoConfigSample.json에 ID와 PASSWORD를 등록 한 후 파일 명 변경 후 사용
const mongoConfig = require('./config/mongoConfig.json')
const mongoAtlas = 
	`mongodb+srv://${mongoConfig.USERID}:${mongoConfig.PASSWORD}@cluster0.zckdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongoose.connect('mongodb://localhost:27017/mydb')
mongoose.connect(mongoAtlas)


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// CORS를 허용할 Origin List 만들기
const whiteList = ['http://localhost:5000']
const corsOption = {
	origin : (origin, callback) => {
		const isWhiteList = whiteList.indexOf(origin) !== -1
		callback(null, isWhiteList)
	},
	credentials: true,
}

app.use(cors(corsOption))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
