<template>
	<view class="article-editor-box">
		
		<!-- 标题 -->
		<input class="article-title" type="text" v-model="articleTitle" placeholder="请输入标题" :maxlength="50" />
		<!-- 内容 -->
		<editor id="editor" class="eidtor-content" placeholder="请输入内容" @ready="onEditorReady"></editor>
	</view>
</template>

<script>
import {article_insert_API} from '@/common/api/article.js'
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
		// 获取 文章的内容
		gainArticle() {
			this.editorCtx.getContents({
				success: (res) => {
					console.log(res)
					const {html} = res
					this.sendAricle(html)
					this.$emit("changeFlag")
				}
			})
		},
		// 发送添加文章请求
		async sendAricle(html) {
			uni.showLoading({
			    title: '请等待...'
			});
			const params = {
				user_id: "5fefea8423976b00015cbd36",
				title: this.articleTitle,
				content: html,
				category_id: "5fefea8264635100014b22b6"
			}
			const data = await article_insert_API({name: 'insertOrEditArticle', data:params})
			console.log(data);
			// if(data.code === 200) {
			// 	uni.showToast({
			// 	    title: data.msg,
			// 	    duration: 2000,
			// 			icon: 'success'
			// 	});
			// }
			// else {
			// 	uni.showToast({
			// 	    title: data.msg,
			// 	    duration: 2000,
			// 			icon: ''
			// 	});
			// }
			uni.hideLoading();
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
