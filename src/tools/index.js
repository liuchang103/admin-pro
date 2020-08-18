import lang from '@/lang'
import Localstorage from './localstorage';

// 设置标题
export const setTitle = (text) => {
  let title = ''

  if(text) {
    title = lang.t(text) + ' - '
  }

  window.document.title = title + process.env.VUE_APP_NAME
}

// 获取 token
export const token = (token) => {
  return token ? Localstorage.set('token', token) : Localstorage.get('token')
}

// 获取 用户
export const userInfo = (user) => {
  return user ? Localstorage.set('user', user) : Localstorage.get('user')
}

// 登录
export const login = () => {
  
}

// 登出
export const logout = () => {
  Localstorage.del('token')
  Localstorage.del('user')
}