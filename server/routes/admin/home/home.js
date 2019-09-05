const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const formidable = require('formidable');                         //图片上传
const fs = require('fs');                                         //不确定有没有用
const http = require('http');


//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
router.get('/carousel',(req,res)=>{
     console.log('收到请求-admin/home/carousel')
    // db.query(`SELECT * FROM home_banner`,(err,data)=>{
    //     if(err){
    //         console.log('admin/home/carousel',err);
    //         res.status(500).send('website/product/sort database error').end();
    //     }else{
    //      console.log('admin/home/carousel',data);
    //         res.json({
    //             erron:0,
    //             data:data
    //         })
    //     }
    //  });
});
router.post('/uploadCarousel',(req,res)=>{
  console.log('收到请求-admin/home/uploadCarousel')
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir ='./../../../public/images'; //设置上传目录
    form.keepExtensions = true; //保留后缀
   
    form.maxFieldsSize = 1000 * 1024 * 1024; //文件大小
    form.type = true;

    console.log('uploadCarousel-req',req)
    form.parse(req, function(err, fields, files) {
      console.log("parsing done");
      console.log('files',files);
      if(err) {

        let message = {err:1, msg:"文件解析失败"};
        console.log('随便',message)
      }
      let message = {err:0, path:"http://localhost:8080/"+files.file.path};

      //向前端返回json数据
      res.write(JSON.stringify(message));
      res.end();
    });
 
    return;      
});

module.exports = router;
