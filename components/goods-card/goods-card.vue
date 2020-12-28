/** * 商品简介：
* 只支持三种模式,默认都是 第一种模式 
* 1、default 正常的图片显示 + 两行文字显示（多余部分省略号）+ 价格（存在旧的价格就显示，不存在就显示新的价格） 
* 2、middle 中尺寸大小图片显示 + 价格 只适用于 推荐页面秒杀展示 
* 3、small 小尺寸大小，只显示图片 */
<template>
	<view class="goods-card-box">
		<view class="goods-card-item borderRadius" v-for="(item ,index) in goodsCardList" :key='index'>
			<!-- 商品图片 -->
			<view class="goods-image-box">
				<u-image class="goods-image" :height="imageHeight" :src="item.goods_thumb" mode=""></u-image>
			</view>
			<!-- 商品简介 -->
			<view class="goods-details" v-if="size === 'default'">
				<text class="textOverflowHidden2">{{item.goods_name}}</text>
			</view>
			<!-- 商品价格 -->
			<view class="goods-price">
				<view class="now-price"><u-icon name="rmb"></u-icon>{{item.goods_price}}</view>
				<view class="old-price" v-if="item.goods_old_price"><u-icon name="rmb"></u-icon>2888</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		/** 需要 循环的数组 */
		goodsCardList: {
			type: Array,
			default: () => [],
			required: true
		},
		// 尺寸
		size: {
			type: String,
			default: 'default'
		},
		// 图片高度
		imageHeight: {
			type: Number,
			default: 280
		}
	}
};
</script>

<style lang="scss">
.goods-card-box {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.goods-card-item {
		min-width: 200rpx;
		width: 49%;
		background-color: #FFFFFF;
		margin-bottom: 10rpx;
		padding: 10rpx;
	}
	.goods-image-box {
	}
	.goods-details {
		margin: 10rpx 0;
	}
	.goods-price {
		display: flex;
		align-items: center;
		.now-price {
			color: $base-color;
			margin-right: 10rpx;
		}
		.old-price {
			color: #ccc;
			text-decoration: line-through;
			font-size: 16rpx;
		}
	}
}
</style>
