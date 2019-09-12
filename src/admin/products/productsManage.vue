<template>
  <div >
     <!--产品管理-->
     <el-tabs type="border-card">
        <el-tab-pane label="产品管理列表">
                <div class='title'>
                    <p class='p'><i class="el-icon-s-management" style="blue"></i>&nbsp;产品管理列表</p>
                    <el-button type="primary" plain @click="addProduct" icon="el-icon-plus">
                               添加产品</el-button>
                </div>
                <div>
                      <el-table :data="tableData" style="width: 100%" ref="carouselTable"  highlight-current-row>
                          <el-table-column type="index" width="50"></el-table-column>
                          <el-table-column label="轮播图名称"  width="280">
                            <template slot-scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.home_banner_name }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="缩略图" width="280">
                            <template slot-scope="scope">
                              <el-image   style="width:190px; height:80px"  fit="scale-down" lazy
                                          :src="href+scope.row.home_banner_href" >
                              </el-image>
                            </template>
                          </el-table-column>
                          <el-table-column label="操作">
                            <template slot-scope="scope">
                              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                          </el-table-column>
                      </el-table>
                  </div>
        </el-tab-pane>
        <el-tab-pane label="产品详情">
              产品详情
              <div id="wangeditor">
                <div ref="editorElem" style="text-align:left;"></div>
              </div>
        </el-tab-pane>
      </el-tabs>
                                  

  </div>
</template>
<script>
import E from "wangeditor";
export default {
    name: 'productsManage',
    components: {},
    mounted () {
          this.wangEditer();          //创建富文本实例
    },
    data(){
        return{
            editor: null,
            editorContent: '',
            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        }
    },
    methods:{
      addProduct(){

      },
      wangEditer(){
          this.editor = new E(this.$refs.editorElem);
          // 编辑器的事件，每次改变会获取其html内容
          this.editor.customConfig.onchange = html => {
         this.editorContent = html;
     this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ];
    this.editor.create(); // 创建富文本实例
      },

    },
}
</script>
<style scoped>
 .title{
   background: #FFFFFF;
   width: 100%;
   height:43px;
  }
  .p{
   float:left;
   margin:15px;
   font-size:16px;
   font-weight:bold;
  }
</style>
