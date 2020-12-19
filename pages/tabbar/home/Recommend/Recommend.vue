<template>
	<view class="recommend-box">
		<!-- 导航菜单 -->
		<nav-list :navListData="navListData"></nav-list>
		<!-- 秒杀活动 -->
		<second-kill></second-kill>
		<!-- 猜你喜欢 -->
		<recommend-list></recommend-list>
	</view>
</template>

<script>
import navList from './components/nav-list.vue';
import secondKill from './components/second-kill.vue'
import recommendList from './components/recommend-list.vue'
export default {
	components: {
		navList,
		secondKill,
		recommendList
	},
	data() {
		return {
			navListData: [
				{
					title: '限时秒杀',
					src: ''
				},
				{
					title: '数码电器',
					src: ''
				},
				{
					title: '充值缴费',
					src: ''
				},
				{
					title: '潮流服饰',
					src: ''
				},
				{
					title: '签到领钱',
					src: ''
				},
				{
					title: '9块9包邮',
					src: ''
				},
				{
					title: '今日爆款',
					src: ''
				},
				{
					title: 'VIP会员',
					src: ''
				}
			]
		};
	}
};
</script>

<style lang="scss">

</style>
