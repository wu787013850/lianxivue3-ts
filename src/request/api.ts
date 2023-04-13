import requset from './index'
import { LoginFormInt } from '../type/login'

//登录接口
export function Login(data:LoginFormInt){
  return requset({
    url:'/login',
    method:'POST',
    data
  })
}
//商品列表接口
export function GetGoodsList(){
  return requset({
    url:'/getGoodsList',
    method:'get'
  })
}
