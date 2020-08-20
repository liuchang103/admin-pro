import http from '@/http'

export function auth(data) {
  return http.post('/auth', data)
}