<template>
  <Layout class="view-main">
    <Sider ref="side1" class="view-main-menu" width="250">
      <Logo class="view-main-menu-logo" />
      <LeftTop />
      <Menu />
      <LeftBottom />
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="view-main-header">
        <NavLeft class="view-main-header-left" />
        <NavRight class="view-main-header-right" />
      </Header>
      <Content :style="{ position: 'relative' }">
        <router-view />
        <Spin size="large" fix v-if="loading.status"></Spin>
      </Content>
      <Footer>
        <MainFooter />
      </Footer>
    </Layout>
  </Layout>
</template>
<script>
import Menu from './components/menu';
import NavLeft from './components/nav-left';
import NavRight from './components/nav-right';
import Logo from '@/view/main/logo';
import MainFooter from '@/view/main/footer';
import LeftTop from '@/view/main/left/top';
import LeftBottom from '@/view/main/left/bottom';
import app from '@/tools'

import './main.less'

export default {
  components:{
    Menu,
    NavLeft,
    NavRight,
    Logo,
    MainFooter,
    LeftTop,
    LeftBottom
  },
  data() {
    return {
      loading: app.loading
    }
  }
};
</script>