<template>
	<view class="recommend-box">
		<view class="nav-list-box">
			<view class="list-item" v-for="(item,index) in navListData" :key="index">
				<image class="img-box" src="../../../../static/tabbar/home-active.png" mode=""></image>
				<text class="text-title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
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
	padding: 0 10rpx;
	background-color: #fff;
	.nav-list-box {
		height: 280rpx;
		display: flex;
		flex-wrap: wrap;
		.list-item {
			width: 25%;
			padding: 5rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			.text-title {
				
			}
			.img-box {
				height: 80rpx;
				width: 80rpx;
			}
		}
	}
}
</style>
