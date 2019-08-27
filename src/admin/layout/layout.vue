<template>
<div>
  <div id="layout">
      <!--admin-首页布局-->
      <el-container >
         <layoutAside></layoutAside>
       <el-container direction="vertical">
         <layoutHeader></layoutHeader>
         <el-main id="elmain">
              <transition name="main" mode="out-in">
                <router-view></router-view>
              </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</div>
</template>

<script>
 // import langSelect from '../../components/lang/langSelect'

  import layoutHeader from './header'
  import layoutAside from './aside'
  import {defaultRouter, addRouter} from '@/router/index'

  export default {
    name: 'adminIndex',
    components: {
      layoutHeader,
   //   langSelect,
      layoutAside
    },
    created () {
     // this.$router.push('/index')
         console.log('layout-addRouter',addRouter)
    }
  }
</script>

<style>
  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .main-enter-active {
    transition: all 0.2s;
  }
  .main-leave-active {
    position: absolute;
    transition: all 0.3s;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }
  body {
    background-color: #f2f2f2;
    font-size: 14px;
    color: #333333;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  $leftright: ($left, $right);
  %w100 {
    width: 100%;
  }
  %h100 {
    height: 100%;
  }
  %cursor {
    cursor: pointer;
  }
  html, body, #layout, .el-container, #asideNav, ul.el-menu {
    @extend %h100;
  }
  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }
  #elmain {
    background-color: #f0f2f5;
  }
</style>
