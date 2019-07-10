<template>
  <div>
        <section id="main">
            <div id="slider">
                <div class="sliders">
                    <img src=" ../../static/picture/111.jpg">
                </div>
            </div>
            <nav class="crumbs">
                <div class="container">
                    <div class="con">
                        当前位置:
                        <a href='/'>
                            主页
                        </a>
                        >
                        <a href='/a/guanyuwomen/'>
                            关于我们
                        </a>
                    </div>
                </div>
            </nav>
            <div class="single-con container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="single-content">
                            &nbsp;
                            <span style="color: rgb(98, 98, 98); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体; font-size: 16px;">
                                中国机械唯一智能仓库。9000平方米占地面积，16000仓库容量，数千条生产线。亚洲智能制造车间。物料准时配送率超95%，质检电子化率达100%，运营成本降20%。
                            </span>
                            <p style="box-sizing: border-box; border: 0px; font-size: 16px; outline: 0px; padding: 0px 0px 15px; margin: 0px; vertical-align: baseline; line-height: 26px; color: rgb(98, 98, 98); font-family: &quot;Microsoft YaHei&quot;, Arial, Helvetica, sans-serif, 宋体;">
                                创新
                                <br style="box-sizing: border-box;" />
                                领跑行业的动力源
                                <br style="box-sizing: border-box;" />
                                金融、保险、物联网、孵化器、风电，看似跨度极大的产业在三一得到完美的融合和发展。对产业的创新和改革，是三一拥有强大生命力的源泉，而实力、魄力、凝聚力，则是三一在创新的路上披荆斩棘的根本。
                            </p>
                        </div>
                    </div>
                    <rightDisplay></rightDisplay>
                </div>
            </div>
        </section>
           
     
  </div>
</template>
<script>
import rightDisplay from '@/web/rightDisplay';
import successCase from '@/web/successCase';
export default {
  name:'aboutUs',
  components:{ rightDisplay,successCase },
  data() {
    return {}
  }
};
</script>
<style>

</style>
