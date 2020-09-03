import lang from '@/lang'
import route from '@/route'
import storage from './storage'
import loading from './loading'

// Vue依赖
import './filters'
import './directive'

export default {
  // 初始化
  run() {
    // 设置程序默认语言
    this.langDefault()
  },

  // 进入后台首页
  home() {
    route.push({ name: 'home' })
  },
  
  // 设置or 获取
  token(token) {
    return token ? this.storage.set('token', token) : this.storage.get('token')
  },

  // 登陆
  login(user, permission = ['*']) {
    this.storage.set('user', user)
    this.storage.set('permission', permission)
    this.home()
  },

  // 登出
  logout() {
    this.storage.del('token')
    this.storage.del('user')
    
    route.push({ name: 'login' })
  },

  // 获取用户
  user() {
    return this.storage.get('user')
  },

  // 获取权限
  permission() {
    return this.storage.get('permission')
  },
  
  // 验证权限
  can(name) {
    // 权限
    const permission = this.permission() || ['*']
    
    // 转为数组
    if(typeof name == 'string') {
      name = [ name ]
    }

    // 检查超级权限
    if(permission.includes('*')) {
      return true
    }

    // 检查多个权限
    return name.some(item => {
      return permission.includes(item)
    })
  },

  // url 地址
  url(path) {
    return process.env.VUE_APP_URL + path
  },

  // 设置标题
  title(text) {
    let title = ''
  
    if(text) {
      title = lang.t(text) + ' - '
    }
  
    window.document.title = title + process.env.VUE_APP_NAME
  },

  // 设置语言
  lang(name) {
    lang.locale = name
    this.storage.set('lang', name)
  },

  // 默认语言
  langDefault() {
    const name = this.storage.get('lang')
    if(name) {
      this.lang(name)
    }
  },

  // 进度条
  loading,

  // 存储
  storage
}