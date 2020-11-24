<template>
	<view class="recommend-box">
		<nav-list :navListData="navListData"></nav-list>
		<!-- 秒杀活动 -->
		<view class="second-kill-box borderRadius">
			<view class="header-box">
				<view class="title-box">
					<text class="title">秒杀</text>
					<text class="time"></text>
				</view>
				<text class="more">更多</text>
			</view>
			<view class="sk-box"></view>
		</view>
	</view>
</template>

<script>
import navList from './components/nav-list.vue';
export default {
	components: {
		navList
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
.recommend-box {
	.second-kill-box {
		margin: 20rpx 0;
		background-color: #fff;
		height: 260rpx;
	}
}
</style>
