<template>
  <div class='content'>
    <h1>轮播图管理</h1>
    <el-row>
        <el-col :span="8" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'carousel',
  // components: {Maintable, LineEcharts},
  data() {
      return {
        currentDate: new Date()
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
    margin-top:50px;
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
