import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path:'/',
    name:'home',
    component:() => Home
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