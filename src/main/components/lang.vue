<template>
  <span class="view-main-header-item">
    <Dropdown :placement="type" @on-click="lang">
      <Icon type="md-globe" size="18" class="view-main-header-item-icon" /> 
      <span class="scoped-lang">{{ $t('lang') }}</span>
      <DropdownMenu slot="list">
        <Lang />
      </DropdownMenu>
    </Dropdown>
  </span>
</template>

<script>
import Lang from '@/view/main/lang.vue'
import LocalStorage from '@/tools/localstorage'

export default {
  props: {
    type: String
  },
  components: {
    Lang
  },
  methods: {
    lang (lang) {
      this.$i18n.locale = lang
      LocalStorage.set('lang', lang)
    }
  }
}
</script>

<style lang="less" scoped>
  .scoped-lang{
    margin-left: -7px;
    padding-right: 15px;
  }
</style>