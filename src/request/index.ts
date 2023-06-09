import axios, { Axios, AxiosResponse, AxiosRequestConfig } from 'axios'
declare module "axios" {
  interface AxiosResponse<T = any> {
    error: number;
    msg: string;
    // 这里追加你的参数
    token: string;
    goods: []
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

const request = axios.create({
  baseURL:'http://127.0.0.1:4523/m1/2578980-0-default',
  timeout:5000,
  headers:{
    "Content-Type":'application/json;charest:UTF-8'
  }
})
//请求拦截器
request.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if(localStorage.getItem('token')){
    config.headers.token = localStorage.getItem('token')
  }
  return config;
})

//响应拦截器
request.interceptors.response.use((res)=> {
  const code:number = res.status
  if(code !== 200){
    return Promise.reject(res.data)
  }
  return res.data
},err => {
  console.log(err);
})

export default request