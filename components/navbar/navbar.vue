<template>
	<view class="nav-bar">
		<view class="nav-fixed">
			<view class="nav-search">
				<text class="iconfont icon-search-fill nav-icon" ></text>
				<text class="nav-text">内涵的不只是段子</text>
			</view>
		</view>
		<view class="nav-view"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
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
	background-color: $base-color;
	padding: 0 20rpx;
	box-sizing: border-box;
	.nav-search {
		background-color: #fff;
		width: 100%;
		height: 60rpx;
		border-radius: 30rpx;
		box-sizing: content-box;
		padding: 0 20rpx;
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
.nav-view {
	height: 90rpx;
}
</style>
