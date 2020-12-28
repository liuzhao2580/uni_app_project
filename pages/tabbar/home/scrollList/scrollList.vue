<template>
	<swiper class="swiper-box" :current="activeCurrent" @change="swiperChange">
		<!-- 推荐页面 -->
		<swiper-item>
			<view class="swiper-item"><Recommend /></view>
		</swiper-item>
		<swiper-item v-for="item in tabList" :key="item._id" :item-id="item._id">
			<view class="swiper-item"><Common :gainItem="item" /></view>
		</swiper-item>
	</swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Recommend from '../Recommend/Recommend';
import Common from '../Common/Common';
import { recommend_API } from '@/common/api/home.js';
export default {
	components: {
		Recommend,
		Common
	},
	props: {
		tabList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			goodsCardListData: []
		};
	},
	computed: {
		...mapGetters({
			activeCurrent: 'home/activeCurrent'
		})
	},
	mounted() {
		this.init_recommend();
	},
	methods: {
		...mapActions({
			ACT_changeCurrent: 'home/ACT_changeCurrent',
			ACT_saveTabListData: 'home/ACT_saveTabListData',
			skillListData: "home/ACT_skillListData"
		}),
		// swiper 的改变事件
		swiperChange(e) {
			const { source, current } = e.detail;
			console.log(e, current);
			// 说明是用户滑动的时候改变
			if (source == 'touch') this.ACT_changeCurrent(current);
			
		},
		/** 调用接口,获取 的数据 */
		async init_recommend() {
			const getData = await recommend_API({ name: 'goodsList', data: {
				pageSize: 10,
				pageNum: 1
			} });
			console.log(getData.data);
			this.ACT_saveTabListData(getData.data)
			this.skillListData(getData.data.filter(item => item.is_skill))
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
