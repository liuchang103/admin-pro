import router from './route'
import app from '@/tools'

// 权限验证
router.beforeEach((to, from, next) => {
  // 进度条
  app.loading.start(true)

  // 设置标题
  app.title(to.meta.title)

  // 检查白名单和权限
  if(!to.meta.white && !app.token()) {
    // 关闭进度条
    app.loading.over()
    // 退出登陆
    return app.logout()
  }

  // 检查权限
  if(to.meta.permission && !app.can(to.meta.permission)) {
    return next('/404')
  }

  next()
});

router.afterEach(() => {
  app.loading.over()
});