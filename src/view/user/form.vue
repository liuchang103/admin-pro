<template>
  <Modal v-model="modal" :title="title" width="800">
    <Form ref="form" :model="form" :rules="rule" :label-width="60">
      <FormItem label="a" prop="a">
        <Input v-model="form.a" />
      </FormItem>
      <FormItem label="b" prop="b">
        <Input v-model="form.b" />
      </FormItem>
      <FormItem label="c" prop="c">
        <Input v-model="form.c" />
      </FormItem>
      <FormItem label="d" prop="d">
        <Input v-model="form.d" />
      </FormItem>
      <FormItem>
        <Upload />
      </FormItem>
      <FormItem>
        <Editor v-model="content" :height="200" />
      </FormItem>
    </Form>
    <div slot="footer">
      <Button type="primary" :loading="loading" @click="onPost">{{ title }}</Button>
    </div>
  </Modal>
</template>
<script>
import Upload from '@/main/components/upload'
import Editor from '@/main/components/editor'

export default {
  components: {
    Upload,
    Editor
  },
  computed: {
    title() {
      return this.form.id ? 'Update' : 'Create'
    }
  },
  data() {
    return {
      modal: false,
      loading: false,
      form: {},
      field: {
        a: '',
        b: '',
        c: '',
        d: '',
        content: ''
      },
      rule: {
        a: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        b: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        c: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        d: [
          { required: true, message: ' ', trigger: 'blur' }
        ]
      },
      content: ''
    }
  },
  methods: {
    open(data) {
      this.modal = true

      if(!data) {
        // 初始化字段
        data = Object.assign({}, this.field)
      }
      // 深拷贝
      this.form = Object.assign({}, data)

      // 清空验证
      this.$refs.form.resetFields()
    },
    close() {
      this.modal = false
    },
    onPost() {
      // 登陆
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.close()
            this.loading = false
            this.$emit('get')
          }, 2000)
        }
      })
    }
  }
}
</script>