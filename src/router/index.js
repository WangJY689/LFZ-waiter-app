import Vue from 'vue'
import VueRouter from 'vue-router'
import { Field } from 'vant';
//管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
//登录页面
import Login from '../views/Login'





Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    path: '/',
    name: 'manager',
    component: Manager,
    children:[{       
      path:'home',
      component:Home,
    },
    {
      path:'order',
      component:Order,
    },
    {
      path:'user',
      component:User,
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = new VueRouter({
  routes,
  mode:'history', 
})

export default router
