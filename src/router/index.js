import Vue from 'vue'
import Router from 'vue-router'
//web
import Home from '@/components/Home'
import NavMenu from '@/components/NavMenu'
import service from '@/components/web/service'
import productCenter from '@/components/web/product/productCenter'
import productList from '@/components/web/product/productList'
import productDetial from '@/components/web/product/productDetial'
import cooperationCase from '@/components/web/case/cooperationCase'
import caseDetail from '@/components/web/case/caseDetail'
import newsList from '@/components/web/news/newsList'
import newsDetail from '@/components/web/news/newsDetail'
import aboutUs from '@/components/web/aboutUs'
//admin
import adminLogin from '@/components/admin/login/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavMemu',
      component: NavMenu,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {  
          path: 'productCenter',
          name: 'productCenter',
          component: productCenter,
          meta: {
            isRoot: true
          },
          children:[ ],             //最好是配合子组件的时候再用
        },
        {
          path: 'productCenter/productList/:productSort',
          name: 'productList',
          component: productList,
          props: true,
        },
        {
          path: 'productList/productDetial/:productId',
          name: 'productDetial',
          component: productDetial
        },
        {
          path: '/service',
          name: 'service',
          component: service
        },
        { //合作案例
          path: '/cooperationCase',
          name: 'cooperationCase',
          component: cooperationCase
        },
        {
          path: '/cooperationCase/caseDetail',
          name: 'caseDetail',
          component: caseDetail
        },
        {
          path: '/newsList',
          name: 'newsList',
          component: newsList
        },
        {
          path: '/newsDetail',
          name: 'newsDetail',
          component: newsDetail
        },
        {
          path: '/aboutUs',
          name: 'aboutUs',
          component: aboutUs
        },
      ]
    },
    //admin
    {
      path: '/admin',
      name: 'adminLogin',
      component: adminLogin,
      children: [
        {
          path: '/admin/login',
          name: 'adminLogin',
          component: adminLogin
        },
        {
          path: '/productCenter',
          name: 'productCenter',
          component: productCenter
        },
      ]
    },

  ]
})
