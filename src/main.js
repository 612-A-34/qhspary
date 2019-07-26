// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import store from './store';
import router from './router';
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
axios.defaults.withCredentials = true;              //axios默认设置不接受cookie
axios.defaults.headers.common['Authentication-Token'] = store.state.token;     //定义全局默认配置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// 路由守卫 admin-login
router.beforeEach((to, from, next) => {
  console.log('进入路由守卫')
  //取回变量，刷新后信息依然存在
  const token = store.state.token ? store.state.token : window.sessionStorage.getItem('token');
  //是否需要登录
  if( to.meta.requireAuth){
      console.log('路由守卫，需要登录')
      console.log('to.fullpath',to.fullPath)
      console.log('autoLogin10Days ',window.localStorage.getItem('autoLogin10Days'))
      //是否勾选10天内自动登录
     if(to.fullPath ==='/admin/home' && window.localStorage.getItem('autoLogin10Days')=='true'){
       console.log('路由守卫-自动登录')
       //判断加校验---token 是否过期

     }
    console.log('11223')                                                                                                 
  }else{
    next();
  }
});

//----请求头添加token信息
// 添加请求拦截器
axios.interceptors.request.use(config => {
      // 在发送请求之前做些什么
      //判断是否存在token，如果存在将每个页面header都添加token
      if(store.state.token){
      config.headers.common['Authentication-Token']=store.state.token
      }
      return config;
    }, error => {
      // 对请求错误做些什么
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
