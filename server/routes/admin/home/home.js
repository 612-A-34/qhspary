const express = require('express');
var router = express.Router();
const mysql = require('mysql');

//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
let productClassfiy = [];  
router.get('/sort',(req,res)=>{
       db.query(`SELECT productClassfiy,id FROM productclassfiy`,(err,data)=>{
           if(err){
               console.log('website/product/sort',err);
               res.status(500).send('website/product/sort database error').end();
           }else{
            productClassfiy = data;
               res.json({
                   erron:0,
                   data:data
               })
                console.log('查询数据',data)
           }
    });
});