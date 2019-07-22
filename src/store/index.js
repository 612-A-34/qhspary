import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex);

//创建vuex实例
const store = new Vuex.Store({
    state: {       //唯一的数据源
      count: 8,
      loginName:'孟小佳',
    },
    mutations: {   //改变数据源-方法
      increment (state) {
        state.count++
      }
    }
  })

export default store //导出store

