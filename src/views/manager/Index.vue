<template>
    <div class="manager">
        <!-- 用于接收首页、订单 我的页面-->
        <router-view></router-view>

        <van-tabbar v-model="active" @change="tabChangeHandler">
        <van-tabbar-item name="/home"  icon="search">首页</van-tabbar-item>
        <van-tabbar-item name="/order" icon="setting-o">订单</van-tabbar-item>
        <van-tabbar-item name="/user"  icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
 export default{
     created(){
         if(this.token){
             //查询info
             this.getInfo(this.token);
         }else{
             this.$toast("用户不存在")
             //跳转登录
             this.$router.push({path:'/login'})
         }
     },
     computed:{
         ...mapState('user',['token','info'])
     },
    data(){
        return{
            active:0
        }
    },
    methods:{
        ...mapActions('user',{
            'getInfo':'info'
        }),
        tabChangeHandler(path){
            this.$router.push({path})
        }
        

    }
}
</script>