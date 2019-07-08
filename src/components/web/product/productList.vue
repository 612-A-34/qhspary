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
                        <a>{{this.productSort}}</a>
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
                                        <a class="more"rel="bookmark":title="item.pro_name" @click="gotoProductDetial(item.id)">
                                            查看详情 +
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <!--分页-->
                        <div>
                            <!-- <div class="page-nav"> -->
                            <!-- <span class="pageinfo"> -->
                                <!-- 共<strong> 1</strong>页<strong> 2</strong> 条记录 -->
                            <!-- </span> -->
                             <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="pageParam.currentPage"
                                :page-sizes="[5, 8, 10, 12]"
                                :page-size="pageParam.pageSize"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                                </el-pagination>
                        </div>
                    </div>
                    <!--右侧推荐-分类-新闻-->
                     <div class="col-md-3 sidebar hidden-xs hidden-sm">
                        <aside class="cp-cat">
                            <h3>
                                产品分类
                            </h3>
                             <ul v-for='item in productsSorts'>
                                <li class="cat-item">
                                    <a @click="reRendProductList(item.productClassfiy)">{{item.productClassfiy}}</a>
                                </li>
                            </ul>
                        </aside>
                        <aside class="sidebar-hot">
                            <div class="widget-title">
                                <h2>
                                    推荐新闻
                                </h2>
                            </div>
                            <ul v-for=''>
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
import successCase from '@/components/web/successCase';
import website from "@/mixins/website";
export default {
    name: 'productList',
    mixins:[website],     
    components:{ successCase},
    props: ["productSort",],
  data() {
    return {
      productsList:[],
      productsSorts:[],
      querySortParam:'',
      total:100,
      pageParam:{
        currentPage:1,
        pageSize:5,
      },
    }
  },
  watch:{
      productSort: {
            handler: function (val, oldVal) {
            console.log('new c: %s, old: %s', val, oldVal)
            this.selectProductSort();
            },
            deep: true
        },
  },
   mounted(){
      this.selectProductSort();
      //所有产品分类
      this._queryproductsSorts();   
    },  
   methods:{
     //查询某类产品
     selectProductSort(){
        this.querySortParam = this.productSort;
        console.log('查询productSort',this.productSort)
        this.$axios.get(this.BASE_URL+'/website/products/productList/'+this.querySortParam,
        {params:this.pageParam})
        .then((response)=>{
            this.productsList = response.data.data.secletList;
            this.total = response.data.data.total;
            console.log('this.productsList',this.productsList);
        })                                                                                                                                                                                                                                                                                                               
        .catch(function (error) {
            console.log(error);
        });
    },
    //重新渲染分类列表
    reRendProductList(sort){
        console.log('重新渲染sort',sort)
        this.$router.push({path:'/productCenter/productList/'+ sort});
        this.productSort = sort;
        this.selectProductSort();
    },  
    //分页
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    //跳转详情
    gotoProductDetial(productId){
         console.log('productId',productId)
         this.$router.push({path:'/productCenter/productDetial/'+this.productSort+'/'+ productId});
    },   
   },
}
</script>
<style scoped>

</style>
