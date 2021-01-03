<template>
	<view class="tab-box u-border-bottom">
		<u-tabs name='category_name' :list="tabListData" :current="activeCurrent" @change="tabClick" active-color="#ff2e24" height="60"></u-tabs>
	</view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	props: {
		tabList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			current: 0
		};
	},
	computed: {
		...mapGetters({
			activeCurrent: 'home/activeCurrent'
		}),
		tabListData() {
			let array = [
				{
					_id: "0",
					category_name: '推荐'
				}
			]
			return array.concat(this.tabList)
		}
	},
	methods: {
		...mapActions({
			ACT_changeCurrent: 'home/ACT_changeCurrent'
		}),
		// 导航栏的点击事件
		tabClick(index) {
			this.ACT_changeCurrent(index);
		},
		change(index) {
			this.current = index;
		}
	}
};
</script>

<style lang="scss">
</style>
