const express = require('express');
var router = express.Router();
const mysql = require('mysql');

//自建数据库
let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
//查询产品列表-bypro_name/productClassfiy/page
router.get('/queryProductlist',(req,res)=>{
  let skip = (parseInt(req.query.currentPage)-1)*parseInt(req.query.pageSize); //计算索引值
  let productList = {};
  db.query(` SELECT COUNT(id) FROM product_table WHERE (pro_name='${req.query.pro_name}' or '${req.query.pro_name}'='') OR
            (productClassfiyId='${req.query.productSort}' or '${req.query.productSort}'='')`,(err,data)=>{
    if(err){
        console.log('管理系统-产品列表-total-sql',err);
        res.status(500).send('管理系统-产品列表-分页sql-error').end();
    }else{
        console.log('管理系统-产品列表-总数sql-success',data[0]['COUNT(id)']);
        productList.total = data[0]['COUNT(id)'];
        new Promise(
            function (resolve, reject) {
              console.log('skip:,req.query.pageSize',skip,)
              db.query(`SELECT * FROM product_table WHERE (pro_name='${req.query.pro_name}' or '${req.query.pro_name}'='') OR
                        (productClassfiyId='${req.query.productSort}' or '${req.query.productSort}'='')
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

 //产品中心-分类查询-每一类三个
 router.get('/modifyProdct',(req,res)=>{
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
  let productList={};
  console.log('req.params,req.query:',req.params,req.query)                    //注意：拿到的是字符串
  let skip = (parseInt(req.query.currentPage)-1)*parseInt(req.query.pageSize); //索引值
  db.query(`SELECT COUNT(id) FROM product_table WHERE productClassfiy='${req.params.productSort}'`,(err,data)=>{
      if(err){
          console.log('产品列表-分页sql',err);
          res.status(500).send('产品列表-分页sql-error').end();
      }else{
          console.log('产品列表-总数sql-success',data[0]['COUNT(id)'] );
          productList.total = data[0]['COUNT(id)'];
          new Promise(
              function (resolve, reject) {
                console.log('skip:,req.query.pageSize',skip,)
                db.query(`SELECT * FROM product_table WHERE productClassfiy='${req.params.productSort}' limit ${skip},${req.query.pageSize}`,(err,data)=>{
                  if(err){
                    console.log('产品列表-分页sql',err);
                    res.status(500).send('产品列表-分页sql-error').end();
                    }else{
                    console.log('产品列表-分页sql-success',data);
                    resolve(data); // 数据处理完成
                  };
                });
              }
          ).then(data => {
                productList.secletList=data;
                res.json({
                  erron:0,
                  data:productList
                })
          });
    };
  });
});

//产品详情
router.get('/:productId',(req,res)=>{
  db.query(`SELECT * FROM product_table WHERE id='${req.params.productId}'`,(err,data)=>{
      if(err){
          console.log('/products/:productId',err);
          res.status(500).send('/products/:productId database error').end();
      }else{
          res.json({
              erron:0,
              data:data[0]
          })
           console.log('产品详情',data[0])
      }
 });
});


module.exports = router;
