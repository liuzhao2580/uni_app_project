<template>
	<view class="layout-box">
		<!-- 导航栏头部输入框 -->
		<nav-bar></nav-bar>
		<!-- 内容输入部分 -->
		<view class="layout-content">
			<scroll-view scroll-y="true" class="layout-scroll">
				<view class="layout-scroll-content">
					<slot></slot>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import navBar from './navbar/navbar.vue';
export default {
	components: {
		navBar
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
page {
	width: 100%;
	height: 100%;
}
.layout-box {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.layout-content {
	flex: 1;
	overflow: hidden;
	box-sizing: border-box;
	.layout-scroll {
		height: 100%;
		.layout-scroll-content {
			height: 100%;
		}
	}
}
</style>
