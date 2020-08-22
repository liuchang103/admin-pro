<template>
  <Table :columns="columns" :data="list">
    
    <template slot-scope="{ row }" slot="d">
      <Badge status="processing" :text="row.d" />
    </template>

    <template slot-scope="{ row, index }" slot="action">
      <a @click="$emit('update', row)">Update</a>
      <Divider type="vertical" />
      <Poptip
        confirm
        title="Are you sure you want to delete this item?"
        @on-ok="$emit('delete', index)"
      >
        <a>Delete</a>
      </Poptip>
    </template>

  </Table>
</template>
<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      columns: [
        {
          title: "ID",
          key: "id",
        },
        {
          title: 'a',
          key: "a",
        },
        {
          title: 'b',
          key: "b",
        },
        {
          title: 'c',
          key: "c",
        },
        {
          title: 'd',
          slot: 'd',
        },
        {
          title: 'action',
          slot: 'action',
        },
      ],
    };
  },
};
</script>