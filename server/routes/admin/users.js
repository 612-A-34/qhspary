const express = require('express');
const router = express.Router();
const mysql = require('mysql');
//封装
const token_vertify = require('../../models/admin/token_vertify');

let db=mysql.createPool({host:'localhost',port:'3306',user:'root',password:'mengjia88',database:'qhspray'});//保持连接
//登录
router.post('/login', function(req, res, next) {
     //post 参数通过req.body来获取
      let params = {
        username: req.body.username,
        password: req.body.password
      }
      db.query(`SELECT username,password,ID FROM admin_table WHERE username='${params.username}'`,(err,data)=>{
        if(err){
            console.log('user/admin/login-err',err);
            res.status(500).send('user/admin/login database error').end();
        }else{
            if(data.length!==0){
              if(data[0].password===params.password){
                //cooike-session
                res.cookie('userID',data[0].password,{        //(name,value,{path（那个目录下可以读取到cookie）,有效期}
                    path:'/',
                    maxAge:1000*30,
                    signed:true,                              //cookie签名
                });
            //    req.session['user']=data;                    //seccion？？？？加密？？
              let token = token_vertify.setToken(data.username,data.ID);
               console.log('users-login-token',token)
               //返回
               return res.json({
                    status:0,
                    token:token,
                    message:"查询成功",
                    data:null
                })
               }else{
                return res.json({
                    status:1,
                    message:"密码错误",
                    data:null
                })
               }
            }else{
                return res.json({
                    status:1,
                    message:"用户名错误/用户不存在",
                    data:null
                })
            }
        }
   });

});

//退出账号
router.post('/logout', function(req, res, next) {
     res.cookie('userID','',{        
            path:'/admin',
            maxAge:0,                                 //立即过期
        });
        return res.json({
            status:0,
            message:"登出成功",
            data:null
        })

});

//用户信息的校验
router.post('/checkLogin', function(req, res, next) {
    res.cookie('userID','',{       

        path:'/admin',
        maxAge:0,                                 
    });
    res.json({
        status:0,
        message:"登出成功",
        data:null
    })

});

//用来判断token是否失效/过期
router.get('/checkUser',(req,res,next)=>{
     //访问请求头中的token方法-req.headers.authorization-req.get("Authorization")-req.headers['Authorization']（失败）
     let token1 = req.get("Authorization");     
     console.log('token1',token1)
     let token = req.headers['authorization'];
     console.log('token-typeof', typeof(token) )
     if(token == 'undefined'){             //没有token
       console.log('token==undefind，没有token啥情况？？')
       res.json({
        status:2,
        message:'没有勾选10天内自动登录选项，不能登录',
        data:null
    })
     }else{
       if(token_vertify.verToken(token)==='Invalid Signature' ){
        console.log('router-users-token验证失败')
        res.json({
          status:1,
          message:'token验证失败-过期/伪造',
          data:null
      })
       }else{
         console.log('router-users-token验证成功')
         res.json({
          status:0,
          message:"token验证成功",
          data:null
      })
       }
     }
});



//增加用户

//删除用户

//修改用户名密码


module.exports = router;
