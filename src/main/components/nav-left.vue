<template>
  <div>
    <Records />
    <span class="view-main-header-item">
      <Tooltip :content="$t('refresh')" placement="bottom" theme="light">
        <Icon type="md-refresh" size="18" class="view-main-header-item-icon" @click="$router.go(0)" />
      </Tooltip>
    </span>
    <span class="view-main-header-item">
      <Tooltip :content="$t('back')" placement="bottom" theme="light">
        <Icon type="md-arrow-back" size="18" class="view-main-header-item-icon" @click="$router.go(-1)" />
      </Tooltip>
    </span>
    <Breadcrumb class="view-main-header-braedcrumb">
      <template v-for="(item, key) in $route.matched">
        <BreadcrumbItem v-if="item.meta.title" :key="key">{{ $t(item.meta.title) }}</BreadcrumbItem>
      </template>
    </Breadcrumb>
    <Left />
  </div>
</template>

<script>
import Records from './records';
import Left from '@/view/main/header-left';

export default {
  components: {
    Records,
    Left
  }
}
</script>