<template>
  <Menu ref="menu" :active-name="active" :open-names="open" width="auto" accordion>
    <MainMenu :update="update" />
  </Menu>
</template>
<script>
import MainMenu from '@/view/main/left/menu'

export default {
  components: {
    MainMenu
  },
  data() {
    return {
      open: [],
      active: ''
    }
  },
  watch: {
    // 路由监听
    '$route' () {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    // 更新菜单焦点
    update() {
      let name = this.$route.meta.menu

      // 判断 menu 类型
      if(typeof name == 'function') {
        name = name(this.$route)
      }
      
      // 分割菜单名
      this.active = name
      this.open = name.split('-')

      // 手动触发菜单
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
    }
  }
}
</script>