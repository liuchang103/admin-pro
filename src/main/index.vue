<template>
  <Layout class="view-main">
    <Sider ref="side1" class="view-main-menu" width="250">
      <Logo class="view-main-menu-logo" />
      <Menu />
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="view-main-header">
        <NavLeft class="view-main-header-left" />
        <NavRight class="view-main-header-right" />
      </Header>
      <Content>
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import Menu from './components/menu';
import Logo from '@/view/main/logo';
import NavLeft from './components/nav-left';
import NavRight from './components/nav-right';

import './main.less'

export default {
  components:{
    Logo,
    Menu,
    NavLeft,
    NavRight
  }
};
</script>