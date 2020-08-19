<template>
  <div @click="add">user {{ a }}</div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
    };
  },
  methods: {
    add() {
      this.a++;
    },
  },
};
</script>