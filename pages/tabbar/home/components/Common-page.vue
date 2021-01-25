<template>
    <view class="common-page-box">
        <view v-for="item in listData" :key="item._id" class="article-item">{{item.title}}</view>
    </view>
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
.common-page-box {
    padding: 10rpx;
    .article-item {
        margin-bottom: 20rpx;
        padding: 20rpx;
        border-bottom: 1px solid #f0f0f0;
    }
}
</style>
