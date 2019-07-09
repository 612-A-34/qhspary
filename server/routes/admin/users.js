var express = require('express');
var router = express.Router();
const mysql = require('mysql');

let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
//登录注册
router.post('/login', function(req, res, next) {
     //post 参数通过req.body来获取
      let params = {
        username: req.body.params.username,
        password: req.body.params.password
      }
      db.query(`SELECT username,password FROM admin_table WHERE username='${params.username}'`,(err,data)=>{
        if(err){
            console.log('user/admin/login',err);
            res.status(500).send('user/admin/login database error').end();
        }else{
            if(data.length!==0){
              if(data[0].password===params.password){
                //cooike-session
                res.cookie('userID',data[0].password,{        //(name,value,{path（那个目录下可以读取到cookie）,有效期}
                    path:'/',
                    maxAge:1000*30
                });
               //req.session.user=data;                        //
                res.json({
                    status:0,
                    message:"查询成功",
                    data:null
                })
               }else{
                res.json({
                    status:0,
                    message:"密码错误",
                    data:null
                })
               }
            }else{
                res.json({
                    status:0,
                    message:"用户名错误",
                    data:null
                })
            }
        }
   });

});

//增加用户

//删除用户

//修改用户名密码


module.exports = router;