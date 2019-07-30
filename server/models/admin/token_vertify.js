//封装 token 生成和解析函数
const jwt = require('jsonwebtoken');
const signkey = 'mes_qdhd_mobile_xhykjyxgs';

//生成token
exports.setToken = function(username,userid){
	return new Promise((resolve,reject)=>{
		const token = jwt.sign({         //用户信息
			name:username,
			_id:userid
        }, 
        signkey,                          //密钥
		{ expiresIn:60*1.5});             //有效时间
		console.log('封装-set-token-token',token)
		resolve(token);
	})
}

//解析token
exports.verToken = function(token){
	console.log('封装-验证token',token)
	return new Promise((resolve,reject)=>{
		let info = jwt.verify(token.split(' ')[1],signkey);
		console.log('封装-ver-token-info',info)
        resolve(info);
	})
}
