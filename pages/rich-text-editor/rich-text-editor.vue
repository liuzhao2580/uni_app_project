<template>
	<view class="rich-text-editor-box">
		<!-- 头部 取消 发布 按钮 -->
		<view class="header-box">
			<text class="cancel-btn" @click="cancelBtn">取消</text>
			<text class="release-btn" @click="releaseBtn">发布</text>
		</view>
		<view class="rich-text-box">
			<article-editor :articleRelease='articleRelease' @changeFlag='changeFlag'></article-editor>
		</view>
	</view>
</template>

<script>
import ArticleEditor from './components/article-editor.vue';
export default {
	components: {
		ArticleEditor
	},
	data() {
		return {
			articleRelease: false, // 发布按钮点击事件
		};
	},
	methods: {
		// 取消
		cancelBtn() {
			uni.navigateBack();
		},
		// 发布按钮
		releaseBtn() {
			this.articleRelease = true
		},
		changeFlag() {
			this.articleRelease = false
		}
	}
};
</script>

<style lang="scss">
.rich-text-editor-box {
	background-color: #ffffff;
	.header-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		padding: 0 30rpx;
		font-size: 26rpx;
		font-weight: 600;
		border-bottom: 1px solid #f0f0f0;
	}
}
</style>
