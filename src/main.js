// 引入 Ui
import './ui'

import Vue from 'vue'
import App from './App'
import router from './route'
import i18n from './lang';

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
