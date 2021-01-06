<template>
	<view class="personal-box">
		<!-- 头部 个人信息 -->
		<base-info></base-info>
	</view>
</template>

<script>
import BaseInfo from './components/base-info.vue'
export default {
	components:{
		BaseInfo
	},
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss">
.personal-box {
	padding: 20rpx;
}
</style>
