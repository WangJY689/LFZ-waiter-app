import {get,post_json,post} from '../../http/axios'
import {getToken,setToken,removeToken} from '../../utils/auth'
export default{
    namespaced:true,
    state: {
        token:getToken(),//将token缓存起来
        info:{}//用户信息
    },
    mutations: {
        refreshInfo(state,info){
            state.info = info;
        },
        refreshToken(state,token){
            state.token=token;
        }
    },
    actions: {
        async login(context,payload){
            //1.登录
            let response =await post_json("/user/login",payload)
            let token = response.data.token;
            //通过token获取用户基本信息
            setToken(token)
            //2.将token缓存起来 localStorage
            context.commit("refreshToken",token)
            //3.将token维护到状态机中
        },
        //通过token获取info
        async info(context,token){
            let response = await get ("/user/info",{token});
            //将token缓存起来   cookie、sessionStorage、localStorage
            //将用户信息设置到info中
            context.commit("refreshInfo",response.data)
        },  
        // 退出
        async logout(context){
            //1.请求后台退出
            await post('/user/logout');
            //2.清理本地缓存
            removeToken();
            //3.清理store
            await context.commit('refreshToken','');
            await context.commit('refreshInfo',{});

        }
    }
  }
