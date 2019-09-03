<template>
<div>

     <div class='title' style="">
       <p class='p'style=""><i class="el-icon-s-management" style="blue"></i>&nbsp;轮播图管理</p>
       <el-button type="primary" plain>添加图片</el-button>
     </div>
     <div>
        <el-table :data="tableData" style="width: 100%" ref="carouselTable"  highlight-current-row>
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column label="轮播图名称"  width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="缩略图" width="180">
              <template slot-scope="scope">
              
              </template>
            </el-table-column>
            <el-table-column label="缩略图" width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
         </el-table>
     </div>
   

</div>
</template>

<script>
export default {
  name: 'carousel',
  // components: {Maintable, LineEcharts},
  data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
  
  mounted () {
    // this.selfAdaption()
  },
  methods: {
    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts){
            that.$refs.echarts.chart.resize()
          }
        }
      }, 10)
    }
  }
}
</script>

<style >
  .content{
    
  }
  .title{
   background: #FFFFFF;
   width: 100%;
   height:50px;
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
