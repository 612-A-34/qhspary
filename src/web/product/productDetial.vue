<template>
    <div>
        <!-- <div class="container-fluid mini"></div> -->
        <section id="main">
            <div id="slider">
                <div class="sliders">
                    <div class="item">
                        <img src="../../../static/picture/111.jpg">
                    </div>
                </div>
            </div>
            <nav class="crumbs" >
                <div class="container" >
                    <div class="con" style='float:left'>
                        当前位置:
                        <a>主页</a>>
                        <a>{{thisProduct.pro_name}}</a>>
                    </div>
                </div>
            </nav>
            <div class="single-con container">
                <div class="row">
                    <div class="con1">
                        <div class="col-md-5">
                            <div class="cp-img">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="lazy thumbnail" src="../../../static/picture/1-1FFH15P50-L.jpg" data-original="picture/1-1FFH00508.jpg"
                                            alt="60系列拖泵HBT6013C-5S3" />
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="lazy thumbnail" src="../../../static/picture/1-1FFH15P50-L.jpg" data-original="picture/1-1FFH00509.jpg"
                                            alt="60系列拖泵HBT6013C-5S3" />
                                        </div>
                                    </div>
                                    <div class="swiper-pagination big-p1">
                                    </div>
                                    <div class="icon-arrows-left icon">
                                    </div>
                                    <div class="icon-arrows-right icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cp-info col-md-7">
                            <h1>
                                {{thisProduct.pro_name}}
                            </h1>
                            <div class="cp-des">
                                <p>
                                    专家快评：1998年，在深圳赛格广场创下了300.8米国内最高的泵送纪录，赢得“中国泵王”的称号。
                                    <br />
                                    低压输送量：35m³/h
                                    <br />
                                    压力：23MPa
                                    <br />
                                    动力形式：S阀电动机
                                </p>
                            </div>
                            <div class="cp-buy">
                                <p>
                                    <a>阿里巴巴下单地址</a>
                                    <br />
                                    <a>淘宝下单地址</a>
                                    <br />
                                    专属业务员联系方式：400-8888-9999
                                    <br />
                                    <a>产品说明书下载地址</a>
                                </p>
                            </div>
                            <div class="lx-btn">
                                <p>
                                    服务热线：
                                    <a>400-8888-9999 </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="con2 col-md-10 col-md-offset-1">
                        <h3 class="h3-title">
                            产品详情
                        </h3>
                        <p style="box-sizing: border-box; border: 0px; font-size: 14px; outline: 0px; padding: 0px; margin: 0px 0px 1rem; vertical-align: baseline; line-height: 1.6; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                            12 小时不间断连续泵送，三一拖泵仍能不辱使命；
                        </p>
                        <p style="box-sizing: border-box; border: 0px; font-size: 14px; outline: 0px; padding: 0px; margin: 0px 0px 1rem; vertical-align: baseline; line-height: 1.6; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                            60000 方混凝土浇筑 60 小时内不间断完成；
                        </p>
                        <p style="box-sizing: border-box; border: 0px; font-size: 14px; outline: 0px; padding: 0px; margin: 0px 0px 1rem; vertical-align: baseline; line-height: 1.6; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                            B90、C150、三级配等高难度混凝土轻松应对；
                        </p>
                        <p style="box-sizing: border-box; border: 0px; font-size: 14px; outline: 0px; padding: 0px; margin: 0px 0px 1rem; vertical-align: baseline; line-height: 1.6; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                            淤泥、矿渣、废料等亦可泵送；
                        </p>
                        <p style="box-sizing: border-box; border: 0px; font-size: 14px; outline: 0px; padding: 0px; margin: 0px 0px 1rem; vertical-align: baseline; line-height: 1.6; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                            故障自诊断技术，每时每刻洞察设备状态，可实时监测和诊断超过 50 项故障，可有效缩短 70% 的排故时间，为您省时省心；
                        </p>
                        <p style="box-sizing: border-box; border: 0px; font-size: 14px; outline: 0px; padding: 0px; margin: 0px 0px 1rem; vertical-align: baseline; line-height: 1.6; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                            专用运动控制器，采用泵送专用运动控制器，集成泵送经典算法与功能库，运算速度更快，性能更优越，与泵送工况完美融合。
                        </p>
                    </div>
                </div>
            </div>
            <!--推荐产品-->
            <div class="cp-xg container">
                <div class="title-con">
                    <h3>
                        推荐产品
                    </h3>
                </div>
                <div class="row">
                    <ul v-for=''>
                        <li class="col-md-3 col-sm-3 col-xs-6">
                            <a rel="bookmark" title="SSR220AC-8全液压单驱单钢轮压路机">
                                <img class="thumbnail" src="../../../static/picture/1-1ffh156110-l.jpg" alt="SSR220AC-8全液压单驱单钢轮压路机"/>
                                <p>SSR220AC-8全液压单驱单钢轮</p>
                            </a>
                        </li>
                         <li class="col-md-3 col-sm-3 col-xs-6">
                            <a rel="bookmark" title="SSR220AC-8全液压单驱单钢轮压路机">
                                <img class="thumbnail" src="../../../static/picture/1-1ffh156110-l.jpg" alt="SSR220AC-8全液压单驱单钢轮压路机"/>
                                <p>SSR220AC-8全液压单驱单钢轮</p>
                            </a>
                        </li>
                         <li class="col-md-3 col-sm-3 col-xs-6">
                            <a rel="bookmark" title="SSR220AC-8全液压单驱单钢轮压路机">
                                <img class="thumbnail" src="../../../static/picture/1-1ffh156110-l.jpg" alt="SSR220AC-8全液压单驱单钢轮压路机"/>
                                <p>SSR220AC-8全液压单驱单钢轮</p>
                            </a>
                        </li>
                         <li class="col-md-3 col-sm-3 col-xs-6">
                            <a rel="bookmark" title="SSR220AC-8全液压单驱单钢轮压路机">
                                <img class="thumbnail" src="../../../static/picture/1-1ffh156110-l.jpg" alt="SSR220AC-8全液压单驱单钢轮压路机"/>
                                <p>SSR220AC-8全液压单驱单钢轮</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
           <!--轮播-成功案例-->
            <successCase></successCase>
        </section>
    </div>
</template>
<script>
import successCase from '@/web/successCase';
export default {
  name: 'productDetail',
  components:{ successCase},
  props: ["productSort",'productId'],
  data() {
    return {
      querySortParam:'',
      pageParam:{
        currentPage:1,
        pageSize:5,
      },
      recommendProd:[],
      thisProduct:{

      },
    }
  },
   mounted(){
      this.selectProductSort();
      this.queryProduct();
    },  
  methods:{
      //推荐-某类
     selectProductSort(){
        this.querySortParam = this.productSort;
        console.log('查询productSort',this.productSort)
        this.$axios.get(this.BASE_URL+'/website/products/productList/'+this.querySortParam,
        {params:this.pageParam})
        .then((response)=>{
            this.recommendProd = response.data.data.secletList;
            console.log('this.recommendProd',this.recommendProd);
        })                                                                                                                                                                                                                                                                                                               
        .catch(function (error) {
            console.log(error);
        });
    },
    queryProduct(){
        this.$axios.get(this.BASE_URL+'/website/products/'+this.productId)
        .then((response)=>{
            this.thisProduct = response.data.data;
            console.log('this.thisProduct',this.thisProduct);
        })                                                                                                                                                                                                                                                                                                               
        .catch(function (error) {
            console.log(error);
        });
    }

  }
    
}
</script>
<style>

</style>
