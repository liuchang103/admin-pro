<template>
  <span class="view-main-header-item">
    <Dropdown :placement="type" @on-click="lang">
      <Icon type="md-globe" size="18" class="view-main-header-item-icon" /> 
      <span class="scoped-lang">{{ $t('lang') }}</span>
      <DropdownMenu slot="list">
        <template v-for="(lang, key) in language">
          <DropdownItem :name="lang.lang" :key="key">
            <Badge 
              :status="$i18n.locale == lang.lang ? 'processing' : 'default'" 
              :text="lang.name"
            />
          </DropdownItem>
        </template>
      </DropdownMenu>
    </Dropdown>
  </span>
</template>

<script>
import { language } from '@/lang'
import app from '@/tools'

export default {
  props: {
    type: String
  },
  data() {
    return {
      language
    }
  },
  methods: {
    lang (lang) {
      app.lang(lang)
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