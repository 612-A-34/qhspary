<template>
  <div >
     <!--产品管理-->
     <el-tabs type="border-card" v-model="activeTabName" >
        <el-tab-pane label="产品管理列表" name="firstTab">
                <div class='title'>
                    <p class='p'><i class="el-icon-s-management"></i>&nbsp;产品管理列表</p>
                    <el-button type="primary" plain @click="addProduct" icon="el-icon-plus" size="mini">
                               添加产品</el-button>
                </div>
                 <el-divider></el-divider>
                <div class='content'>
                      <el-form :inline="true" v-model="queryCondition" style="float:left" size="mini">
                        <el-form-item label="产品类别">  
                          <el-select v-model="queryCondition.productClassfiyId" placeholder="请选择产品类别">
                            <el-option v-for="item in productsSorts" :label="item.productClassfiy" :value="item.id"
                                       @change="productsSortChange"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="queryProductlist">查询</el-button>
                        </el-form-item>
                      </el-form>
                
                     <div class="tableStyle">
                        <el-table :data="tableData" style="width: 100%" ref="table"  highlight-current-row
                                   border  height="410" size="mini" :header-row-class-name="getTenHeaderRowName">
                          <el-table-column label="产品ID"  prop="id" align="center" width="70"></el-table-column>
                          <el-table-column label="产品名称" prop="pro_name" align="center" width="250"></el-table-column>
                          <el-table-column label="产品分类" prop="productClassfiy" align="center" width="120"></el-table-column>
                          <el-table-column label="产品简介" prop="description" align="center"></el-table-column>
                          <el-table-column label="缩略图" prop="href" width="200">
                            <template slot-scope="scope">
                              <el-image   style="width:180px; height:80px"  fit="scale-down" lazy
                                          :src="href+scope.row.href" >
                              </el-image>
                            </template>
                          </el-table-column>
                          <el-table-column label="操作" width="156">
                            <template slot-scope="scope">
                              <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                          </el-table-column> 
                        </el-table>
                     </div>
                    
                      <el-pagination layout="total, sizes, prev, pager, next, jumper" :page-sizes="[5, 10, 15, 20]"
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="queryCondition.currentPage"
                          :page-size='queryCondition.pageSize'
                          :total='total'>
                        </el-pagination>
                  </div>
        </el-tab-pane>

        <!--详情编辑-->
        <el-tab-pane label="产品详情" name="secondTab">
            <productDetailEditor :productDetail="productDetail"></productDetailEditor>
        </el-tab-pane>
      </el-tabs>
                                  

  </div>
</template>
<script>
import website from "@/mixins/website";
import productDetailEditor from "./productDetailEditor";
export default {
    name: 'productsManage',
    mixins:[website], 
    components: {productDetailEditor},
   
    mounted () {
          this._queryproductsSorts();  
          this.queryProductlist();
    },
    data(){
        return{
            activeTabName:'firstTab',
            total:0,
            editor: null,
            href:this.BASE_URL+'/images/products/',
            productDetail:{              
              pro_name:'',
              productClassfiyId:'',
              description:'',
              editorContent:'',
            },
            productsSorts:[],
            queryCondition:{               //查询条件
              currentPage:1,
              pageSize:5,
              productClassfiyId:'',
            },
            tableData: [{
              id:'',
              pro_name:'暂时无数据',
              productClassfiy:'',
              description:'暂无数据',
            },]
        }
    },
    methods:{
      queryProductlist(){
        console.log('产品列表查询条件',this.queryCondition)
        this.$axios.get(this.BASE_URL+'/admin/products/queryProductlist',{params:this.queryCondition})
        .then((response)=>{
            this.total = response.data.data.total;
            this.tableData = response.data.data.selectList;
            console.log('查询产品列表',response);
        })                                                                                                                                                                                                                                                                                                               
        .catch(function (error) {
            console.log(error);
        });
      },
      //添加产品-切换tab页面
      addProduct(){
        this.activeTabName="secondTab";
        this.productDetail={
          pro_name:'',
          productClassfiyId:'',
          editorContent:'',
          description:'',
        }
      },
      //修改产品详情-参数所有数据
      handleEdit(index,row){
        console.log('修改某个产品',row)
        this.activeTabName="secondTab";
        this.productDetail={
          pro_name:row.pro_name,
          productClassfiyId:row.productClassfiyId,
          description:row.description,
          editorContent:row.content,
        }   
        console.log('修改获取行内容赋值', this.productDetail)
      },

      //提交详情-新建/修改
      submitProductDetail(){
        console.log('添加产品上传参数',this.productDetail);
        this.$axios.post(this.BASE_URL+'/admin/products/addProduct',this .productDetail)
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
                this.queryProductlist();
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
      //删除某个产品
      handleDelete(index,row){
         console.log('row',row)
          this.$axios.get(this.BASE_URL+'/admin/products/deleteProduct/'+row.id)
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
                this.queryProductlist();
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
      //产品类别下拉框改变
      productsSortChange(){
        this.queryCondition.currentPage=1;
        this.queryCondition.pageSize=5;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.queryCondition.pageSize = val;
        this.queryProductlist();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.queryCondition.currentPage = val;
        this.queryProductlist();
      },
      getTenHeaderRowName({ row, rowIndex }) {
          return 'tableStyle-header'
      },
      wangEditer(){
          this.editor = new E(this.$refs.editorElem);
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
      },
      
    },
}
</script>
<style scoped >
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
