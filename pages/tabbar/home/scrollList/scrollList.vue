<template>
	<swiper class="swiper-box" :current="activeCurrent" @change="swiperChange">
		<swiper-item v-for="item in tabList" :key="item._id" :item-id="item.category_name">
			<view class="swiper-item"><Common-page :gainItem="item" :goodsCardList='tabListData[activeCurrent]' /></view>
		</swiper-item>
	</swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { recommend_API } from '@/common/api/home.js';
import CommonPage from '../components/Common-page.vue'
export default {
	components: {
		CommonPage
	},
	props: {
		tabList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
		};
	},
	computed: {
		...mapGetters({
			activeCurrent: 'home/activeCurrent',
			tabListData: 'home/tabListData'
		})
	},
	mounted() {
		// this.init_recommend();
	},
	methods: {
		...mapActions({
			ACT_changeCurrent: 'home/ACT_changeCurrent',
			ACT_saveTabListData: 'home/ACT_saveTabListData'
		}),
		// swiper 的改变事件
		swiperChange(e) {
			const { source, current } = e.detail;
			console.log(e.detail, current,this.tabListData);
			if(this.tabListData[current]) return
			// this.init_recommend(e.detail.currentItemId)
			// 说明是用户滑动的时候改变
			if (source == 'touch') this.ACT_changeCurrent(current);
			
		},
		/** 调用接口,获取 的数据 */
		async init_recommend(category_name = null) {
			const getData = await recommend_API({ name: '', data: {
				pageSize: 10,
				pageNum: 1,
				category_name
			} });
			console.log(getData.data);
			this.ACT_saveTabListData(getData.data)
		}
	}
};
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
