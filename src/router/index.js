import Vue from 'vue'
import Router from 'vue-router'
//web
import Home from '@/web/Home'
import NavMenu from '@/web/NavMenu'
//web--懒加载
const productCenter = () => import('@/web/product/productCenter')
const productList = () => import('@/web/product/productList')
const productDetial = () => import('@/web/product/productDetial')
const cooperationCase = () => import('@/web/case/cooperationCase')
const caseDetail = () => import('@/web/case/caseDetail')
const newsList = () => import('@/web/news/newsList')
const newsDetail = () => import('@/web/news/newsDetail')
const service = () => import('@/web/service')
const aboutUs = () => import('@/web/aboutUs')
//admin
import adminLogin from '@/admin/login/index'
import adminIndex from '@/admin/layout/layout'
import adminHome from '@/admin/adminHome'
//admin--懒加载
const carousel = () => import('@/admin/home/carousel')

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
      component: adminLogin,
      hidden: true,
     
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      component: adminIndex,
      meta:{
        requireAuth:true,              //进入这个路由之前，判断是否登录
      },
      children: [
        {
          path: 'carousel',
          name: 'carousel',
          component: carousel
        },
          
      ]
    },

  ]
});



