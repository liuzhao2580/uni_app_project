/** * 商品简介：
* 只支持三种模式,默认都是 第一种模式 
* 1、default 正常的图片显示 + 两行文字显示（多余部分省略号）+ 价格（存在旧的价格就显示，不存在就显示新的价格） 
* 2、middle 中尺寸大小图片显示 + 价格 只适用于 推荐页面秒杀展示 
* 3、small 小尺寸大小，只显示图片 */
<template>
	<view class="goods-card-box" >
		<!-- 商品图片 -->
		<view class="goods-image-box">
			<u-image class="goods-image" :height="height" src="@/static/tabbar/personal-active.png" mode=""></u-image>
		</view>
		<!-- 商品简介 -->
		<view class="goods-details" v-if="size === 'default'">
			<text>zhesssssssssssssssssssssssssssssssssssssssssssssssssssssss</text>
		</view>
		<!-- 商品价格 -->
		<view class="goods-price">
			<view class="now-price"><u-icon name="rmb"></u-icon>1999</view>
			<view class="old-price"><u-icon name="rmb"></u-icon>2888</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		// 尺寸
		size: {
			type: String,
			default: 'default'
		},
		// 图片高度
		height: {
			type: Number,
			default: 200
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.goods-card-box {
	height: 300rpx;
	width: 200rpx;
	.goods-image-box {
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
