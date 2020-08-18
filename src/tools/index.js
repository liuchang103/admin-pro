export const setTitle = (title) => {
  if(title) {
    title += ' - '
  }
  window.document.title = title + process.env.VUE_APP_NAME
}