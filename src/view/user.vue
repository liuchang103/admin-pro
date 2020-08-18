<template>
    <div @click="add">
        user {{ a }}
    </div>
</template>
<script>
import http from '@/http';
export default {
    data() {
        return {
            a: 1
        }
    },
    methods:{
        add() {
            this.a++
            http('/').then(res => {
                console.log(res)
            })
        }
    }
}
</script>