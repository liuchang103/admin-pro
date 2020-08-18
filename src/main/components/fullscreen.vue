<template>
  <span class="view-main-header-item">
    <Tooltip :content="value ? $t('exitfullscreen') : $t('fullscreen')" placement="bottom" theme="light">
      <Icon @click.native="handleChange" :type="value ? 'md-contract' : 'md-expand'" size="18" class="view-main-header-item-icon" />
    </Tooltip>
  </span>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  },
  methods: {
    handleChange() {
      let main = document.body
      if (this.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }

      this.value = !this.value
    }
  }
};
</script>