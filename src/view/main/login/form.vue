<template>
  <Form ref="form" :model="form" :rules="rule">
    <FormItem prop="username">
      <Input size="large" type="text" v-model="form.username" :placeholder="$t('username')" prefix="ios-person-outline" />
    </FormItem>
    <FormItem prop="password">
      <Input size="large" type="password" v-model="form.password" :placeholder="$t('password')" prefix="ios-lock-outline" />
    </FormItem>
    <FormItem>
      <Button size="large" type="primary" @click="submit" long>{{ $t('login') }}</Button>
    </FormItem>
  </Form>
</template>

<script>
import { token, userInfo } from '@/tools';

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        password: [
          { required: true, message: ' ', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    // 登陆页当检测已登陆后，将自动跳转
    to () {
      this.$router.push({ name: 'home' })
    },

    submit () {
      // 模拟登陆
      token('123')
      userInfo({ username: 'Administrator' })
      this.to()
    }
  }
}
</script>