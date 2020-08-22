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
      this.list = [
        {
          id: 1,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd'
        },
        {
          id: 2,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd'
        },
        {
          id: 3,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd'
        },
        {
          id: 4,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd'
        },
        {
          id: 5,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd'
        }
      ]
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