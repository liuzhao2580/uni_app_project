<template>
	<view class="nav-bar">
		<view class="nav-fixed">
			<!-- 签到 -->
			<view class="signed-box iconfont icon-qiandao" @click='signedClick'></view>
			<!-- 搜索框 -->
			<view class="nav-search" @click.stop="searchClick">
				<text class="iconfont icon-search-fill nav-icon"></text>
				<text class="nav-text">内涵的不只是段子</text>
			</view>
			<!-- 扫一扫 -->
			<view class="cream-box iconfont icon-saoyisao"></view>
		</view>
		<view class="nav-content"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		searchClick() {
			uni.navigateTo({
				url: '/pages/search/search'
			});
		},
		signedClick() {}
	}
};
</script>

<style lang="scss">
.nav-fixed {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;
	height: 90rpx;
	padding: 0 20rpx;
	border-bottom: 1px solid #eee;
	background-color: #fff;
	.iconfont {
		font-size: 42rpx;
		color: $base-color;
	}
	.nav-search {
		background-color: #fff;
		width: 100%;
		height: 60rpx;
		border-radius: 30rpx;
		border: 1px solid $base-color;
		box-sizing: content-box;
		padding: 0 20rpx;
		margin: 0 20rpx;
		display: flex;
		align-items: center;
		.nav-icon {
			font-size: 32rpx;
			margin-right: 20rpx;
			color: #ccc;
		}
		.nav-text {
			font-size: 32rpx;
			color: #ccc;
		}
	}
}
.nav-content {
	height: 90rpx;
}
</style>
