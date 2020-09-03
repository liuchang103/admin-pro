export default {
  set(name, value) {
    window.localStorage.setItem(name, typeof value == 'object' ? JSON.stringify(value) : value )
  },

  get(name) {
    let value = window.localStorage.getItem(name)
    if(!value) return value
    
    return value.startsWith('{') || value.startsWith('[') ? JSON.parse(value) : value
  },

  del(name) {
    window.localStorage.removeItem(name)
  }
}