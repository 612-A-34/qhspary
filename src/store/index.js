import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex);

//创建vuex实例
const store = new Vuex.Store({
    state: {
      count: 8
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

export default store //导出store

