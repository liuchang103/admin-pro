import LocalStorage from './localstorage'

export default {
  set(arr) {
    return LocalStorage.set('permission', arr)
  },
  get() {
    return LocalStorage.get('permission')
  },
  // 验证权限
  can(name) {
    // 权限
    const permission = this.get() || ['*']
    
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
  }
} 