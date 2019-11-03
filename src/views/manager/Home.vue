<template>
    <div class="manager">
    <!-- <div class="title"><h1>家政服务-员工平台</h1></div> -->
    <div class="heade">
     <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
        <van-swipe-item><img src="../../assets/image/1.jpg" width="100%" height="220px"></van-swipe-item>
        <van-swipe-item><img src="../../assets/image/4.jpg" width="100%" height="220px"></van-swipe-item>
        <van-swipe-item><img src="../../assets/image/3.jpg" width="100%" height="220px"></van-swipe-item>
        <van-swipe-item><img src="../../assets/image/4.jpg" width="100%" height="220px"></van-swipe-item>
     </van-swipe>
    </div>
    <div class="body">
        <table>
            <tbody>
            <tr>
                <td>
                     <van-icon name="friends-o" size="40px"/>
                    <p>专业保洁</p>
                </td>
                <td>
                     <van-icon name="friends-o" size="40px"/>
                    <p>家居养护</p>
                </td>
                <td>
                     <van-icon name="friends-o" size="40px"/>
                    <p>家庭维修</p>
                </td>
            </tr>
               <tr>
                <td>
                    <van-icon name="friends-o" size="40px"/>
                    <p>洗护服务</p>
                </td>
                <td>
                    <van-icon name="friends-o" size="40px"/>
                    <p>生活急救箱</p>
                </td>
                <td>
                    <van-icon name="friends-o" size="40px"/>
                    <p>洗护</p>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
            <van-tabs v-model="active">
                <van-tab title="未接订单">
              <van-row v-if="filterOrderStatus('待接单').length !==0">
                <van-panel v-for="o in filterOrderStatus('待接单')" :key="o.id" :title="o.customer.realname" :status="o.status">
                    <van-row>
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="gold-coin-o"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">总额：{{o.total}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="notes-o"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">下单时间：{{o.orderTime}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="user-circle-o"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">服务内容：{{}}</van-col>
                    </van-row>
                     <van-row>
                        <van-col :span="4">
                          <van-icon name="logistics"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                    </van-row>
                    <div slot="footer">
                      <van-row v-if="o.status==='待接单'" >  
                      <van-button type="red" @click="jujue(o.id)">拒绝</van-button>
                      <van-button type="primary" @click="jieshou(o.id)">接收</van-button>
                    </van-row>
                    </div>
                </van-panel>
            </van-row>
          </van-tab>
            </van-tabs>
        </div>
    </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            active:'未接订单'
        }
    },
    computed:{
         ...mapGetters("order",["filterOrderStatus"]),
    }
}
</script>

<style>
.lunbo{
    width:100%;
    height:220px;
    background-color: aqua;
}
table{
    width:100%;
    height:200px;
    text-align: center;
    margin-top: 10px;
}
table>tr{
    height: 30px;
}
table>tr>td>p{
    margin: 0;
    padding: 0;
}

</style>