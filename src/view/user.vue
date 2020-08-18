<template>
    <div @click="add">
        user {{ a }}
        <Page :total="100" show-sizer />
        {{ $t('i.datepicker.clear') }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            a: 1
        }
    },
    methods:{
        add() {
            this.a++
        }
    }
}
</script>