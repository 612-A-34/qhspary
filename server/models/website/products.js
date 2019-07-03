const mysql= require('mysql');
const Schema = mysql.Schema;   //表模型？？？

let productSchema = new Schema({
    'productId':String,
    'productName':String,
    'salePrice':Number,
    'productImage':String
})

module.exports = mysql.model('product',productSchema);  //输出商品模型-基于模型掉api方法

//数据模型
class BaseModel {
    constructor(data,message){   //data是对象类型，message是字符串类型
        if(typeof data === 'string'){  //若第一个参数传递字符串类型，进行兼容
            this.message = data;
            data = null;
            message = null;
        }
    }
}








