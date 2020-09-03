<template>
  <div>
    <div class="page-header">
      <div class="page-header-title">{{ $t('menu.user') }}</div>
      <div class="page-header-desc">describe</div>
    </div>
    <div class="page-content">
      <div class="page-box">
        <div class="page-box-content">
          <Button type="primary" icon="md-add" @click="onForm(false)">Default</Button>
        </div>
        <div class="page-box-content">
          <Table :list="list" @delete="onDelete" @update="onForm" />
        </div>
      </div>
    </div>
    <Form ref="form" @get="getData" />
  </div>
</template>
<script>
import Table from './table'
import Form from './form'
import { list } from '@/api/test'

export default {
  components:{
    Table,
    Form
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取最新配置
    getData() {
      list().then(data => {
        this.list = data
      })
    },

    // 删除
    onDelete(index) {
      this.list.splice(index, 1)
    },

    // 打开表单
    onForm(data) {
      this.$refs.form.open(data)
    }
  },
};
</script>