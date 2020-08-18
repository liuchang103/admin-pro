<template>
  <div class="view-login">
    <div class="view-login-box">
      <div class="view-login-left">
        <div class="view-login-left-img">
          <LoginLeft />
        </div>
      </div>
      <div class="view-login-right">
        <Logo class="view-login-right-logo" />
        <LoginForm ref="form" />
        <div class="view-login-right-lang">
          <Lang />
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Logo from '@/view/main/logo'
import Footer from '@/view/main/footer'
import LoginForm from '@/view/main/login/form'
import LoginLeft from '@/view/main/login/left'
import Lang from './components/lang'
import { token } from '@/tools';

export default {
  components: {
    Logo,
    Lang,
    LoginForm,
    LoginLeft,
    Footer
  },
  created() {
    // 检测 token，自动进入
    if(token()) {
      this.$nextTick(() => {
        this.$refs.form.to()
      })
    }
  }
}
</script>