import Vue from 'vue'
import { url } from './index'

// url 过滤器
Vue.filter('url', function (value) {
  return url(value)
})