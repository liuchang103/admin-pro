import ui from '@/ui';

const loading = {

  // 状态
  status: false,

  // 开始加载
  start(loading = false) {
    ui.LoadingBar.start()
    if(loading) {
      this.status = true
    }
  },

  // 加载完成，error 为 true 将出现红色进度条
  over(error = false) {
    this.status = false
    return error ? ui.LoadingBar.error() : ui.LoadingBar.finish()
  }
}

export default loading