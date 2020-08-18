import axios from 'axios'
import ui from './ui'
import { token } from '@/tools';

// 创建基础配置
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000
});

// 请求拦截器
http.interceptors.request.use(
  // 请求配置
  config => {
    ui.LoadingBar.start();

    // 追加 token
    config.headers['Authorization'] = 'Bearer ' + token()

    return config;
  }
);

// 响应拦截器
http.interceptors.response.use(res =>{
  ui.LoadingBar.finish();
  return res;
}, error => {
  ui.LoadingBar.error();
  return Promise.reject(error);
});

export default http