// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import store from './store';
import router from './router';
import VueI18n from 'vue-i18n';                      //vue-国际化
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import '../static/css/swiper.css'
import '../static/css/styles.css'
import '../static/css/style.css'
import '../static/css/slicknav.min.css'
import '../static/css/language-selector.css'
import '../static/css/jquery.fancybox.css'
import '../static/css/font-awesome.min.css'

Vue.config.productionTip = false                    //
Vue.prototype.BASE_URL = 'http://localhost:3000';   //请求路径
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(VueI18n);
axios.defaults.withCredentials = true;              //axios默认设置不接受cookie
axios.defaults.headers.common['Authorization'] = store.state.token;     //定义全局默认配置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

//----请求头添加token信息
// 添加请求拦截器
axios.interceptors.request.use(config => {
       console.log('请求拦截器')
      // 在发送请求之前做些什么
      //判断是否存在token，如果存在将每个页面header都添加token
      if(store.state.qhsparyToken){
      console.log('请求拦截器-本地-存在token',store.state.qhsparyToken)
      config.headers.common['Authorization']=store.state.qhsparyToken
      }
      console.log('请求拦截器-存在token-请求头添加完成')
      return config;
    }, error => {
      // 对请求错误做些什么
      console.log('请求拦截器-错误')
      return Promise.reject(error);
    });
      
// http response 拦截器
axios.interceptors.response.use(
    response => {
       return response;
    },
    error => {
      if (error.response) {
        // switch (error.response.status) {
        //   case 401:
        //   this.$store.commit('del_token');
        //   router.replace({
        //     path: '/login',
        //     query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
        //   })
        // }
      }
    return Promise.reject(error.response.data)
 });

 // 路由守卫 admin-login
router.beforeEach((to, from, next) => {
  console.log('进入路由守卫')
  //取回变量，刷新后信息依然存在
  const qhsparyToken = store.state.qhsparyToken ? store.state.qhsparyToken : window.sessionStorage.getItem('qhsparyToken');
  //是否需要登录
  if( to.meta.requireAuth){
      //是否勾选10天内自动登录
    if(to.fullPath ==='/admin/home' && window.localStorage.getItem('autoLogin10Days')=='true'){
       console.log('路由守卫-自动登录')
       //判断加校验---token 是否过期
       axios.get('http://localhost:3000/admin/users/checkUser').then((response)=>{
           console.log('验证token-response',response);
           let resp = response.data;
           if(resp.status===0){
             return next();
           }else{
            Vue.prototype.$message({
              showClose: true,
              type: "error",
              message: "身份已过期/token遭到篡改，请重新登录"
           });
           //store.commit('autoLogin10Days', false)
           window.localStorage.setItem('autoLogin10Days',false)
           next({ path: '/admin/login' });
           }
       })                                                                                                                                                                                                                                                                                                               
       .catch(function (error) {
        Vue.prototype.$message({
          showClose: true,
          type: "error",
          message: '身份校验过程出错'
       });
       });   
     }else{
      //不需要自动登录--密码对就完事了
      next();
     }                                                                                                
  }else{
    next();
  }
});