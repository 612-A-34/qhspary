<template>
  <div >
              <div>
                <el-form ref="form" :model="productDetail" label-width="80px">
                    <el-form-item label="产品名称" >
                      <el-input v-model="productDetail.pro_name"></el-input>
                    </el-form-item>
                    <el-form-item label="产品分类">
                      <el-select v-model="productDetail.productClassfiyId" placeholder="请选择产品类别">
                        <el-option v-for="item in productsSorts" :label="item.productClassfiy" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="产品简介">
                      <el-input v-model="productDetail.Introduction"></el-input>
                    </el-form-item>
                  </el-form>
              </div>
              <div id="wangeditor">
                <div ref="editorElem" style="text-align:left;"></div>
              </div>
              <el-button type="primary" plain @click="submitProductDetail">确定</el-button>
              <el-button type="primary" plain @click="cancel">取消</el-button>
              
  </div>
</template>
<script>
import E from "wangeditor";
import website from "@/mixins/website";
export default {
    name: 'productDetailEditor',
    mixins:[website], 
    props:{
       productDetail:Object,
    },
    components: {},
    mounted () {
        this._queryproductsSorts();  
        this.wangEditer();          //创建富文本实例
    },
    watch:{
        productDetail:{
        handler:function(val,oldval){
          console.log('')
          this.wangEditer();
        },
        deep:true                   //对象内部的属性监听，也叫深度监听
      },

    },
    data(){
        return{
            activeTabName:'firstTab',
            total:0,
            editor: null,
         //   editorContent: '',
            productsSorts:[],
            queryCondition:{
              pro_name:'',
              productSort:'',
              currentPage:1,
              pageSize:5,
            },
            tableData: [{
              id:'',
              pro_name:'暂时无数据',
              productClassfiy:'',
              Introduction:'暂无数据',
            },]
        }
    },
    methods:{
      //提交详情-新建/修改
      submitProductDetail(){
        console.log('添加产品上传参数',this.productDetail);
        this.$axios.post(this.BASE_URL+'/admin/products/addProduct',this.productDetail)
         .then((response)=>{
            console.log('新建---',response);
            if( response.data.status===0){
               this.$message({
                  message: '新产品添加成功！',
                  type: 'success'
                });
                //添加成功后，数据置空
                this.productDetail={
                    pro_name:'',
                    productClassfiy:'',
                    editorContent:'',
                    Introduction:'',
                  }
                this.queryProductlist(); //发送
            }else{
               this.$message({
                showClose: true,
                message: '新产品上传失败！',
                type: 'error'
              });
            }
        })                                                                                                                                                                                                                                                                                                               
        .catch(function (error) {
            console.log(error);
        });
       
      },
      cancel(){

      },
      wangEditer(){
          console.log('获取不到值2？？？',this.productDetail)

          this.editor = new E(this.$refs.editorElem);
          this.editor.customConfig.zIndex = 100;
          //this.editor.customConfig.uploadImgServer = '/upload';     // 上传图片到服务器
          this.editor.customConfig.uploadImgShowBase64 = true;        // 使用 base64 保存图片
          // 编辑器的事件，每次改变会获取其html内容
          this.editor.customConfig.onchange = html => {
          this.productDetail.editorContent = html;
          this.catchData(this.productDetail.editorContent);           // 把这个html通过catchData的方法传入父组件
          };
          this.editor.customConfig.menus = [
            // 菜单配置
            'head',          // 标题
            'bold',          // 粗体
            'fontSize',      // 字号
            'fontName',      // 字体
            'italic',        // 斜体
            'underline',     // 下划线
            'strikeThrough', // 删除线
            'foreColor',     // 文字颜色
            'backColor',     // 背景颜色
            'link',          // 插入链接
            'list',          // 列表
            'justify',       // 对齐方式
            'quote',         // 引用
            'emoticon',      // 表情
            'image',         // 插入图片
            'table',         // 表格
            'code',          // 插入代码
            'undo',          // 撤销
            'redo'           // 重复
          ];
          this.editor.create(); // 创建富文本实例
          console.log('实例后能访问？、this.productDetail.editorContent',this.productDetail.editorContent)
           this.editor.txt.html(this.productDetail.editorContent);
         // this.editor.txt.html('请在这里编辑');
      },
      
    },
}
</script>
<style scope >
 .title{
   background: #FFFFFF;
   width: 100%;
   height:45px;
  }
  .p{
   float:left;
   margin:0px;
   font-size:16px;
   font-weight:bold;
  }
  .content{
   margin:0px;
   padding: 0%;
  }
 
  .el-popper{
     z-index: 999999;
  }
  .tableStyle .tableStyle-header th{
        border-right: solid 1px #BED0EC;
        background-color: #56A9FF;
        text-align: center;
        color:#FFFFFF;
        box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.1); 
    }
  .tableStyle .tableStyle-row td{
        font-family: 'MicrosoftYaHei';
        font-size: 16px;
        border-bottom: solid 1px #BED0EC;
        border-right: solid 1px #BED0EC;
        text-align: center;
        padding: 2px 0;
    }
 
</style>
