<template>
    <div class="user">
        <div class="nav">
         <van-nav-bar title="我的"/>
        </div>
        <van-row>
          <van-col span="8"></van-col>
          <van-col span="8"><van-image
            round
            fit="cover"
            width="7rem"
            height="7rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          /></van-col>
          <van-col span="8"></van-col>
        </van-row>   
        <div class="body">
          <van-cell is-link >我的收入</van-cell>
          <van-cell is-link >我的订单</van-cell>
          <van-cell is-link  @click.prevent=" logoutHandler">退出</van-cell>
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

</style>