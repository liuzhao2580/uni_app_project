<template>
    <swiper class="swiper-box" :current="activeCurrent" @change="swiperChange">
        <swiper-item v-for="(item,index) in tabList" :key="item._id" :item-id="item._id" class="swiper-item">
            <Common-page :listData="listData[index]" />
        </swiper-item>
    </swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { article_queryList_API } from '@/common/api/modules/article.js'
import CommonPage from './Common-page.vue'
export default {
    components: {
        CommonPage,
    },
    props: {
        tabList: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        ...mapGetters({
            activeCurrent: 'home/activeCurrent'
        }),
	},
	data(){
		return {
			listData: []
		}
	},
    mounted() {
        this.init_recommend()
    },
    methods: {
        ...mapActions({
            ACT_changeCurrent: 'home/ACT_changeCurrent'
        }),
        // swiper 的改变事件
        swiperChange(e) {
            const { source, current } = e.detail
            // if (this.tabListData[current]) return;
            this.init_recommend(e.detail.currentItemId)
            // 说明是用户滑动的时候改变
            if (source == 'touch') this.ACT_changeCurrent(current)
        },
        /** 调用接口,获取 的数据 */
        async init_recommend(category_id = null) {
            const getData = await article_queryList_API({
                name: 'articleList',
                data: {
                    pageSize: 10,
                    pageNum: 1,
                    category_id,
                },
            })
			console.log(getData)
			this.$set(this.listData, this.activeCurrent, getData.data)
        },
    },
}
</script>

<style lang="scss">
.swiper-box {
    height: 100%;
    box-sizing: border-box;
    .swiper-item {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
}
</style>
