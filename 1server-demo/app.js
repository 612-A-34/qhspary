const express = require('express');
const mysql = require('mysql');
const static = require('express-static');            //帮助读取静态文件
const bodyParser = require('body-parser');           //http请求解析
const multer = require('multer');                    //form表单-文件上传
const multerObj = multer({dest:'./static/upload'});  //注意不是require
const cookieParser = require('cookie-parser');       //取cookie的中间件
const cookieSession = require('cookie-session');     //读写session
const consolidate = require('consolidate');          //模板引擎（jade+ejs）
const expressRoute = require('express-route');       //路由

const webRouter = require('./server/route/webRouter.js.js.js.js');
const adminRouter = require('./server/route/adminRouter.js.js.js.js');

let server=express();
console.log('服务已经启动');
server.listen(8083);

//1、获取请求数据
//get自带
server.use(multerObj.any()); 

//2、cookie、session
server.use(cookieParser());

(function(){
     let keys=[];
     for(var i=0;i<100000;i++){
          keys[i]='a_'+Math.random();
     }
     server.use(cookieSession({
          name:'',
          keys:keys,                    //session必须加密
          maxAge:20*60*1000             //20min有效期
     }))
})();

//3、模板
server.engine('vue',consolidate.ejs);  //告诉html需要哪个引擎
server.set('views','components')       //设置模板文件位置
server.set('view engine','vue')        //将vue设置成默认扩展

//4、route
server.use('/web/',webRouter());
server.use('/admin/',adminRouter());

//5、default：static

