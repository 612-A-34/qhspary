const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const formidable = require('formidable');                         //图片上传

//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
//查出轮播图列表
router.get('/carousel',(req,res)=>{
     console.log('收到请求-admin/home/carousel')
     db.query(`SELECT * FROM home_banner`,(err,data)=>{
        if(err){
            console.log('admin/home/carousel',err);
            res.status(500).send('admin/home/carousel database error').end();
        }else{
            console.log('admin/home/carousel',data);
            res.json({
              status:0,
              data:data
            })  
        }
     });
});
//上传新的轮播图
router.post('/uploadCarousel',(req,res)=>{
  console.log('收到请求-admin/home/uploadCarousel')
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8';                                //设置编辑
    form.uploadDir ='server/public/images/carousel';        //设置上传目录--上传路径错误
    form.keepExtensions = true;                             //保留后缀
    form.maxFieldsSize = 10 * 1024 * 1024;                  //文件大小
    form.type = true;
    form.parse(req, function(err, fields, files) {
    let arrImgName=files.file.path.split("\\");
      if(err) {
        let message = {status:1, msg:"文件解析失败"};
          res.json({
            status:1,
            data:message
          })
      }
      db.query(`INSERT INTO home_banner (home_banner_name,home_banner_href)VALUES('${files.file.name}','${arrImgName[4]}' );`,(err,data)=>{
        if(err){
            console.log('admin/home/uploadCarousel--数据库插入',err);
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
//删除某个轮播图
router.get('/carouselDelete/:id',(req,res)=>{
  console.log('收到请求-轮播图管理-删除',req.params.id)
   db.query(`DELETE FROM home_banner WHERE id=${req.params.id}`,(err,data)=>{
      if(err){
          console.log('admin/home/carouselDelete/:id',err);
          res.status(500).send('admin/home/carouselDelete/:id database error').end();
      }else{
          console.log('admin/home/carouselDelete/:id',data);
          res.json({
            status:0,
            data:data
          })  
      }
   });
});

module.exports = router;
