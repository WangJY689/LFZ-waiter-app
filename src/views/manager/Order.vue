<template>
    <div class="order">
      <div class="nav">
          <van-nav-bar title="订单"/>
      </div>
      <div class="title">
        <van-tabs v-model="active">
          <van-tab title="所有订单" >
            <van-row v-if="orders.length !==0">
                <van-panel v-for="o in orders" :key="o.id" :title="o.customer.realname" :status="o.status">
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
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="logistics"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                    </van-row>
                </van-panel>
            </van-row>
          </van-tab>

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
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="logistics"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                    </van-row>
                    <div slot="footer">
                      <van-row v-if="o.status==='待接单'" >  
                      <van-button size="small" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="jujue(o.id)" style="margin-riht:3em" >拒绝</van-button>
                      <van-button size="small" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="jieshou(o.id)">接收</van-button>
                    </van-row>
                    </div>
                </van-panel>
            </van-row>
          </van-tab>

          <van-tab title="已接订单">
            <van-row v-if="filterOrderStatus('待服务').length !==0">
                <van-panel v-for="o in filterOrderStatus('待服务')" :key="o.id" :title="o.customer.realname" :status="o.status">
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
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="logistics"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                    </van-row>
                </van-panel>
            </van-row>
          </van-tab>

          <van-tab title="待确认">
            <van-row v-if="filterOrderStatus('待确认').length !==0">
                <van-panel v-for="o in filterOrderStatus('待确认')" :key="o.id" :title="o.customer.realname" :status="o.status">
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
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="logistics"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                    </van-row>
                    <div slot="footer">
                      <van-row v-if="o.status==='待确认'" >  
                        <van-button size="small" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="wancheng(o.id)">完成</van-button>
                    </van-row>
                    </div>
                </van-panel>
            </van-row>
          </van-tab>

          <van-tab title="完成订单">
            <van-row v-if="filterOrderStatus('已完成').length !==0">
                <van-panel v-for="o in filterOrderStatus('已完成')" :key="o.id" :title="o.customer.realname" :status="o.status">
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
                        <van-col :span="4" style="text-align:center">
                          <van-icon name="logistics"></van-icon>
                        </van-col>
                        <van-col :span="20" style="font-size:14px">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                    </van-row>
                </van-panel>
            </van-row>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters,} from 'vuex'
export default {
  data(){
    return{
      active:'所有订单'
    }
  },
  created(){
    this.findAllWaiterOrders();
  },
  computed:{
    ...mapState("order",["orders"]),
    ...mapGetters("order",["filterOrderStatus"]),
  },
  methods: {
    ...mapActions("order",["findAllWaiterOrders","rejectOrder","acceptOrder","serviceCompleteOrder"]),
   jujue(orderId){
     this.$emit('reject',orderId);
     this.rejectOrder(orderId)
     .then((response)=>{
       this.$toast(response.statusText);
     })
   },
    jieshou(orderId){
     this.$emit('reject',orderId);
     this.acceptOrder(orderId)
     .then((response)=>{
       this.$toast(response.statusText);
     })
   },
    wancheng(orderId){
     this.$emit('reject',orderId);
     this.serviceCompleteOrder(orderId)
     .then((response)=>{
       this.$toast(response.statusText);
     })
   },


  }
}
</script>