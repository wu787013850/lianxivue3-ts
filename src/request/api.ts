import requset from './index'
import { LoginFormInt } from '../type/login'

export function Login(data:LoginFormInt){
  return requset({
    url:'/login',
    method:'POST',
    data
  })
}