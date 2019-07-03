const express = require('express');
var router = express.Router();
const mysql = require('mysql');


//node+express+mangoDB代码


//const Products = require('../models/products');
// //连接数据库
// mysql,connect('mysql://127.0.0.1/qhspary');
// //监听数据库链接
// mysql.createConnection.on('connected',function(){
//     console.log('连接成功');
// });
// mysql.createConnection.on('error',function(){
//     console.log('连接失败');
// });
// mysql.createConnection.on('disconnected',function(){
//     console.log('断开链接');
// });

// router.get("/website/products/sort",function(req,res,next){
//     res.send('在，product模块/分类');
//     Products.find({},function(err,doc){                 //mogo-api，参数1、查找条件2、回调函数
//        if(err){
//            res.json({
//                status:'1',
//                msg:err.message
//            });
//        }else{
//            res.json({
//                status:'0',
//                msg:'',
//                result:{
//                    count:doc.length,
//                }
//            })
//        }
//     });            
// })