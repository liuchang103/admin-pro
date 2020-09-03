import Vue from 'vue'
import app from './index'

// 检查权限
Vue.directive('permission', {
  inserted (el, binding) {
    // 检查权限
    if(!app.can(binding.value)) {
      el.remove()
    }
  }
})