<template>
	<view class="release-box">
		<!-- 用户信息 -->
		<view class="user-info-box">
			<!-- 用户信息 -->
			<view class="user-info">
				<!-- 用户头像 -->
				<image class="user-avatar" src="../../../static/tabbar/home-active.png"></image>
				<!-- 用户昵称 -->
				<text class="user-nickName">
					小火车
				</text>
			</view>
			<!-- 草稿箱 -->
			<view class="draft-box">
				
			</view>
		</view>
		<!-- 发布选项 -->
		<view class="release-type">
			<view class="type-item" v-for="(typeItem,index) in releaseTypeList" :key='index' @click="typeItemClick(typeItem)">
				<view class="type-icon">
					<text :class="['iconfont', typeItem.icon]" :style="{color: typeItem.color}"></text>
				</view>
				<text class="type-text">{{typeItem.title}}</text>
			</view>
		</view>
		<!-- 关闭按钮 -->
		<view class="close-btn iconfont icon-guanbi1" @click="$emit('closeModel')">
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			model: false,
			releaseTypeList: [
				{
					title: '写文章',
					icon: 'icon-wenzhang-copy',
					color: '#508ddc',
					url: '/pages/rich-text-editor/rich-text-editor'
				},
				{
					title: '发视频',
					icon: 'icon-shipin',
					color: '#ff5a59'
				}
			]
		}
	},
	methods:{
		typeItemClick(item) {
			const {url} = item
			if(url) {
				uni.navigateTo({
					url,
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		}
	}
}
</script>

<style lang="scss">
.release-box {
	display: flex;
	flex-direction: column;
	height: 400rpx;
	padding: 30rpx;
	.user-info-box {
		display: flex;
		justify-content: space-between;
		font-size: 22rpx;
		font-weight: 600;
		margin-bottom: 20rpx ;
		.user-info {
			.user-avatar {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
			}
			.user-nickName {
				vertical-align: super;
				margin-left: 20rpx;
			}
		}
		.draft-box {
			
		}
	}
	.release-type {
		display: flex;
		justify-content: space-around;
		.type-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100rpx;
			.type-icon {
				.iconfont {
					font-size: 64rpx;
				}
			}
			.type-text {
				font-size: 22rpx;
				font-weight: 600;
				margin-top: 10rpx;
			}
		}
		
	}
	.close-btn {
		border-top: 1px solid #f0f0f0;
		padding-top: 30rpx;
		margin-top: 30rpx;
		text-align: center;
	}
}
</style>
