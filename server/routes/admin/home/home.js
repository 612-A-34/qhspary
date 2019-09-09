const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const formidable = require('formidable');                         //图片上传
const fs = require('fs');                                         //不确定有没有用
const http = require('http');
const path = require('path');


//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
router.get('/carousel',(req,res)=>{
    let carouselData=[];
     console.log('收到请求-admin/home/carousel')
     db.query(`SELECT * FROM home_banner`,(err,data)=>{
        if(err){
            console.log('admin/home/carousel',err);
            res.status(500).send('admin/home/carousel database error').end();
        }else{
         console.log('admin/home/carousel',data);
         carouselData = data;
         console.log('admin/home/carousel-查询数据',data)
         let imgPath = path.normalize(carouselData[0].home_banner_href);
           res.sendFile( __dirname + "/" +imgPath );
        //  for(let i=0;i<carouselData.length;i++){
        //   let path = carouselData[i].home_banner_href;
        //   res.sendFile( __dirname + "/" +path );
        // }

        //  new Promise(
        //   function (resolve, reject) {
          
        //     resolve(carouselData)
        //    }
        // ).then(data => {
        //     res.json({
        //       status:0,
        //       data:data,
        //     })
        // });
        }
     });
});
router.post('/uploadCarousel',(req,res)=>{
  console.log('收到请求-admin/home/uploadCarousel')
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8';                                //设置编辑
    form.uploadDir ='server/public/images/carousel';        //设置上传目录--上传路径错误
    form.keepExtensions = true;                             //保留后缀
    form.maxFieldsSize = 10 * 1024 * 1024;                  //文件大小
    form.type = true;
    form.parse(req, function(err, fields, files) {
      console.log("parsing done");
      console.log('files.file.path',files.file.path);
      if(err) {
        let message = {err:1, msg:"文件解析失败"};
          res.json({
            status:1,
            data:message
          })
      }
      let picturePath = files.file.path.replace(/\\/g,'\\\\')
      console.log('picturePath',picturePath)
      db.query(`INSERT INTO home_banner (home_banner_name,home_banner_href)VALUES('${files.file.name}','${picturePath}' );`,(err,data)=>{
        if(err){
            console.log('admin/home/uploadCarousel--数据库插入',ekklrr);
            res.status(500).send('admin/home/uploadCarousel database error').end();
        }else{
         console.log('admin/home/uploadCarousel--数据插入成功',data);
            res.json({
                erron:0,
                data:data
            })
        }
     });
    });
    
});

module.exports = router;
