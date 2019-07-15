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

Vue.config.productionTip = false               //
Vue.prototype.BASE_URL = 'http://localhost:3000';   //请求路径
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
axios.defaults.withCredentials = true;           //axios默认设置不接受cookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


