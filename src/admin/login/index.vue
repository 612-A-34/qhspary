<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <!--<div class="logo">-->
        <!--<img src="../../assets/logo.png">-->
        <!--</div>-->
      </div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">上海群华涂装设备制造有限公司</p>
          <p class="title">前台: vue + element-ui 网站管理系统</p>
          <el-card  shadow="always" class="login-module" >
            <div slot="header" class="clearfix formTitlt">
              <span>密码登录</span>
              <span class="titIconbox">
               <i class="el-icon-s-custom"></i>
              <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
            </span>
            </div>
            <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入登录账号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="loginForm.password" auto-complete="off"
                          placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="isAutoLogin" @change="autoLogin10">10天内自动登录</el-checkbox>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isAutoLogin:false,
      loginForm: {
        username: 'mengjia11',
        password: '123456'
      }
    }
  },
   mounted() {
    this.message()
  },
  methods: {
    autoLogin10(){
       //判断是否自动登录--需要登录状态存
      let $this = this;
      //取出localstroge 是否登录的状态
      if(this.isAutoLogin){
         $this.$store.commit('autoLogin',true)
         console.log('勾选自动登录')
      }else{
         $this.$store.commit('autoLogin',false)
         console.log('禁止-自动登录')
      }

    },

    //提交用户名密码
    // submitForm () {
    //   let that = this
    // 
    //     // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
    //     that.$store.dispatch('setToken', that.loginForm.username).then(() => {
    //       that.$router.push({path: '/'})
    //     }).catch(res => {
    //       that.$message({
    //         showClose: true,
    //         message: res,
    //         type: 'error'
    //       })
    //     })
    // },
    submitForm () {
      console.log('执行login-ost')
      let $this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        $this.$message({
          showClose: true,
          message: '账号或密码不能为空',
          type: 'error'
        })
        return false
      } else {
       $this .$axios.post($this.BASE_URL+'/admin/users/login',this.loginForm)   //get方法和post方法的区别是get有参数加‘params:’
        .then((response)=>{
            let resp = response.data;
            console.log('this.resp',resp);
            if(resp.status===0){
               $this.$message({
                showClose: true,
                message: '登录成功',
                type:'success'
              })
              //存入
            //  $this.$store.commit('set_token',resp.return.session_id);
              $this.$router.push({path: '/admin/home'});
            }else{
              $this.$message({
                  showClose: true,
                  message: resp.message,
                  type: 'error'
                })
            }
        })                                                                                                                                                                                                                                                                                                               
        .catch(function (error) {
             $this.$message({
                  showClose: true,
                  message: error,
                  type: 'error'
                })
        });
      }

    },

    message() {
      const h = this.$createElement;
      this.$notify({
        title: '账号密码',
        message: h('i', { style: 'color: teal'}, '账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 token'),
        duration: 6000
      });
    },
  },
 
}
</script>
<style lang="scss">
  #login {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    .loginConbox{
      background: #2d3a4b;
    }
    .header {
      height: 60px;
      position: relative;
      background: #2d3a4b;
      /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
      .logo{
        margin-left: 30px;
        width: 500px;
        float: left;
        height: 40px;
        padding-top: 10px;
        img{
          height: 100%;
        }
      }
    }

    .loginBox {
      .iconcolor {
        color: #409EFF;
      }

      padding: 74px 0 118px;

      .loginCon {
        width: 990px;
        margin: auto;
        position: relative;
        height: 388px;

        .el-card__header {
          border-bottom: 0px;
        }
        .title{
          font-size: 36px;
          font-weight: 600;
          color: #ffffff;
          width: 500px;
          float: left;
          margin-top: 0px;
          &:first-child{
            font-size: 34px;
            margin-top: 50px;
            margin-bottom: 30px;
          }
        }
        .login-module {
          width: 380px;
          height: 325px;
          margin-top: 60px;
          border: none;
          position: absolute;
          right: 0;

          .formTitlt {
            font-size: 18px;
            font-weight: 400;
            .titIconbox {
              float: right;
              .pointer {
                cursor: pointer;
              }
            }
          }

          .smalltxt {
            text-align: right;

            .a {
              text-decoration: none;
              color: #999999;
              font-size: 12px;
              margin-left: 8px;
            }
          }
        }

        .el-form-item__content {
          margin-left: 0px !important;

          .subBtn {
            width: 100%;
          }
        }
      }

      .el-input__inner, .el-button, .el-card, .el-message {
        border-radius: 0px !important;
      }

      .el-form-item__content .ico {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        width: 40px;
        height: 39px;
        text-align: center;
        border-right: 1px solid #ccc;
      }

      .ewmbox {
        width: 100%;
        height: 240px;
        margin-top: -25px;

        .ewm {
          width: 140px;
          height: 140px;
          margin: 20px auto;

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }

        .ewmicon {
          width: 140px;
          margin: 20px auto 0;

          .iconfont {
            float: left;
          }

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }
      }
    }
  }
</style>
