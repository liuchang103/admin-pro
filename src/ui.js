import Vue from 'vue'

// UI 组件
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI);

// 格式化CSS
import 'normalize.css/normalize.css'

// 自定义CSS
import '@/style/app.less'

// router 进度条显示
import router from './route'
import { setTitle } from './tools'

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  setTitle(to.meta.title)
  next();
});
router.afterEach(() => {
  ViewUI.LoadingBar.finish();
});

// http 进度条显示
import http from './http'

http.interceptors.request.use(config => {
  ViewUI.LoadingBar.start();
  return config;
});

http.interceptors.response.use(res =>{
  ViewUI.LoadingBar.finish();
  return res;
}, error => {
  ViewUI.LoadingBar.error();
  return Promise.reject(error);
});