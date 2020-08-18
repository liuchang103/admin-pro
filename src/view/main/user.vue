<template>
  <Dropdown placement="bottom-end">
    <span class="view-main-header-item view-main-header-avatar">
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" />
      <span class="view-main-header-avatar-name">Administrator</span>
    </span>
    <DropdownMenu slot="list">
      <DropdownItem><Icon type="md-power" /> {{ $t('logout') }}</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>