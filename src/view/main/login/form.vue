<template>
  <Form ref="form" :model="form" :rules="rule">
    <FormItem prop="username">
      <Input size="large" type="text" v-model="form.username" :placeholder="$t('username')" prefix="ios-person-outline" />
    </FormItem>
    <FormItem prop="password">
      <Input size="large" type="password" v-model="form.password" :placeholder="$t('password')" prefix="ios-lock-outline" @on-enter="submit" />
    </FormItem>
    <FormItem>
      <Button size="large" type="primary" @click="submit" long>{{ $t('login') }}</Button>
    </FormItem>
  </Form>
</template>

<script>
import { token, login } from '@/tools';

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
    submit () {
      // test
      token('123')
      login({ username: 'Administrator' })
    }
  }
}
</script>