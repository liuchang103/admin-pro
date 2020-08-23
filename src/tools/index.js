import lang from '@/lang'
import Localstorage from './localstorage';
import Route from '@/route'
import ui from '@/ui';
import store from '@/store'

// 设置标题
export const setTitle = (text) => {
  let title = ''

  if(text) {
    title = lang.t(text) + ' - '
  }

  window.document.title = title + process.env.VUE_APP_NAME
}

// 获取 token or 设置 token
export const token = (token) => {
  return token ? Localstorage.set('token', token) : Localstorage.get('token')
}

// 获取 用户
export const userInfo = () => {
  return Localstorage.get('user')
}

// 登录
export const login = (user) => {
  Localstorage.set('user', user)
  
  Route.push({ name: 'home' })
}

// 登出
export const logout = () => {
  Localstorage.del('token')
  Localstorage.del('user')

  Route.push({ name: 'login' })
}

// 加载中，loading 为 true 将出现窗体 Loading
export const loading = (loading = false) => {
  ui.LoadingBar.start()
  return loading ? store.commit('app/loading', true) : false;
}

// 加载完成，error 为 true 将出现红色进度条
export const loadingOver = (error = false) => {
  store.commit('app/loading', false)
  return error ? ui.LoadingBar.error() : ui.LoadingBar.finish()
}

// url 地址
export const url = (path) => {
  return process.env.VUE_APP_URL + path
}