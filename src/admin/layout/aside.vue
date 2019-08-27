<template>
  <div>
    <el-aside id="asideNav">
      <div class="logo-name">
        <!-- <p v-if="$store.getters.logoShow">XU</p>
        <p v-else>vue-xuAdmin后台模板</p> -->
        <p >群华涂装后台管理系统</p>
      </div>
      <el-menu  background-color="#03152A"  text-color="rgba(255,255,255,.7)"  active-text-color="#ffffff"
                    class="el-menu-vertical"
                    @select="selectmenu"
                    :collapse="$store.getters.isCollapse"
                    :default-active="$route.path" 
                    :router="$store.getters.uniquerouter"
                    :unique-opened="$store.getters.uniquerouter"
                    :collapse-transition="true" >
        <template v-for="(item,index) in $store.getters.addRouters" v-if="!item.hidden">
          <!--还有子菜单-->
          <!-- <el-submenu v-if="!item.alone && item.children.length>0" :index="index+''"> -->
          <el-submenu v-if="item.children.length>0" :index="index+''">
            <template slot="title">
              <i :class="item.iconCls?item.iconCls:[fa,fa-server]"></i>
              <!-- <span slot="title">{{ $t(`routeNmae.${item.name}`) }}</span> -->
              <span slot="title">{{ item.label}}</span>
            </template>      
             <!--递归递归-->
             <menu-tree :menuData="item.children"></menu-tree>
           </el-submenu>

           <!--最后一级菜单-->
          <el-menu-item :index="item.path" v-else>
            <i :class="item.iconCls?item.iconCls:[fa,fa-file]"></i>
            <!-- <span slot="title">{{ $t(`routeNmae.${item.name}`) }}</span> -->
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
        </template>
      </el-menu>

    </el-aside>
  </div>
</template>

<script>
 import menuTree from './menuTree'
  export default {
    name: 'adminAsideNav',
    components: {
      menuTree,
    },
    data(){
      return{
       
      }
    },
    watch: {
      // 监听浏览器直接输入路由，将此路由添加到tabnavBox--
      '$route.path': function (val) {
        this.selectmenu(val)
      }
    },
    mounted(){
       this.selectmenu(this.$route.path)
    },
    methods: {
      selectmenu (key) {
        let router = this.$store.getters.addRouters
        let name = ''
        let navTitle = function (path, routerARR) {                    //函数表达式-立即执行
          for (let i = 0; i < routerARR.length; i++) {
            if (routerARR[i].children.length > 0 || routerARR[i].path === path) {
              if (routerARR[i].path === path && routerARR[i].children.length < 1) {
                name = routerARR[i].label
                break
              }
              navTitle(path, routerARR[i].children)
            }
          }
          return name
        }
        this.$store.dispatch('addTab', {
          title: navTitle(key, router),
          path: key
        })
      },
    }
  }
</script>

<style lang="scss">
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  %w100 {
    width: 100%;
  }
  %h100 {
    height: 100%;
  }
  %cursor {
    cursor: pointer;
  }

  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }

  #asideNav {
    @extend %h100;
    width: auto !important;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e6e6e6;
    .logo-name {
      background-color: #03152A !important;
      @extend %w100;
      font-weight: 300;
      z-index: 999;
      p {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #5e6d82;
      }
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
      @extend %h100;
      overflow-y: scroll;
    }
    .el-menu {
      flex: 1;
      overflow: inherit;
      border-right: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .fa {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
      }
      .el-menu-item {
        background-color: #020f1d !important;
        border-bottom: 1px solid #020f1d;
        &:hover {
          color: #ffffff !important;
          background-color: #375573 !important;
        }
      }
      .el-menu-item.is-active {
        background-color: #56a9ff !important
      }
      .is-opened > .el-submenu__title > .el-icon-arrow-down {
        color: #ffffff;
        font-weight: 500;
        font-size: 18px;
      }
    }

  }




























</style>
