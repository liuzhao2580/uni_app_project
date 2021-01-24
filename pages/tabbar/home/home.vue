<template>
	<layout>
		<view class="home-box">
			<!-- 自定义tab组件 -->
			<tab :tabList="tabList"></tab>
			<scroll-view scroll-y="true" class="scroll-box">
				<scroll-list :tabList='tabList'></scroll-list>
			</scroll-view>
		</view>
	</layout>
</template>

<script>
import layout from '@/layout/layout.vue';
import tab from './components/tab'
import scrollList from './components/scrollList'
import { tabbar_api } from '@/common/api/modules/home';
export default {
	components: {
		layout,
		tab,
		scrollList
	},
	data() {
		return {
			tabList: []
		};
	},
	created() {
		this.init_tabList();
	},
	methods: {
		// 初始化tab的数据
		async init_tabList() {
			const {data} = await tabbar_api({ name: 'tabbar' });
			this.tabList = data
		}
	}
};
</script>

<style lang="scss">
	.home-box {
		height: 100%;
		display: flex;
		flex-direction: column;
		.scroll-box {
			overflow: hidden;
			flex: 1;
		}
	}
</style>
