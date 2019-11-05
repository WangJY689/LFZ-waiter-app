<template>
  <div class="login">
    <img src="../assets/image/0.jpg" alt="图片丢了" style="width:100%"> 
    <div id="content">
      <van-cell-group>
        <van-field
          v-model="form.username"
          clearable
          label="用户名"
          left-icon="user-o"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          left-icon="closed-eye"
          placeholder="请输入密码"
          
        />
      </van-cell-group> 
      <div id="paddword">
        <van-checkbox v-model="checked" style="font-size:16px;" shape="square">记住密码</van-checkbox>
        <a href="#">忘记密码？</a>
      </div>
      <van-button type="primary" size="large" @click="loginHandler" style="height:40px;line-height:40px;">登录</van-button>
      <div style="text-align: center;color:#777;">
      </div>
      <div style="margin-top:1.5em;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifubao"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      form:{
        type:'waiter'
      },
      checked: false
    }
  },
  created() {

  },
  computed: {
    
  },
  methods:{
    //突变
    //动作
    ...mapActions("user",["login"]),
    //普通方法
    //1.登录按钮
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
  #content {
    padding: 3em 2em;
  }
  #paddword {
    display: flex;
    margin: 1em 0;
  }
  #paddword a {
   margin-left: 100px;
   text-align: center;
  }
</style>