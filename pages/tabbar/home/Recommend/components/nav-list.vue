<template>
	<view class="nav-list-box">
		<view class="list-item" v-for="(item, index) in navListData" :key="index">
			<image class="img-box" src="@/static/tabbar/home-active.png" mode=""></image>
			<text class="text-title">{{ item.title }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		navListData: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss">
.nav-list-box {
	height: 280rpx;
	background-color: #fff;
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
</style>
