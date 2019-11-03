<template>
    <div class="login">
      <div class="header">
        <div class="logo">JZ </div>
         <div class="title">家政服务平台——员工端</div>
      </div>
      <div class="form">
              <van-cell-group>
                <van-field v-model="form.username"
                  required
                  clearable
                  label="用户名"
                  icon="question-o"
                  placeholder="请输入用户名"
                />
                <van-field v-model="form.password"
                  type="password"
                  label="密码"
                  placeholder="请输入密码"
                  required
                />
              </van-cell-group>
              <div style="text-align:center">
                <van-button icon="https://img.yzcdn.cn/vant/logo.png" 
                type="info" @click="loginHandler" style="margin-top:4em">登录</van-button>
              </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      form:{
        type:'waiter'
      }
    }
  },
  methods:{
    ...mapActions("user",["login"]),
    loginHandler(){
        this.login(this.form)
        .then(()=>{
          //跳转到首页
          this.$router.push({path:'/home'})
        })
      }
    }
  }
</script>
<style>
.header {
  height: 140px;
  padding:50px;
  color:#ffffff;
  background-color:darkorchid;
  text-align: center
}
.header .logo {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  border:1px solid #efefef;
  margin: 0 auto;
  color:#efefef;
  font-weight: bold;
  margin-bottom: 1em;
}
.header .title {
font-size: 12px;
text-align: center;
}
.form{
  width: 100%;
  height:2em;
  margin-top: 5em;
  margin-bottom: 2em

}
</style>