import './ui'
import './permission'

import Vue from 'vue'
import App from './App'
import store from './store';
import router from './route'
import i18n from './lang';

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
