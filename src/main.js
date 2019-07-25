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
})


