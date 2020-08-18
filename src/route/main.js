module.exports = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/home.vue'),
    meta: {
      title: 'menu.home',
      menu: 'home'
    },
  },
  {
    path: 'user',
    component: () => import('@/view/user.vue'),
    meta: {
      title: 'menu.user',
      menu: '1-user'
    }
  }
]