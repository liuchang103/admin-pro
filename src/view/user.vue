<template>
  <div @click="add">user</div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
      this.$store.dispatch('app/count', this.count)
    },
  },
};
</script>