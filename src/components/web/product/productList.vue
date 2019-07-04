<template>
<div>
     <!-- <div class="container-fluid mini">
        </div> -->
     <section id="main">
            <div id="slider">
                <div class="sliders">
                    <div class="item">
                        <img src="../../../../static/picture/111.jpg">
                    </div>
                </div>
            </div>
            <nav class="crumbs">
                <div class="container">
                    <div class="con" style='float:left'>
                        当前位置:
                        <a href='/'>
                            主页
                        </a>
                        >
                        <a href="">产品中心</a>
                        >
                        <a href=''>
                            筑路机械
                        </a>
                        >
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-md-9 content">
                         <div class="title-con">
                            <h3>
                                筑路机械
                            </h3>
                             <!-- <ul class="cp-child">
                            <li class="cat-item cat-item-19">
                                <a >泵车</a>
                            </li>
                            <li class="cat-item cat-item-18">
                                <a >泵车</a>
                            </li>
                            </ul> -->
                        </div>
                        <!-- 文章列表开始 -->
                        <div class="cp-list" v-for='item in productsList'>
                            <article class="product type-product status-publish has-post-thumbnail hentry">
                                <div class="row">
                                    <figure class="entry-img col-md-6 col-sm-6 col-xs-12">
                                        <a href='' rel="bookmark" title="<b>SSR220AC-8全液压单驱单钢轮压路机</b>">
                                            <img class="lazy thumbnail" src="../../../../static/picture/1-1ffh155390-l.jpg" data-original="../../../../picture/1-1FFH156110-L.jpg"
                                            alt="<b>SSR220AC-8全液压单驱单钢轮压路机</b>" />
                                        </a>
                                    </figure>
                                    <div class="entry-content col-md-6 col-sm-6 col-xs-12">
                                        <h2 class="entry-title">
                                            <a href="" rel="bookmark">
                                                <b> {{item.pro_name}} </b>
                                            </a>
                                        </h2>
                                        <p>  简介：{{item.Introduction}}</p>
                                        <p>  参数：{{}}  </p>
                                        <p>  参数：{{}}  </p>
                                        <p>  参数：{{}}  </p>
                                        <a class="more" href='' rel="bookmark"
                                        title="<b>SSR220AC-8全液压单驱单钢轮压路机</b>">
                                            查看详情 +
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="page-nav">
                            <span class="pageinfo">
                                共
                                <strong>
                                    1
                                </strong>
                                页
                                <strong>
                                    2
                                </strong>
                                条记录
                            </span>
                        </div>
                    </div>
                    <div class="col-md-3 sidebar hidden-xs hidden-sm">
                        <aside class="cp-cat">
                            <h3>
                                产品分类
                            </h3>
                             <ul>
                                <li class="cat-item">
                                    <a href="">
                                        混凝土机械
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="">
                                        挖掘机
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="">
                                        煤炭机械
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="">
                                        筑路机械
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="">
                                        起重机
                                    </a>
                                </li>
                            </ul>
                        </aside>
                        <aside class="sidebar-hot">
                            <div class="widget-title">
                                <h2>
                                    推荐新闻
                                </h2>
                            </div>
                            <ul>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                <li>
                                    <a href='' rel='bookmark' title=' “七七事变”80周年，三一为“中国制造”增添骨气” '>
                                        “七七事变”80周年，三一为“中国
                                    </a>
                                </li>
                                
                            </ul>
                        </aside>
                        <aside class="s400">
                            <div class="kf">
                                <div class="kf-con">
                                    <img src="../../../../static/picture/kf.png">
                                    <p>
                                        “客户为根，服务为本”深深铭刻在每个华能中天人心中，时时微笑、处处用心的服务品质在无线电波中传递，让数以万计的客户更加信赖华能中天。
                                    </p>
                                    <span>
                                        ——在线客服：小平
                                    </span>
                                </div>
                            </div>
                            <h3>
                                <a href="">400-8888-9999</a>
                                <span>
                                    全国服务热线
                                </span>
                            </h3>
                        </aside>
                    </div>
                </div>
            </div>

             <!--轮播-成功案例-->
            <successCase></successCase>
        </section>
</div>
</template>
<script>
import successCase from '@/components/web/successCase'
export default {
    name: 'productList',
    components:{ successCase },
    props: ["productSort",],
  data() {
    return {
      productsList:[],
    }
  },
   mounted(){
      this.selectProductsSort();
    },  
   methods:{
       //查询某类产品
       selectProductsSort(){
        this.$axios.get(this.BASE_URL+'/website/products/productList/'+this.productSort)
        .then((response)=>{
            this.productsList = response.data.data;
            console.log('this.productsList',this.productsList);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
   },
}
</script>
<style scoped>

</style>
