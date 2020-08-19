import router from './route'
import ui from './ui'
import { token, setTitle, logout } from '@/tools'

// 权限验证
router.beforeEach((to, from, next) => {
  // 进度条
  ui.LoadingBar.start();

  // 设置标题
  setTitle(to.meta.title)

  // 检查白名单和权限
  if(!to.meta.white && !token()) {
    // 关闭进度条
    ui.LoadingBar.finish();
    // 退出登陆
    return logout()
  }

  next()
});

router.afterEach(() => {
  ui.LoadingBar.finish();
});