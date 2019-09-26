//官网-首页-查询展示接口
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
//查出轮播图列表
router.get('/carousel',(req,res)=>{
     console.log('收到请求-/home/carousel')
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
