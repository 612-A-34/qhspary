const express = require('express');

module.exports=function(){
    let adminRouter=express.Router()
    adminRouter.get('/1.html',function(req,res){
        res.send('我是web-1').end();
     });
     adminRouter.get('/2.html',function(req,res){
      res.send('我是web-2').end();
     });
      return adminRouter;
};