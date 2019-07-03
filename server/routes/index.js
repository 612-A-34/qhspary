var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index访问成功')
  res.render('1.html', { title: 'Express' });
});

module.exports = router;    //记得是返回router啦，笨蛋
