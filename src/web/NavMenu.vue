<template>
  <div>
      <header id="header">
        <div class="top-header">
          <div class="container">
            <div class="fl">您好，欢迎来到上海群华涂装机械设备制造有限公司!</div>
                <div class="fr tool">
                        <span class="hidden-xs">
                            <a rel="nofollow" target="_blank" href="http://www.weibo.com">
                                <i class="fa fa-weibo">
                                </i>
                                微博关注
                            </a>
                        </span>
                        |
                        <span>
                            <a rel="nofollow" target="_blank" href="">
                                <i class="fa fa-qq">
                                </i>
                                QQ咨询
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="btm-header container">
                 <div class="header-logo fl">
                    <a class="logo" href="/" title="上海群华涂装机械设备制造有限公司">
                        <img src="../../static/picture/logo.jpg" alt="上海群华涂装机械设备制造有限公司" />
                    </a>
                    <h2 class="hidden-xs">
                        <b>
                            群华涂装
                        </b>
                        品质改变世界
                    </h2>
                </div>
                <div class="contact fr hidden-xs">
                    <i class="fa fa-volume-control-phone fa4"> </i>
                    <p>
                        服务热线：
                        <a>
                            400-8888-9999
                        </a>
                    </p>
                </div>
            </div>
            <div class="header-nav">
                 <div class="container">
                     <ul id="menu-header" class="header-menu-con">
                         <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                            <a @click="" href="">首页</a>
                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-products">
                            <router-link :to="{ name: 'productCenter' }">产品中心</router-link>
                            <ul class="sub-menu"  >
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-products" v-for='item in productsSorts'>
                                    <!-- <a @click="" href="">{{item.cnname}}</a> -->
                                    <a @click="toProductList(item.productClassfiy)">{{item.productClassfiy}}</a>                              
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-products ">
                           <router-link :to="{ name: 'service' }">服务支持</router-link>
                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-products ">
                            <router-link :to="{ name: 'cooperationCase' }">合作案例</router-link>
                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-products ">
                           <router-link :to="{ name: 'newsList' }">新闻动态</router-link>
                            <ul class="sub-menu"  >
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-products">
                                    <a @click="" href="">公司新闻</a>
                                </li>
                                 <li class="menu-item menu-item-type-taxonomy menu-item-object-products">
                                    <a @click="" href="">行业动态</a>
                                </li>
                                 <li class="menu-item menu-item-type-taxonomy menu-item-object-products">
                                    <a @click="" href="">行业规范</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-products ">
                            <router-link :to="{ name: 'aboutUs' }">关于我们</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
         <div class="container-fluid mini">
        </div>

    <!--页面渲染入口-->
    <router-view></router-view>
    
     <section id="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-top clearfix">
                        <div class="col-md-2 col-sm-2 hidden-xs">
                            <h3>
                                关于公司
                            </h3>
                            <ul id="menu-nav" class="company-menu-con">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                   <a href="">
                                        产品中心
                                    </a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="">
                                        关于我们
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2 col-sm-2 hidden-xs">
                            <h3>
                                服务支持
                            </h3>
                            <ul class="help-menu-con">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                   <a href="">
                                        产品中心
                                    </a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="">
                                        服务支持
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2 col-sm-2 hidden-xs">
                            <h3>
                                新闻活动
                            </h3>
                            <ul class="news-menu-con">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="">
                                        合作案例
                                    </a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="">
                                        公司新闻
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <h3>
                                关注我们
                            </h3>
                            <img src="../../static/picture/wechat.png">
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <h3>
                                联系我们
                            </h3>
                            <div class="tel">
                                <p>
                                    24小时为您服务
                                    <br/>
                                    （周一至周五9:00~18:00）
                                    <br/>
                                    <strong>
                                        400-8888-9999
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="copyr">
                            <p>
                                Copyright &copy; 2002-2018 上海群华涂装机械设备制造有限公司 版权所有 &nbsp;&nbsp;
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <script type='text/javascript' src='js/scripts.js'>
        </script>
        <script type='text/javascript' src='js/script.min.js'>
        </script>
        <script type='text/javascript' src='js/wphy.js'>
        </script>
        <script type='text/javascript' src='js/wp-embed.min.js'>
        </script> -->
        <ul id="side-bar" class="side-pannel side-bar hidden-xs">
            <a class="qq" rel="nofollow" target="_blank" href="">
                <i class="f_top fa fa-qq ">
                </i>
            </a>
            <span class="dh">
                <i class="f_top fa fa-volume-control-phone">
                </i>
                <div class="hide">
                    <div class="hied_con">
                        <dl>
                            <dt>
                                咨询电话
                            </dt>
                            <dt>
                                <a href="">
                                    400-8888-9999
                                </a>
                            </dt>
                        </dl>
                        <dl>
                            <dt>
                                微信号
                            </dt>
                            <dt>
                                <a href="">
                                    wx12345678
                                </a>
                            </dt>
                        </dl>
                    </div>
                </div>
            </span>
            <a title="回到顶部" href="javascript:;" class="gotop" style="display: block;" >
                <i class="f_top fa fa-chevron-up">
                </i>
            </a>
        </ul>
  </div>
</template>
<script>
import website from "@/mixins/website";
export default {
  name: 'NavMemu',
  mixins:[website], 
  data() {
    return {
        productsSorts:[],
        selectProSotr:'',
    }
  },
  mounted(){
      //所有分类
     this._queryproductsSorts();     
    },
  methods: {
    toProductList(sort){
        console.log('执行，sort',sort)
        this.$router.push({path:'/productCenter/productList/'+ sort});
    },      
}
};
</script>
<style>

</style>
