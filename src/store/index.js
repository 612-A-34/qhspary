import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex);

//创建vuex实例
const store = new Vuex.Store({
    state: {                                            //唯一的数据源
      count: 8,
      loginName:'孟小佳',
      autoLogin10Days:window.sessionStorage.getItem('autoLogin10Days'),
      user:window.sessionStorage.getItem('user'),
      qhsparyToken:window.sessionStorage.getItem('token'),
      userImage:window.sessionStorage.getItem('userImage'),
    },
    mutations: {                                       //改变数据源-方法
      increment (state) {
        state.count++
      },
      //用户信息临时存储
      set_token(state,data){                             //state中的全部数据
        state.qhsparyToken = data;
        window.sessionStorage.setItem('qhsparyToken',data);    //临时存储--刷新保留--窗口关闭消失
                                                               //localstroage和session都是存储键值对
        console.log('store-set_token',window.sessionStorage.qhsparyToken)
      },
      set_user(state,data){
        state.user = data;
        window.sessionStorage.setItem('user',data);
      },
      set_userImage(state,data){
        state.userImage = data;
        window.sessionStorage.setItem('userImage',data);
      },
      //自动登录，localstorage
      autoLogin(state,value){          
        state.autoLogin10Days = value;
        if(state.autoLogin10Days){
          console.log('store-自动登录',state.autoLogin10Days)
          window.localStorage.setItem('qhsparyToken',state.token);
          window.localStorage.setItem('user',state.user);
          window.localStorage.setItem('userImage',state.userImage);
          window.localStorage.setItem('autoLogin10Days',state.autoLogin10Days);
        }else{
          window.localStorage.removeItem('qhsparyToken');                        //不选择自动登录就移除本地
          window.localStorage.removeItem('user');
          window.localStorage.setItem('autoLogin10Days',state.autoLogin10Days);
          
        }
      },
      //登出
      autoLogout(state,value){
        state.token = null;                                  //置空
        state.user = null;     
        state.autoLogin10Days = false;     
        window.localStorage.removeItem('token');             //并把本地数据移除
        window.localStorage.removeItem('user');
        window.localStorage.setItem('autoLogin10Days',false);
      },
    }
  })

export default store //导出store
