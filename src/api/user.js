import http from '@/http'

export function auth(data) {
  return http.post('/auth', data)
}

export function info() {
  // 出现窗体 loading
  return http.get('/info', {
    loading: true
  })
}