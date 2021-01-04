<template>
	<view class="article-editor-box">
		<!-- 标题 -->
		<input class="article-title" type="text" v-model="articleTitle" placeholder="请输入标题" :maxlength="50" />
		<!-- 内容 -->
		<editor id="editor" class="eidtor-content" placeholder="请输入内容" @ready="onEditorReady"></editor>
	</view>
</template>

<script>
export default {
	props:{
		articleRelease: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			articleTitle: null,
			editorCtx: null
		};
	},
	methods: {
		// editor组件初始化时触发
		onEditorReady() {
			// #ifdef MP-BAIDU
			this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
			// #endif

			// #ifdef APP-PLUS || H5 ||MP-WEIXIN
			uni
				.createSelectorQuery()
				.select('#editor')
				.context(res => {
					this.editorCtx = res.context;
				})
				.exec();
			// #endif
		},
		// 获取 文章的标题 和内容
		gainArticle() {
			this.editorCtx.getContents({
				success: (res) => {
					console.log(res);
					this.$emit("changeFlag")
				}
			})
		}
	},
	watch:{
		articleRelease(val) {
			if(val) this.gainArticle()
		}
	}
};
</script>

<style lang="scss">
.article-editor-box {
	padding: 20rpx;
	.article-title {
		border-bottom: 1px solid #f0f0f0;
		padding: 10rpx 0;
		font-weight: 900;
		font-size: 40rpx;
	}
	.eidtor-content {
		margin-top: 20rpx;
	}
}
</style>
