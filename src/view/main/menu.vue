<template>
  <div>
    <MenuItem name="home" to="/main/"><Icon type="md-home" />{{ $t('menu.home') }} <Badge :count="1" type="warning" class="scoped-right" /></MenuItem>
    <Submenu name="1">
      <template slot="title">
        <Icon type="md-document" />Navigation One
      </template>
      <MenuItem name="1-user" to="/main/user"><Icon type="md-leaf" /> Option 1</MenuItem>
      <MenuItem name="1-2">Option 2</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="md-heart" />Navigation Two <Badge status="processing" class="scoped-right x" />
      </template>
      <MenuItem name="2-1">Option 5</MenuItem>
      <MenuItem name="2-2">Option 6</MenuItem>
      <Submenu name="3">
        <template slot="title">Submenu</template>
        <MenuItem name="3-1">Option 7 <Badge :count="1" type="primary" class="scoped-right" /></MenuItem>
        <MenuItem name="3-2">Option 8</MenuItem>
      </Submenu>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-cog" />Navigation Three
      </template>
      <MenuItem name="4-1">Option 9</MenuItem>
      <MenuItem name="4-2">Option 10</MenuItem>
      <MenuGroup title="Item 1">
        <MenuItem name="4-3">Option 11</MenuItem>
        <MenuItem name="4-4">Option 12</MenuItem>
      </MenuGroup>
    </Submenu>
  </div>
</template>

<style lang="less" scoped>
  .scoped-right{
    float:right;
    
    &.x{
      margin-right: 15px
    }

    &.m{
      margin-right: 25px
    }
  }

</style>