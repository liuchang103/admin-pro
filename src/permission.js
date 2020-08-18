import router from './route'
import ui from './ui'
import { token, setTitle } from '@/tools'


// 白名单路由
const white = ['login']

// 权限验证
router.beforeEach((to, from, next) => {
  // 进度条
  ui.LoadingBar.start();

  // 设置标题
  setTitle(to.meta.title)

  // 检查白名单和权限
  if(!white.includes(to.name) && !token()) {
    // 回到首页
    ui.LoadingBar.finish();
    return next('/')
  }

  next()
});

router.afterEach(() => {
  ui.LoadingBar.finish();
});