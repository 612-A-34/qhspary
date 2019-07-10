const createError = require('http-errors');        
const express = require('express');
const path = require('path');                     //node自带模块-处理文件路径
const cookieParser = require('cookie-parser');    //获取cookie信息 
const cookieSession = require('cookie-session');  //cookie签名-不是加密
const logger = require('morgan');                 //日志输出
const ejs = require('ejs');                       //ejs模板
const bodyParser = require('body-parser');        //http请求解析

//路由
const indexRouter = require('./routes/index');                   //渲染首页的路由
// const usersRouter = require('./routes/users'); 
const usersRouter = require('./routes/admin/users'); 
const productsWebRouter = require('./routes/website/products');  //孟-添加产品的路由

var app = express();
console.log('服务开启');

// view engine setup  ---设置引擎
app.set('views', path.join(__dirname, 'views'));          //设置视图访问目录
app.engine('.html',ejs.__express);
app.set('view engine', 'html');                           //设置引擎

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('shyboxkgy73(&'));                   //cookie处理-添加cookie签名+防止本地进行篡改
app.use(cookieSession({                                   //cookieSession 必须放在cookieParser后面
  keys: ['7u6', ')ij', '$3h'],                            //session的秘钥，防止session劫持。这个秘钥会被循环使用，秘钥越长，数量越多，破解难度越高。
  maxAge: 20*60*1000,
  name: 'session'                                         //可以改变浏览器cookie的名字
 }));
app.use(bodyParser.json());                               //对post数据进行json转换
app.use(express.static(path.join(__dirname, 'public')));  //存取静态文件

//跨域
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /*让options请求快速返回*/
  } else {
    next();
  }
})

//路由
app.use('/', indexRouter);                             // 当访问/文件目录下的时候加载index
app.use('/admin/users', usersRouter); 
app.use('/website/products', productsWebRouter );      //孟 


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
