<template>
  <span class="view-main-header-item">
    <Dropdown placement="bottom-start" @on-click="to">
      <Icon type="md-menu" size="18" class="view-main-header-item-icon" />
      <DropdownMenu slot="list">
        <div class="view-main-header-dropdown-title">{{ $t('browserecords') }}</div>
        <template v-for="(item, key) in list">
          <DropdownItem :name="key" :key="key">
            <Badge 
              :status="key == (list.length - 1) ? 'processing' : 'default'" 
              :text="$t(item.meta.title)"
            />
          </DropdownItem>
        </template>
      </DropdownMenu>
    </Dropdown>
  </span>
</template>

<script>
import LocalStorage from '@/tools/localstorage'

// 最多存放数量
const count = 5;

export default {
  data() {
    return {
      list: []
    }
  },
  watch: {
    '$route' (route) {
      this.add(route)
    }
  },
  created() {
    // 取出缓存
    let storage = LocalStorage.get('records')
    if (storage) {
      this.list = this.list.concat(storage)
    }

    this.add(this.$route)
  },
  methods: {
    add (route) {
      // 检查重复
      this.filte(route)

      // 加入
      this.list.push({
        path: route.path,
        meta: route.meta
      })

      // 数量超载
      this.check()

      // 存储
      LocalStorage.set('records', this.list)
    },

    // 重复
    filte (route) {
      for (const key in this.list) {
        // 路径一致
        if(this.list[key].path == route.path) {
          return this.list.splice(key, 1)
        }
      }
    },

    // 数量超载
    check () {
      if(this.list.length > count) {
        this.list.shift()
      }
    },

    // 跳转
    to (key) {
      this.$router.push(this.list[key])
    }
  }
}
</script>