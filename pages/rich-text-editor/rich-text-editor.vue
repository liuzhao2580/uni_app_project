<template>
	<view class="rich-text-editor-box">
		<!-- 头部 取消 发布 按钮 -->
		<view class="header-box">
			<text class="cancel-btn" @click="cancelBtn">取消</text>
			<text class="release-btn" @click="releaseBtn">发布</text>
		</view>
		<view class="rich-text-box">
			<!-- 标题 -->
			<input class="article-title" type="text" v-model="articleTitle" placeholder="请输入标题" :maxlength="50" />
			<!-- 内容 -->
			<editor id="editor" class="eidtor-content" placeholder="请输入内容" @ready="onEditorReady"></editor>
		</view>
	</view>
</template>

<script>
import { article_insert_API } from '@/common/api/article.js';
export default {
	data() {
		return {
			articleTitle: null,
			editorCtx: null,
			editorContent: null
		};
	},
	methods: {
		// 取消
		cancelBtn() {
			uni.navigateBack();
		},
		// editor组件初始化时触发
		onEditorReady() {
			// #ifdef MP-BAIDU
			this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
			// #endif

			// #ifdef APP-PLUS || H5 ||MP-WEIXIN
			uni.createSelectorQuery()
				.select('#editor')
				.context(res => {
					this.editorCtx = res.context;
				})
				.exec();
			// #endif
		},
		// 发布按钮
		releaseBtn() {
			this.editorCtx.getContents({
				success: res => {
					console.log(res);
					const { html,text } = res;
					if(this.articleTitle && text) {
						this.editorContent = html;
						this.sendAricle(html);
					}
					else {
						uni.showToast({
							title:'请输入文章标题和内容',
							icon: 'none'
						})
					}
				}
			});
		},
		// 发送添加文章请求
		async sendAricle(html) {
			uni.showLoading({
				title: '请等待...'
			});
			const params = {
				user_id: '5fefea8423976b00015cbd36',
				title: this.articleTitle,
				content: html,
				category_id: '5fefea8264635100014b22b6'
			};
			const data = await article_insert_API({ name: 'insertOrEditArticle', data: params });
			console.log(data);
			if(data.code === 200) {
				uni.showToast({
					title: data.msg
				})
			}
			else {
				uni.showToast({
					title: data.msg,
					icon: 'none'
				})
			}
			uni.hideLoading();
		}
	}
};
</script>

<style lang="scss">
.rich-text-editor-box {
	background-color: #ffffff;
	height: 100vh;
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
	.rich-text-box {
		padding: 20rpx;
		height: calc(100vh - 80rpx);
		display: flex;
		flex-direction: column;
		.article-title {
			border-bottom: 1px solid #f0f0f0;
			padding: 10rpx 0;
			font-weight: 900;
			font-size: 40rpx;
			height: 80rpx;
		}
		.eidtor-content {
			margin-top: 20rpx;
			flex: 1;
		}
	}
}
</style>
