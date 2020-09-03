<template>
  <Dropdown placement="bottom-end" @on-click="to">
    <span class="view-main-header-item view-main-header-avatar">
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" />
      <span class="view-main-header-avatar-name">{{ username }}</span>
    </span>
    <DropdownMenu slot="list">
      <DropdownItem name="logout"><Icon type="md-power" /> {{ $t('logout') }}</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
import app from '@/tools';

export default {
  computed: {
    username () {
      return app.user().username
    }
  },

  methods: {
    // 选择菜单
    to (key) {
      switch (key) {
        case 'logout':
          app.logout()
          break;
      }
    },
  }
}
</script>