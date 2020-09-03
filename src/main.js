// 基础
import './ui'
import './permission'

// 全家桶
import Vue from 'vue'
import App from './App'
import store from './store';
import router from './route'
import i18n from './lang';

// 工具
import app from '@/tools'

// 初始化
app.run()

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
