<template>
    <scroll-view>
        <view v-for="item in listData" :key="item._id">{{item._id}}</view>
    </scroll-view>
</template>
<script>

export default {
    props: {
        listData: {
            type: Array,
            default: ()=> []
        }
    },
    data() {
        return {}
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
</style>
