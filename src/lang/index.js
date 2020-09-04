import Vue from 'vue'
import VueI18n from 'vue-i18n'

// UI 语言
import zhCN from 'view-design/dist/locale/zh-CN';
import enUS from 'view-design/dist/locale/en-US';
import esES from 'view-design/dist/locale/es-ES';

// 本地语言
import zh from './zh';
import en from './en';
import es from './es';

Vue.use(VueI18n);
Vue.locale = () => {};

// 语言项
const messages = {
  zh: Object.assign(zh, zhCN),
  en: Object.assign(en, enUS),
  es: Object.assign(es, esES),
}

const I18n = new VueI18n({
  locale: process.env.VUE_APP_LANG,
  messages
})

// 导出语言项名
export const language = Object.keys(messages).map(lang => {
  return {
    lang,
    name: messages[lang].lang
  }
})

export default I18n