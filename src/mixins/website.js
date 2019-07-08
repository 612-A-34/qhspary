export default {
    data(){
      return{

      }
    },
    methods: {
       //查询所有产品分类
       _queryproductsSorts(){
           console.log('mixins')
           this.$axios.get(this.BASE_URL+'/website/products/sort')
           .then((response)=>{
            this.productsSorts = response.data.data;
            console.log('this.productsSorts',this.productsSorts);
        })
        .catch(function (error) {
            console.log(error);
        });
       },
       
       //查询某个产品详情

       //查询产品分类列表

       //查询某个新闻

       //

        
    }
}