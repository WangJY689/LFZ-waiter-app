<template>
    <div class="user">
        <div class="nav">       
          <van-row>
            <div style="line-height:3em">我的</div><br>
            <div class="image">
              <van-image
              round
              fit="cover"
              width="7rem"
              height="7rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            </div>
          </van-row>  
        </div> 
        <div class="body">
          <van-cell is-link ><van-icon name="diamond-o" style="margin-bottom:2em" />我的收入</van-cell>
          <van-cell is-link ><van-icon name="orders-o" />我的订单</van-cell>
        </div>
       <div class="btn">
          <van-button class="btn_exit" type="warning" @click="logoutHandler" size="large">退出</van-button>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions } from 'vuex'
export default {
  methods:{
    ...mapActions('user',['logout']),
    logoutHandler(){
      this.logout()//退出
      .then(()=>{
        this.$router.push({path:'/login'})
      })   
    }
  },
   computed:{
    ...mapState("user",["info"])
  }
}
</script>
<style scoped>
  .user .nav{
    height:240px;
    color: #ededed;
    font-size: 20px;
    text-align: center;
    margin:0 auto;
    background-color:blue;
  }
  .image{
    margin: 0 auto;
    text-align: center
  }
  .body{
    margin-top: 2em;
    font-size: 18px;
    border-bottom: 1px solid #ededed;
  }
  .user {
    height: 550px;
    position: relative;
  }
  .btn {
    text-align:center;
    position: absolute;
    bottom: 0;
    width: 75%;
    margin-left: 40px;
  }
</style>