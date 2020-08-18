<template>
  <Menu ref="menu" :active-name="active" :open-names="open" width="auto" accordion>
    <Menus />
  </Menu>
</template>
<script>
import Menus from '@/view/main/menu'

export default {
  components: {
    Menus
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