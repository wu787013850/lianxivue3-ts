import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    name:'home',
    component:() => import('../views/Home.vue'),
    children:[
      {
        path:"goods",
        component:() => import('../views/Goods.vue'),
        meta:{
          isShow:true,
          title:'商品列表'
        }
      },
      {
        path:"user",
        component:() => import('../views/User.vue'),
        meta:{
          isShow:true,
          title:'用户列表'
        }
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/Login.vue')
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router