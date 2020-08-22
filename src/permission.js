import router from './route'
import { token, setTitle, logout, loading, loadingOver } from '@/tools'

// 权限验证
router.beforeEach((to, from, next) => {
  // 进度条
  loading(true)

  // 设置标题
  setTitle(to.meta.title)

  // 检查白名单和权限
  if(!to.meta.white && !token()) {
    // 关闭进度条
    loadingOver()
    // 退出登陆
    return logout()
  }

  next()
});

router.afterEach(() => {
  loadingOver()
});