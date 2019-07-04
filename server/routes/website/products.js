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

//源数据库
// let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspary0'});//保持连接
// let productClassfiy = [];      
// router.get('/sort',(req,res)=>{
//            db.query(`SELECT cnname,classid FROM qh_kiclasses`,(err,data)=>{
//                if(err){
//                    console.error('website/product/sort',err);
//                    res.status(500).send('website/product/sort database error').end();
//                }else{
//                    productClassfiy = data;
//                    console.log('productClassfiy',productClassfiy)
//                    res.json({
//                        erron:0,
//                        data:data
//                    })
//                }
//         });
//     });

 //产品中心-分类查询-每一类三个
 router.get('/productCenter',(req,res)=>{
     console.log("productClassfiy",productClassfiy)
     let productCenter = [];

      new Promise(
        /* 执行器 executor */
        function (resolve, reject) {
          // 一段耗时很长的异步操作
          for( let item of productClassfiy){
            console.log('item.productClassfiyId',item.id)
              db.query(`SELECT * FROM product_table WHERE productClassfiyId='${item.id}' ORDER BY orderid DESC`,(err,data)=>{
               if(err){
                   console.log('产品中心-分类查询-每一类三个err',err);
                   res.status(500).send('website/product/sort database error').end();
               }else{
                   console.log('产品中心-分类查询-每一类三个success',data);
                   productCenter.push(data);
                   if(productCenter.length===productClassfiy.length){
                     resolve(productCenter); // 数据处理完成
                   }
               }
           });
         }
        }
     ).then(productCenter => {
       // 成功，下一步
        console.log('productCenter',productCenter)
        res.json({
            erron:0,
            data:productCenter
        })
      });
});

//产品列表-某个分类下所有产品列表-分页
router.get('/productList/:productSort',(req,res)=>{
  console.log('req.params: ',req.params)
  db.query(`SELECT * FROM product_table WHERE productClassfiy='${req.params.productSort}' ORDER BY orderid DESC`,(err,data)=>{
   // db.query(`SELECT * FROM product_table WHERE productClassfiyId='${req.params.productSort}' ORDER BY orderid DESC`,(err,data)=>{
      if(err){
          console.log('/productList/:productSort-err',err);
          res.status(500).send('website/product/sort database error').end();
      }else{
          res.json({
              erron:0,
              data:data
          })
           console.log('/productList/:productSort',data)
      }
});
});




module.exports = router;
