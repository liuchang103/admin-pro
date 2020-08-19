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

## 登陆
全局共用方法，会在所有权限检查地方调用
```
import { token, userInfo, login, logout } from '@/tools';

// 获取 token
token()
// 获取用户 json
userInfo()
// 登录，传入 token 和 用户信息并跳转窗体首页
login(token, userinfo)
// 登出，清空 token 和 用户信息并跳转登陆页
logout()
```