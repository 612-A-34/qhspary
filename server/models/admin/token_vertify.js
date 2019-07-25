//封装 token 生成和解析函数
const jwt = require('jsonwebtoken');

const signkey = 'mes_qdhd_mobile_xhykjyxgs';

//生成token
exports.setToken = function(username,userid){
	return new Promise((resolve,reject)=>{
		const token = jwt.sign({
			name:username,
			_id:userid
        },
        signkey,
        { expiresIn:60*60*24*10 });
		resolve(token);
	})
}

//解析token
exports.verToken = function(token){
	return new Promise((resolve,reject)=>{
		let info = jwt.verify(token.split(' ')[1],signkey);
		resolve(info);
	})
}
