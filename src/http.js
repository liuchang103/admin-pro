import axios from 'axios'

// 创建基础配置
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000
});

export default http