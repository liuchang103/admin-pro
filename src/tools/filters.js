import Vue from 'vue'
import app from './index'

// url 过滤器
Vue.filter('url', function (value) {
  return app.url(value)
})