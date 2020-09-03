## Admin Pro
基于 iView 开发的后台

## 三步曲
```
npm install
npm run serve
npm run build
```
## 目录结构
```
/api/                     API存放
/asset/                   静态资源目录
/lang/                    多语言配置文件
/main/                    后台窗体核心目录
/route/                   路由存放目录
/store/                   Vuex全局数据
/style/                   样式存放目录
/tools/                   常用工具目录
/view/main/               分离的组件目录，基本都是全局引用
```
## 后台窗体
窗体分为三部分 left header content，这个为 Admin 的窗体。

此框架将 **后台窗体** 的部分逻辑分离为组件，意味着 /main/ 窗体核心目录最好不修改，只变动分离出去的组件，即可达到目的

分离的组件在 /view/main/ 中，在此能找到相关的组件，可自定义修改，全局将发生变动

## 路由
路由存在目录下有两个文件
```
/route/index.js           后台窗体以外的页面，如登陆页 404页
/route/main.js            后台窗体以内的页面
```
后台窗体以外的页面路由可参考 vue router 即可

后台窗体以内的页面需要遵循以下字段:
```
meta: {
    title: 'menu.home',    // 多语言名称，不可直接起名称，否则不兼容多语言
    menu: 'home'           // 定位到窗体左侧菜单，如果不填写，左侧菜单将不定位
}

// menu 多级菜单，要使用 - 联级
meta: {
    title: 'menu.user.log',    // 如：用户日志
    menu: 'user-log'           // 定位到 用户管理 菜单下的 用户日志
}

meta: {
    white: true            // 放行白名单，不检查登陆
}
```
## 菜单
修改窗体左侧菜单，位于 /view/main/left/menu.vue 中。

注意：里面自带一个 props 为 update()，当菜单中有异步加载的情况，可手动执行，让菜单重新定位
```
// 获取数据
getMenu().then(data => {
  this.menu = data
  // 手动定位菜单
  this.update()
})
```

## 登陆
全局共用方法，会在所有权限检查地方调用
```
import app from '@/tools';

// 获取token or 写入token
app.token(token)

// 获取登陆用户信息
app.user()

// 登录，传入用户信息并跳转窗体首页
app.login(userinfo)

// 登出，清空 token 和 用户信息并跳转登陆页
app.logout()
```

## Loading
路由跳转 与 http请求 均有顶部 loading进度条 和 窗体loading，依托与两个全局方法
```
import app from '@/tools';

// 出现进度条
app.loading.start()

// 进度条完成
app.loading.over()

// 出现进度条并窗体loading
app.loading.start(true)

// 进度条完成并标识 Error
app.loading.over(true)
```
当请求http时，所有请求均会出现进度条，如果请求失败，将出现进度条 Error.

有的请求需要使窗体loading，有的不需要，这将可以在 api接口中，写入如下配置
```
import http from '@/http'

export function auth(data) {
  return http.post('/auth', data)
}

 // 出现窗体 loading 的接口
export function info() {
  return http.get('/info', {
    loading: true
  })
}
```

## 上传组件
内置了一个上传组件，可直接调用。上传地址在 .env 中的 VUE_APP_UPLOAD

有两个监听事件：
+ success 上传图片成功时，返回图片路径
+ remove 删除图片时，返回图片路径
```
<Upload v-model="images" ref="upload" @success="success" @remove="remove />

import Upload from '@/main/components/upload';

// 设置单图上传，string 类型
this.images = ''
this.images = '/a.png'

// 设置多图上传，array 类型
this.images = []
this.images = ['/a.png', '/b.png']
```

## 富文本
基于 quill 封装的组件，非常简单，共用内置上传组件
```
<Editor v-model="content" :height="200" />

import Editor from '@/main/components/editor'
```