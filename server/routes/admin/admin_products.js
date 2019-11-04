const express = require('express');
var router = express.Router();
const mysql = require('mysql');
//产品管理

//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
//查询产品列表-bypro_name/productClassfiy/page
router.get('/queryProductlist',(req,res)=>{
  let skip = (parseInt(req.query.currentPage)-1)*parseInt(req.query.pageSize); //计算索引值
  let productList = {};
  db.query(`SELECT COUNT(id) FROM product_table WHERE  
           productClassfiyId='${req.query.productClassfiyId}' or '${req.query.productClassfiyId}' ='' `,(err,data)=>{
    if(err){
        console.log('管理系统-产品列表-total-sql',err);
        res.status(500).send('管理系统-产品列表-分页sql-error').end();
    }else{
        console.log('管理系统-产品列表-总数sql-success',data[0]['COUNT(id)']);
        productList.total = data[0]['COUNT(id)'];
        new Promise(
            function (resolve, reject) {
              db.query(`SELECT product_table.*,productclassfiy.productClassfiy FROM product_table
                        left JOIN productclassfiy ON  (product_table.productClassfiyId= productclassfiy.id)
                        WHERE ( productClassfiyId='${req.query.productClassfiyId}' or '${req.query.productClassfiyId}'='')
                        limit ${skip},${req.query.pageSize}`,(err,data)=>{
                        if(err){
                          console.log('管理系统-产品列表-分页sql',err);
                          res.status(500).send('产品列表-分页sql-error').end();
                          }else{
                          console.log('产品列表-分页sql-success',data);
                          resolve(data); // 数据处理完成
                        };
              });
            }
        ).then(data => {
              productList.selectList=data;
              res.json({
                status:0,
                data:productList,
              })
        });
     };
  });
});

//添加产品详情
router.post('/addProduct',(req,res)=>{
        console.log('添加产品详情-req.body:',req.body)   //注意：拿到的是字符串
       db.query(`INSERT INTO product_table (pro_name,Introduction,description,productClassfiyId) VALUES
                 ('${req.body.pro_name}','${req.body.Introduction}','${req.body.editorContent}',
                '${req.body.productClassfiyId}' );`,(err,data)=>{
           if(err){
               console.log('admin/product/addProduct',err);
               res.status(500).send('website/product/sort database error').end();
           }else{
               res.json({
                   status:0,
                   data:data,
                   message:"数据插入成功！"
               })
           }
    });
});

//删除某个产品
router.get('/deleteProduct/:id',(req,res)=>{
 db.query(`DELETE FROM product_table WHERE id='${id}'`,(err,data)=>{
     if(err){
         console.log('admin/product/deleteProduct',err);
         res.status(500).send('website/product/sort database error').end();
     }else{
         res.json({
             status:0,
             data:data,
             message:"数据删除成功！"
         })
     }
});
});


module.exports = router;
