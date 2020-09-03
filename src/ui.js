import Vue from 'vue'

// UI 组件
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI);

// 阻止产生消息
Vue.config.productionTip = false

// 格式化CSS
import 'normalize.css/normalize.css'

// 自定义CSS
import '@/style/app.less'

// 消息提醒配置
ViewUI.Message.config({
    top: 75,
    duration: 3
});

ViewUI.Notice.config({
    top: 20,
    duration: 3
});

export default ViewUI