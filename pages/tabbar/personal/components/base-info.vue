<template>
	<view class="base-info-box">
		<view class="base-info">
			<!-- 头像 -->
			<view class="user-avatar"><image class="image" src="@/static/tabbar/personal.png"></image></view>
			<!-- 昵称 -->
			<text class="user-nickName">小火车况且况且</text>
			<!-- 个人主页 -->
			<view class="user-page">
				<text>个人主页</text>
				<text class="iconfont icon-arrow-right"></text>
			</view>
		</view>
		<!-- 发布信息 -->
		
	</view>
</template>

<script></script>

<style lang="scss">
.base-info-box {
	.base-info {
		display: flex;
		align-items: center;
		.user-avatar {
			flex: 1.5;
			.image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
			}
		}
		.user-nickName {
			font-size: 32rpx;
			font-weight: 600;
			flex: 4;
		}
		.user-page {
			color: #c0c0c0;
			flex: 2;
			text-align: right;
		}
	}
}
</style>
