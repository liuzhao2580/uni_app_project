<template>
	<view class="tab-box">
		<scroll-view scroll-x class="scroll-box">
			<view class="tab-scroll-content">
				<view 
				v-for="(item, index) in tabList" 
				:key="item.id" 
				:class="[activeIndex == index ? 'activeItem':'' ,'scroll-item']" 
				@click="tabClick(item, index)">{{ item.name }}</view>
			</view>
		</scroll-view>
		<view class="set-icon iconfont icon-caidan"></view>
	</view>
</template>

<script>
export default {
	props: {
		tabList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			activeIndex: 0
		};
	},
	methods: {
		// 导航栏的点击事件
		tabClick(item, index) {
			this.activeIndex = index;
		}
	}
};
</script>

<style lang="scss">
.tab-box {
	display: flex;
	.scroll-box {
		flex: 1;
		overflow: hidden;
		.tab-scroll-content {
			display: flex;
			flex-wrap: nowrap;
			.scroll-item {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 30rpx;
				height: 90rpx;
				flex-shrink: 0;
				font-size: 32rpx;
				&.activeItem {
					color: $base-color;
				}
			}
		}
	}

	.set-icon {
		position: relative;
		width: 90rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		font-size: 42rpx;
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			width: 1px;
			height: 50%;
			background-color: #ccc;
		}
	}
}
</style>
