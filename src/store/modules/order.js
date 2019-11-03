import {get} from '../../http/axios'
import moment from 'moment'
export default{
    namespaced:true,
    state: {
      orders:[]
    },
    getters:{
      filterOrderStatus(state){
        return (status)=>{
          return state.orders.filter(order=>order.status === status)
        }
      }
    },
    mutations: {
      refreshOrder(state,orders){
        state.orders = orders;
      }
    },
    actions: {
      async findAllWaiterOrders({commit,rootState}){
        let waiterId = rootState.user.info.id;
        let response = await get ("/order/query",{waiterId});
        response.data.forEach((item)=>{
          item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss')     
        }),
        commit ('refreshOrder',response.data)
      },
      async rejectOrder({dispatch},orderId){
        let response = await get ('/order/rejectOrder',{orderId});
        dispatch("findAllWaiterOrders");
        return response;
      },
      async acceptOrder({dispatch},orderId){
        let response = await get ('/order/takeOrder ',{orderId});
        dispatch("findAllWaiterOrders");
        return response;
      },
      async serviceCompleteOrder({dispatch},orderId){
        let response = await get ('/order/serviceCompleteOrder',{orderId});
        dispatch("findAllWaiterOrders");
        return response;
      }  
    },   
    modules: {
    }
  }