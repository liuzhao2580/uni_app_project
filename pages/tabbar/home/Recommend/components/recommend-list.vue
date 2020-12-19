<template>
	<view class="recommend-list-box">
		<!-- 背景图 猜你喜欢 -->
		<view class="bgc-box">
			<u-image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/5cd31730-41eb-11eb-8a36-ebb87efcf8c0.png" mode="widthFix">
			</u-image>
		</view>
		<!-- 商品列表 -->
		<view class="">
			<goods-card :goodsCardList='[]'></goods-card>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			
		}
	}
}
</script>

<style lang="scss">
.recommend-list-box {
	margin-top: 10rpx;
}
</style>
