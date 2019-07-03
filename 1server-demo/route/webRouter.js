const express = require('express');

module.exports=function(){
    let webRouter=express.Router()
    webRouter.get('/1.html',function(req,res){
       // res.send('我是web-1').end();
        res.render('../../src/components/NavMenu.vue')
     });
    webRouter.get('/2.html',function(req,res){
      res.send('我是web-2').end();
    });
    return webRouter;
};