const ejs = require('ejs');                       //ejs模板
const path = require('path');                     //node自带模块-处理文件路径
const express = require('express');
const logger = require('morgan');                 //日志输出
const jwt = require('jsonwebtoken');              //用来生成token
const createError = require('http-errors');        
const bodyParser = require('body-parser');        //http请求解析
const cookieParser = require('cookie-parser');    //获取cookie信息 
const cookieSession = require('cookie-session');  //cookie签名-不是加密

//封装
const vertoken = require('./models/admin/token_vertify.js');

//路由
const indexRouter = require('./routes/index');                   //渲染首页的路由
// const usersRouter = require('./routes/users'); 
const usersRouter = require('./routes/admin/users');             //孟-用户登录
const productsWebRouter = require('./routes/website/products');  //孟-添加产品的路由

var app = express();
console.log('服务开启');

// view engine setup  ---设置引擎
app.set('views', path.join(__dirname, 'views'));          //设置视图访问目录
app.engine('.html',ejs.__express);
app.set('view engine', 'html');                           //设置引擎
// --设置中间件
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
   return  res.sendStatus(status)   /*让options请求快速返回*/
   //return  res.status(200)
  } else {
    console.log('错误？？option')
    next();
  }
  

  //token
  console.log("req.headers",req.headers)
  console.log("req.headers['Authorization']",req.headers['Authorization'])
  let token = req.headers['Authorization'];
	if(token == undefined){
    console.log('token==undefind')
		return next();
	}else{
		vertoken.verToken(token).then((data)=> {
			req.data = data;
			return next();
		}).catch((error)=>{
			return next();
		})
	}
})

//登录拦截
// app.use(function(req, res, next) {
//    if(req.cookies.userId){
//      next();                                //req取数据不是res发送数据，cookies而不是cookie
//    }else{
//       if(req.originalUrl==='/admin/users/login'||req.originalUrl==='/admin/users/logout' ){
//          next();
//       }else{
//         return  res.json({
//            status:0,
//            message:'当前用户未登录',
//            data:''
//         })
//       }
//    }                                 
// });

//路由
app.use('/', indexRouter);                             // 当访问/文件目录下的时候加载index
app.use('/admin/users', usersRouter); 
app.use('/website/products', productsWebRouter );      //孟 


// catch 404 and forward to error handler-捕获
app.use(function(req, res, next) {
  console.log('404???')
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
