<template>
    <view class="tab-box u-border-bottom">
        <u-tabs
            name="category_name"
            :list="tabListData"
            :current="activeCurrent"
            @change="tabChange"
            active-color="#ff2e24"
            height="60"
        ></u-tabs>
    </view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        tabList: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        ...mapGetters({
            activeCurrent: 'home/activeCurrent',
        }),
        tabListData() {
            return this.tabList
        },
    },
    methods: {
        ...mapActions({
            ACT_changeCurrent: 'home/ACT_changeCurrent',
        }),
        // 导航栏的点击事件
        tabChange(index) {
            this.ACT_changeCurrent(index)
        },
    },
}
</script>

<style lang="scss">
</style>
