import lang from '@/lang'
import Localstorage from './localstorage';
import Route from '@/route'

// 设置标题
export const setTitle = (text) => {
  let title = ''

  if(text) {
    title = lang.t(text) + ' - '
  }

  window.document.title = title + process.env.VUE_APP_NAME
}

// 获取 token
export const token = () => {
  return Localstorage.get('token')
}

// 获取 用户
export const userInfo = () => {
  return Localstorage.get('user')
}

// 登录
export const login = (token, user) => {
  Localstorage.set('user', user)
  Localstorage.set('token', token)
  
  Route.push({ name: 'home' })
}

// 登出
export const logout = () => {
  Localstorage.del('token')
  Localstorage.del('user')

  Route.push({ name: 'login' })
}