//封装 token 生成和解析函数
const jwt = require('jsonwebtoken');
const signkey = 'mes_qdhd_mobile_xhykjyxgs';

//生成token
exports.setToken = function(username,userid){
	return  jwt.sign({         //用户信息
				name:username,
				_id:userid
		    }, 
		    signkey,                          //密钥
			{ expiresIn:60*1.5});             //有效时间
}

//解析token
exports.verToken = function(token){
	console.log('封装-验证token',token)
	// return new Promise((resolve,reject)=>{
	// 	//let info = jwt.verify(token.split(' ')[1],signkey);
	// 	let info = jwt.verify(token,signkey,function (err, decode) {
	// 		if (err) {  //  时间失效的时候/ 伪造的token          
	// 			return err
	// 		} else {        
	// 			return decode    
	// 		}
	// 	  })
	// 	console.log('封装-ver-token-info',info)
    //     resolve(info);
	// })
	
		//let info = jwt.verify(token.split(' ')[1],signkey);
		 jwt.verify(token,signkey,function (err, decode) {
			if (err) {  //  时间失效的时候/ 伪造的token    
				console.log('token-验证失败',err)      
				return err
			} else {   
				console.log('token-成功',decode)       
				return decode    
			}
		  })
		
}
