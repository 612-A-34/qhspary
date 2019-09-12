<template>
<div>

     <div class='title' style="">
       <p class='p'style=""><i class="el-icon-s-management" style="blue"></i>&nbsp;轮播图管理</p>
       <el-button type="primary" plain @click="addCarousel" icon="el-icon-plus">
                  添加图片</el-button>
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
    
    <!--添加轮播图弹框-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>轮播图名称：</span>
        <el-upload class="" :limit="1" :on-exceed="handleExceed"
                   :action="BASE_URL+'/admin/home/uploadCarousel'" 
                   :on-preview="handlePreview" :on-success="uploadImgSuccess"
                   :on-remove="handleRemove" :file-list="fileList" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>

</div>
</template>

<script>
export default {
  name: 'carousel',
  // components: {Maintable, LineEcharts},
  data() {
      return {
        dialogVisible: false,
        href:this.BASE_URL+'/images/carousel/',
        fileList: [],
        carsouelName:'',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
  
  mounted () {
    // this.selfAdaption()
    this.selectCarousel();
  },
  methods: {
     //添加轮播图
     addCarousel(){
       this.dialogVisible=true;
     },
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      //上传文件超出处理
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleClose(done) {
        this.dialogVisible=false;
        this.fileList = [];
      },
      //图片上传成功
      uploadImgSuccess(response, file, fileList){
          this.$message({
                message: '图片上传成功!',
                type: 'success'
              });
          this.selectCarousel();
      },
      //查询所有轮播图
      selectCarousel(){
        this.$axios.get(this.BASE_URL+'/admin/home/carousel').then((response)=>{
            console.log('已有轮播图列表',response);
            this.tableData = response.data.data;
        }).catch(function (error) {
            console.log(error);
        });
    },
    //删除图片
    handleDelete(index,row){
       this.$axios.get(this.BASE_URL+'/admin/home/carouselDelete/'+row.id).then((response)=>{
            console.log('删除某轮播图',response);
            if(response.data.status===0){
               this.$message({
                message: '删除成功!',
                type: 'success'
              });
            }
            this.selectCarousel();
        }).catch(function (error) {
            console.log(error);
        });

    },
  }
}
</script>

<style >

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

  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
