import lang from '@/lang'

export const setTitle = (title) => {
  if(title && title !== undefined) {
    title = lang.t(title) + ' - '
  } else {
    title = ''
  }
  window.document.title = title + process.env.VUE_APP_NAME
}