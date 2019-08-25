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
const prodRecom = () => import('@/admin/home/prodRecom')



Vue.use(Router)
let defaultRouter = [
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
    redirect:'/admin/home',
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: adminLogin,
    hidden: true,
   
  },
  {
    path: '/admin/home',
    name: 'adminIndex',
    component: adminIndex,
    meta:{
      requireAuth:true,              //进入这个路由之前，判断是否登录
    },
    children: [
      {
        path: '/',
        name: 'adminHome',
        label:'管理主页',
        component: adminHome
      },
    ]
  },
];

//admin-路由权限
let addRouter = [
  {
    path: '/',
    iconCls: 'el-icon-tickets',         // 图标样式class
    name: carousel,
    component: carousel,
    children: [
      {
        path: '/addArticle',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name:carousel ,
        component: carousel,
        children: []
      },
      {
        path: '/prodRecom',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: prodRecom,
        component: prodRecom,
        children: []
      }
    ]
  },
  {
    path: '/sdss',
    iconCls: 'fa fa-paw', // 图标样式class
    name: carousel,
    component: carousel,
    children: [
      {
        path: '/icon',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name:carousel,
        component: carousel,
        children: []
      }
    ]
  },
 ];

export default new Router({
  routes: defaultRouter
});
export {defaultRouter, addRouter}

 




