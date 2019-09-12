<template>
  <div>
        <section id="main">
            <!-- 幻灯片 -->
            <div id="slider">
                <div class="swiper-container">
                    <!-- <div class="swiper-wrapper"> -->
                      <div class="swiper-slide">
                        <el-carousel>
                            <el-carousel-item v-for="item in carousel" :key="item.id">
                                <el-image :src="href+item.home_banner_href":alt="item.home_banner_name" 
                                           fit="fill" style="width:100%; height:auto;"></el-image>
                            </el-carousel-item>
                        </el-carousel>
                     </div>       
                </div>
            </div>
            <!-- 幻灯片结束 -->
            <!-- 主体内容开始 -->
             <div id="main-con">
                <!--home-aboutUS-->
                <div class="us container">
                    <div class="row">
                        <div class="us-con">
                            <div class="us-img col-md-4 col-sm-7 col-xs-12">
                                <img src="../../static/picture/a1.png">
                            </div>
                            <div class="us-des col-md-8 col-sm-5 col-xs-12">
                                <p>
                                    <b>
                                        上海群华涂装设备制造有限公司
                                    </b>
                                    始创于1989年。自成立以来，三一始终秉持“创建一流企业，造就一流人才，做出一流贡献”的愿景，打造了知名的“三一”品牌。
                                </p>
                                <p>
                                    三一集团主业是以“工程”为主题的装备制造业，主导产品为混凝土机械、挖掘机械、起重机械、筑路机械、桩工机械、风电设备、港口机械、石油装备、煤炭设备、精密机床等全系列产品，其中挖掘机械、桩工机械、履带起重机械、移动港口机械、路面机械、煤炭掘进机械为中国主流品牌；混凝土机械为全球品牌。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--home-产品中心-->
                <div class="cp container">
                    <div class="title-con">
                        <h3>
                            产品中心
                            <span>
                                PRODUCTS CENTER
                            </span>
                        </h3>
                    </div>
                    <div class="row">
                        <div class="cp-cat col-md-3">
                            <h3>
                                产品直通车
                            </h3>
                            <ul>
                                <li class="cat-item">
                                    <a href="www.baidu.com">
                                        混凝土机械
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="www.baidu.com">
                                        挖掘机
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="www.baidu.com">
                                        煤炭机械
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="www.baidu.com">
                                        筑路机械
                                    </a>
                                </li>
                                <li class="cat-item">
                                    <a href="www.baidu.com">
                                        起重机
                                    </a>
                                </li>
                            </ul>
                            <h3>
                                <a href="www.baidu.com">
                                    400-8888-9999
                                </a>
                                <span>
                                    全国服务热线
                                </span>
                            </h3>
                        </div>
                         <div class="col-md-9">
                            <div class="cp-hot">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="www.baidu.com" title="SSR220AC-8全液压单驱单钢轮压路机">
                                                <img class="thumbnail" src="../../static/picture/1-1ffh156110-l.jpg" alt="SSR220AC-8全液压单驱单钢轮压路机"
                                                style="width:425px; height:462px;" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="www.baidu.com" title="SSR220AC-8全液压单驱单钢轮压路机">
                                                <img class="thumbnail" src="../../static/picture/1-1ffh155390-l.jpg" alt="SAG200C-6平地机"
                                                style="width:425px; height:462px;" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="www.baidu.com" title="SSR220AC-8全液压单驱单钢轮压路机">
                                                <img class="thumbnail" src="../../static/picture/1-1ffh154350-l.jpg" alt="EBZ318H悬臂式掘进机"
                                                style="width:425px; height:462px;" />
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="www.baidu.com" title="SSR220AC-8全液压单驱单钢轮压路机">
                                                <img class="thumbnail" src="../../static/picture/1-1ffh115260-l.jpg" alt="工业泵（防爆）HBMD-35/23-160S"
                                                style="width:425px; height:462px;" />
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Add Pagination -->
                                    <div class="swiper-pagination big-p1">
                                    </div>
                                    <!-- Add Navigation -->
                                    <div class="icon-arrows-left icon">
                                    </div>
                                    <div class="icon-arrows-right icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--home-核心竞争力-->
                 <div class="youshi">
                    <div class="container">
                        <div class="title-con">
                            <h3>
                                核心竞争力
                                <span>
                                    CORE COMPETENCIES
                                </span>
                            </h3>
                        </div>
                        <div class="row">
                            <ul class="ys-con">
                                <li class="item">
                                    <div class="ys-left col-md-6 col-sm-6 col-xs-12">
                                        <h3>
                                            制造 将行业趋势握在手中
                                        </h3>
                                        <p class="hidden-sm">
                                            对智能制造的积极配合和大力推进，让三一在智能制造和物联网的革命中占据先机，再次成为行业的领头羊。三一在长沙投入建设的18号厂房是智能化制造车间，这是三一工业信息化建设的一个典范。
                                            <br/>
                                            中国机械唯一智能仓库。9000平方米占地面积，16000仓库容量，数千条生产线。
                                            <br/>
                                            亚洲智能制造车间。物料准时配送率超95%，质检电子化率达100%，运营成本降20%。
                                        </p>
                                        <a  class="more" rel="nofollow" href="www.baidu.com">
                                            了解详情 +
                                        </a>
                                    </div>
                                    <div class="ys-img col-md-6 col-sm-6 col-xs-12">
                                        <a href="http://www.baidu.com">
                                            <img src="../../static/picture/e.jpg">
                                        </a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="ys-left col-md-6 col-sm-6 col-xs-12">
                                        <h3>
                                            科技 服务客户的尖端武器
                                        </h3>
                                        <p class="hidden-sm">
                                            研发：研发费用高达年销售收入的5%—7%。
                                            <br/>
                                            技术：工程机械行业获得国家级最高荣誉的企业，三次“国家科技进步奖”得主，两次荣获“国家技术发明奖”。
                                            <br/>
                                            服务：ECC全球企业控制中心，链接客户与企业的“最后一公里”。
                                            <br/>
                                            物联网：云端数据，智能管理，故障预测，售后无忧。
                                        </p>
                                        <a  class="more" rel="nofollow" href="http://www.baidu.com">
                                            了解详情 +
                                        </a>
                                    </div>
                                    <div class="ys-img col-md-6 col-sm-6 col-xs-12">
                                        <a href="http://www.baidu.com">
                                            <img src="../../static/picture/d.jpg">
                                        </a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="ys-left col-md-6 col-sm-6 col-xs-12">
                                        <h3>
                                            创新 领跑行业的动力源
                                        </h3>
                                        <p class="hidden-sm">
                                            金融、保险、物联网、孵化器、风电，看似跨度极大的产业在三一得到完美的融合和发展。对产业的创新和改革，是三一拥有强大生命力的源泉，而实力、魄力、凝聚力，则是三一在创新的路上披荆斩棘的根本。
                                        </p>
                                        <a  class="more" rel="nofollow" href="http://www.baidu.com">
                                            了解详情 +
                                        </a>
                                    </div>
                                    <div class="ys-img col-md-6 col-sm-6 col-xs-12">
                                        <a href="http://www.baidu.com">
                                            <img src="../../static/picture/c.jpg">
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--轮播-成功案例-->
                 <successCase></successCase>
                <!--公司新闻-->
                 <div class="news container">
                    <div class="title-con">
                        <h3>
                            新闻资讯
                        </h3>
                    </div>
                    <div class="row">
                        <div class="news-con col-md-6">
                            <h3>
                                <a href="http://www.baidu.com">
                                    公司新闻
                                </a>
                            </h3>
                            <ul class="news-list">
                                <li class="news-top">
                                    <div class="news-img">
                                        <a href="http://www.baidu.com" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                            <img class="thumbnail" src="../../static/picture/0i4093535-0-lp.jpg" alt="“七七事变”80周年，三一为“中国制造”增添骨气"
                                            style="width:570px;height:300px;" />
                                        </a>
                                    </div>
                                    <div class="news-content">
                                        <h2>
                                            <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                                “七七事变”80周年，三一为“中国制造”增添骨气
                                            </a>
                                        </h2>
                                        <p>
                                            1937年7月7日，卢沟桥边燃起战火，中华民族的全面抗战正式打响。 在七七事变爆发80周年之际，每一个中国人都应在铭记历史的同时自省自励：落后就会挨打。国民的幸福安定，需要强
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-angle-right">
                                    </i>
                                     <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                        三一美国实现稳健发展，特朗普万亿计划将带来
                                    </a>
                                    <span class="hidden-sm hidden-xs">
                                        2017-07-08
                                    </span>
                                </li>
                                <li>
                                    <i class="fa fa-angle-right">
                                    </i>
                                     <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                        三一C8路机春季巡展圆满落幕：用数据说话，听客
                                    </a>
                                    <span class="hidden-sm hidden-xs">
                                        2017-07-08
                                    </span>
                                </li>
                                <li>
                                    <i class="fa fa-angle-right">
                                    </i>
                                     <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                        湖南工业开局良好三一、 中联等骨干企业总产值
                                    </a>
                                    <span class="hidden-sm hidden-xs">
                                        2017-07-08
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="baike-con col-md-6">
                            <h3>
                                <a href="http://www.baidu.com">
                                    新闻动态
                                </a>
                            </h3>
                            <ul class="baike-list">
                                <li class="baike-top">
                                    <h2>
                                         <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                            湖南工业开局良好三一、 中联等骨干企业总产值
                                        </a>
                                    </h2>
                                    <p>
                                        全省工业开局良好 增速稳中有升，新兴优势产业增长强劲 华声在线4月13日讯(记者 胡信松) 记者从今天召开的全省一季度工业经济形势分析会上获悉，我省工业经济开局良好，增速稳中
                                    </p>
                                </li>
                                <li class="baike-btm">
                                    <span>
                                        <b>
                                            08
                                        </b>
                                        2017-07
                                    </span>
                                    <h2>
                                         <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                            合作共赢 协作发展——淮南矿业与三一重装召开
                                        </a>
                                    </h2>
                                    <p>
                                        淮南矿业一行9人在总经理王世森先生的带领下，对三一重装进行合作考察，并举行座谈会，三一重装总经理吴立昆先生、研究院院长李勇先生、综掘研究院李恩龙先生、营销公司管理部
                                    </p>
                                </li>
                                <li class="baike-btm">
                                    <span>
                                        <b>
                                            08
                                        </b>
                                        2017-07
                                    </span>
                                    <h2>
                                         <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                            发改委督促签订煤炭中长协合同
                                        </a>
                                    </h2>
                                    <p>
                                        近日，国家发改委印发了《关于加快签订和严格履行煤炭中长期合同的通知》，要求加快煤炭中长期合同的签订，并严格履行。 通知明确，4月中旬前完成合同签订工作，确保签订的年
                                    </p>
                                </li>
                                <li class="baike-btm">
                                    <span>
                                        <b>
                                            08
                                        </b>
                                        2017-07
                                    </span>
                                    <h2>
                                         <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                            三一集团将与挪威NBT公司在新兴市场开展风机合
                                        </a>
                                    </h2>
                                    <p>
                                        4 月7 日，中国挪威商业峰会在北京举行。在挪威首相索尔贝格的见证下，三一集团有限公司（以下简称三一或三一集团）与来自挪威的风电运营商NBT
                                        AS 公司(以下简称NBT)，在论坛上签署
                                    </p>
                                </li>
                                <li class="baike-btm">
                                    <span>
                                        <b>
                                            08
                                        </b>
                                        2017-07
                                    </span>
                                    <h2>
                                         <a href="http://www.baidu.com"  rel="bookmark" title="“七七事变”80周年，三一为“中国制造”增添骨气">
                                            三一市值位居行业榜首，受资本市场追捧
                                        </a>
                                    </h2>
                                    <p>
                                        随着基建需求叠加更新需求，工程机械行业从去年下半年开始积极回暖，各类设备销量持续上升。作为行业龙头，三一更是销售火爆，市场需求喜人。 在挖掘机方面，三一已连续6年销
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="talk">
                    <div class="container">
                        <div class="title-con">
                            <h3>
                                用最周到的服务、最可靠的产品质量、让您放心使用！
                            </h3>
                        </div>
                        <div class="row">
                            <div class="talk-content">
                                <div class="talk-images col-md-4 ">
                                    <img src="../../static/picture/b.jpg">
                                </div>
                                <div class="talk-con col-md-8">
                                    “中国从来不缺大企业，但是需要培育一批真正的世界级企业。”现在，三一已经成为越来越多外国人了解中国的一个侧影，成为中国企业和中国人实现“中国梦”的一个经典故事。产业报国的理想在持续推动三一做大做强装备制造业，为国家和民族贡献一个世界级装备制造业品牌的同时，也激励更多中国企业代表中国走向世界。
                                    <p class="qm">
                                        总经理:梁稳根
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
 </div>
</template>
<script>
import successCase from '@/web/successCase'
export default {
  name: 'Home',
  components:{ successCase },
  data() {
    return {
       carousel:[],
       href:this.BASE_URL+'/images/carousel/',
    }
  },
   mounted () {
    this.webSelectCarousel();
  },
  methods: {
      //查询所有轮播图
      webSelectCarousel(){
        this.$axios.get(this.BASE_URL+'/website/web_home/carousel').then((response)=>{
            console.log('已有轮播图列表',response);
            this.carousel = response.data.data;
        }).catch(function (error) {
            console.log(error);
        });
    },

  }
}
</script>
<style >
.carouselmg{
    height:300px;
}

</style>
