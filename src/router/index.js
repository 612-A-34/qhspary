import Vue from 'vue'
import Router from 'vue-router'
//web
import Home from '@/web/Home'
import NavMenu from '@/web/NavMenu'
import service from '@/web/service'
import productCenter from '@/web/product/productCenter'
import productList from '@/web/product/productList'
import productDetial from '@/web/product/productDetial'
import cooperationCase from '@/web/case/cooperationCase'
import caseDetail from '@/web/case/caseDetail'
import newsList from '@/web/news/newsList'
import newsDetail from '@/web/news/newsDetail'
import aboutUs from '@/web/aboutUs'
//admin
import adminLogin from '@/admin/login/index'
import adminIndex from '@/admin/layout/layout'
import adminHome from '@/admin/adminHome'



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
          path: 'productCenter/productDetial/:productSort/:productId',
          name: 'productDetial',
          component: productDetial,
          props: true,
        },
        {
          
          path: 'service',
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
      redirect:'/admin/login',
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: adminLogin
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      component: adminIndex,
      children: [
        {
          path: '',
          name: 'adminHome',
          component: adminHome
        },
          
      ]
    },

  ]
})
