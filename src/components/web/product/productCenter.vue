<template>
  <div>
        <div class="container-fluid mini">
        </div>
          <section id="main">
            <div id="slider">
                <div class="sliders">
                    <div class="item">
                        <img src="../../../../static/picture/s1.png">
                    </div>
                </div>
            </div>
            <nav class="crumbs">                                                
                <div class="container">
                    <div class="con" style='float:left'>
                        当前位置:
                        <a href>主页</a>
                        >
                        <a href="">产品中心</a>
                    </div>
                </div>
            </nav>
            <div class="single-con container">
                <div class="title-con">
                    <h3>
                        产品中心
                        <span>
                            PRODUCTS CENTER
                        </span>
                    </h3>
                </div>
                <!--内容/列举-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="cp-cats" v-for='classfiy in productCenter '>
                            <div class="cp-title">
                                <h3>
                                    <a href="">{{classfiy[0].productClassfiy}}</a>
                                </h3>
                                <p class="more">
                                    <a href="">查看更多 +</a>
                                </p>
                            </div>
                            <ul v-for='item in classfiy '>
                                <li class="col-md-3 col-sm-4 col-xs-12">
                                    <a href="" title="EBZ160H悬臂式掘进机">
                                        <img class="lazy thumbnail" src="../../../../static/picture/image-pending.png" data-original="../../../static/picture/1-1FFH155060-L.jpg"
                                        :alt="item.pro_name" />
                                        <p>
                                          {{item.pro_name}}
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>

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
  name: 'productCenter',
  components:{ successCase },
  data() {
    return {
        productCenter:[],
    }
  },
   mounted(){
     this.queryproductCenter();   
    },
  methods: {
    queryproductCenter(){
        console.log('产品中心--')
        this.$axios.get(this.BASE_URL+'/website/products/productCenter')
        .then((response)=>{
            let products = response.data.data;
            console.log('products',products)
            for( let item of products){
                  this.productCenter.push(item.slice(0,3));
            }
            console.log('this.productCenter',this.productCenter);
        })
        .catch(function (error) {
            console.log(error);
        });
    },      
}
};
</script>
<style scoped>

</style>
