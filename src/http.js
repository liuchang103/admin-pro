import axios from 'axios'
import lang from '@/lang'
import ui from '@/ui';
import app from '@/tools';

// 创建基础配置
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000
});

// 请求拦截器
http.interceptors.request.use(
  // 请求配置
  config => {
    // 进度条显示
    app.loading.start(config.loading)

    // 追加 token
    config.headers['Authorization'] = 'Bearer ' + app.token()

    return config;
  }
);

// 响应拦截器
http.interceptors.response.use(
  // 正常响应
  response => {
    // 取出响应数据
    let data = response.data
    
    // 检测状态码
    if(data.code > 0) {
      // 错误进度条
      app.loading.over(true)

      // 如果未登陆
      if(data.code == 100) {
        // 通知消息
        ui.Notice.error({
          title: lang.t(data.message),
          desc: lang.t('failedloginmessage')
        })

        // 退出登陆
        app.logout()
      }

      return Promise.reject(data)
    }
    
    // 进度条隐藏
    app.loading.over()

    return data;
  }, 

  // 异常响应
  error => {
    // 错误进度条
    app.loading.over(true)

    // 提示错误消息
    ui.Message.error(error.message)
  }
);

export default http