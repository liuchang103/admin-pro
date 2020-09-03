import http from '@/http'

export function list() {
  // 出现窗体 loading
  return http.get('/list.json', {
    loading: true
  })
}

export function create() {
  // 出现窗体 loading
  return http.get('/create.json')
}