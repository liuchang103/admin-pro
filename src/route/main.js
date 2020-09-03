module.exports = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/home'),
    meta: {
      title: 'menu.home',
      menu: 'home'
    },
  },
  {
    path: 'user',
    component: () => import('@/view/user'),
    meta: {
      title: 'menu.user',
      menu: '1-user',
      permission: 'user'
    }
  }
]