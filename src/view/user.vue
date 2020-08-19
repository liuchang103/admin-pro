<template>
  <div>
    <div class="page-header">
      <div class="page-header-title">{{ $t('menu.user') }}</div>
      <div class="page-header-desc">describe</div>
    </div>
    <div class="page-content">
      <div class="page-box">
        <div class="page-box-content">
          <Button type="primary" @click="add">Default</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    add() {
      this.$store.dispatch('app/count', this.$store.state.app.count + 1)
    },
  },
};
</script>