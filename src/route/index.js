import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入窗体
import Main from '@/main/index'

// 路由
const routes = [
  // 窗体
  {
    path: '/main',
    component: Main,
    meta: {
      title: 'menu.main',
    },
    children: require('./main')
  },
  // 404
  {
    path: '*',
    component: () => import('@/main/404.vue'),
    meta: {
      white: true
    }
  },
  // 登陆页
  {
    path: '/',
    name: 'login',
    component: () => import('@/main/login.vue'),
    meta: {
      white: true
    }
  }
]

// 载入路由
const router = new VueRouter({ routes })

export default router