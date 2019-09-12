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
const productsManage = () => import('@/admin/products/productsManage')
const proSortManage = () => import('@/admin/products/proSortManage')



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
        children:[],             //最好是配合子组件的时候再用
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
  // {      
  //   path: '/admin',
  //   redirect:'/admin/home',   //重定向使路由守卫失效
  // }, 
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: adminLogin,
    hidden: true,
  },
  {
    path: '/admin',
    name: 'adminIndex',
    component: adminIndex,
    meta:{
      requireAuth:true,              //进入这个路由之前，判断是否登录
    },
    children: [
      {
        path: '/admin/home',
        name: 'adminHome',
        label:'管理主页',
        component: adminHome,
        meta: {role: ['superAdmin']},
        children:[]
      },
      {
        path: '/admin/homeManage',
        iconCls: 'el-icon-tickets',         // 图标样式class
        name: carousel,
        label:'首页管理',
        component: carousel,
        meta: {role: ['superAdmin']},
        children: [
          {
            path: '/admin/homeManage/carousel',
            iconCls: 'el-icon-edit-outline', // 图标样式class
            label:'轮播图管理',
            name:carousel ,
            component: carousel,
            meta: {role: ['superAdmin']},
            children: []
          },
          {
            path: '/admin/homeManage/prodRecom',
            iconCls: 'el-icon-edit-outline', // 图标样式class
            label:'推荐产品管理',
            name: prodRecom,
            component: prodRecom,
            meta: {role: ['superAdmin']},
            children:[]
          }
        ]
      },
      {
        path: '/admin/productManage',
        iconCls: 'fa fa-paw',            // 图标样式class
        label:'产品管理',
        name: productsManage,
        component: productsManage,
        meta: {role: ['superAdmin']},
        children: [
          {
            path: '/admin/productsManage/product',
            iconCls: 'fa fa-life-ring', // 图标样式class
            label:'产品详情管理',
            name:productsManage,
            component: productsManage,
            meta: {role: ['superAdmin']},
            children: []
          },
          {
            path: '/admin/productManage/proSortManage',
            iconCls: 'fa fa-life-ring', // 图标样式class
            label:'产品分类管理',
            name:proSortManage,
            component: proSortManage,
            meta: {role: ['superAdmin']},
            children: []
          },
        ]
      },
      {
        path: '/admin/ssss',
        iconCls: 'fa fa-paw',            // 图标样式class
        label:'新闻管理',
        name: carousel,
        component: carousel,
        meta: {role: ['superAdmin']},
        children: [
          {
            path: '/admin/icon',
            iconCls: 'fa fa-life-ring', // 图标样式class
            label:'行业新闻管理',
            name:carousel,
            component: carousel,
            meta: {role: ['superAdmin']},
            children: []
          },
          {
            path: '/admin/icon',
            iconCls: 'fa fa-life-ring', // 图标样式class
            label:'公司新闻管理',
            name:carousel,
            component: carousel,
            meta: {role: ['superAdmin']},
            children: []
          }
        ]
      },
      {
        path: '/admin/jjhjj',
        iconCls: 'fa fa-paw',            // 图标样式class
        label:'用户管理',
        name: carousel,
        component: carousel,
        meta: {role: ['superAdmin']},
        children: [],
      },
    ]
  },
];

//admin-路由权限
let addRouter = defaultRouter[2].children;

export default new Router({
  routes: defaultRouter
});
export {defaultRouter, addRouter}

 




