<template>
  <Form ref="form" :model="form" :rules="rule">
    <FormItem prop="username">
      <Input size="large" type="text" v-model="form.username" :placeholder="$t('username')" prefix="ios-person-outline" />
    </FormItem>
    <FormItem prop="password">
      <Input size="large" type="password" v-model="form.password" :placeholder="$t('password')" prefix="ios-lock-outline" @on-enter="submit" />
    </FormItem>
    <FormItem>
      <Button size="large" type="primary" :loading="loading" @click="submit" long>{{ $t('login') }}</Button>
    </FormItem>
  </Form>
</template>

<script>
import app from '@/tools';

export default {
  data () {
    return {
      loading: false,
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
    submit () {
      // 登陆
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          setTimeout(() => {
            // 模拟登陆
            app.token('123')
            app.login({ username: 'Administrator' }, ['user'])
          }, 2000)
        }
      })
    }
  }
}
</script>