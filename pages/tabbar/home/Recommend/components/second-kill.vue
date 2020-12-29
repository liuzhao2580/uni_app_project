<template>
	<view class="second-kill-box borderRadius paddingTRBL">
		<view class="header-box">
			<view class="title-box">
				<text class="title">限时秒杀</text>
				<text class="how-time">{{ howTime }}点场</text>
				<view class="time"><u-count-down :timestamp="countDown" bg-color="#ff2e24" color="#fff"></u-count-down></view>
			</view>
			<view class="more" @click="moreShow = true">
				<text class="title">更多</text>
				<u-icon name="arrow-right-double"></u-icon>
			</view>
		</view>
		<view class="sk-box">
			<goods-card size="small" :goodsCardList='skillList'></goods-card>
		</view>
		<!-- 更多按钮点击触发模态框 -->
		<u-modal v-model="moreShow" content="开发中"></u-modal>
	</view>
</template>

<script>
import { mapGetters } from 'vuex'
import { RandomMath } from '@/common/utils/randomMath.js'
export default {
	data() {
		return {
			countDown: null,
			howTime: null,
			moreShow: false,
			setInter: null,
			saveSkillList: []
		};
	},
	computed:{
		...mapGetters({
			skillListData: 'home/skillListData'
		}),
		skillList() {
			return this.skillListData.slice(0,2)
		}
	},
	created() {
		this.timeInter();
	},
	methods: {
		// 秒杀计时
		timeInter() {
			// 获取小时
			const getHours = new Date().getHours();
			// 获取当前的时间
			const getTime = new Date().getTime();
			// 距离的时间
			let setTime;
			// 0-8 点的秒杀
			if (0 <= getHours && getHours < 8) {
				this.howTime = 0;
				setTime = new Date();
				setTime.setHours(8, 0, 0, 0);
				this.countDown = (setTime.getTime() - getTime) / 1000;
			}
			// 8-12 点的秒杀
			else if (8 <= getHours && getHours < 12) {
				this.howTime = 8;
				setTime = new Date();
				setTime.setHours(12, 0, 0, 0);
				this.countDown = (setTime.getTime() - getTime) / 1000;
			}
			// 12-16 点的秒杀
			else if (12 <= getHours && getHours < 16) {
				this.howTime = 12;
				setTime = new Date();
				setTime.setHours(16, 0, 0, 0);
				this.countDown = (setTime.getTime() - getTime) / 1000;
			}
			// 16-20 点的秒杀
			else if (16 <= getHours && getHours < 20) {
				this.howTime = 16;
				setTime = new Date();
				setTime.setHours(20, 0, 0, 0);
				this.countDown = (setTime.getTime() - getTime) / 1000;
			}
			// 20-0 点的秒杀
			else if (20 <= getHours && getHours < 24) {
				this.howTime = 20;
				setTime = new Date();
				setTime.setHours(24, 0, 0, 0);
				this.countDown = (setTime.getTime() - getTime) / 1000;
			}
		},
		moreBtn() {
			console.log(123)
		},
	},
	beforeDestroy() {
		clearInterval(this.setInter)
	}
};
</script>

<style lang="scss">
.second-kill-box {
	margin: 20rpx 0;
	background-color: #fff;
	.header-box {
		display: flex;
		justify-content: space-between;
		.title-box {
			width: 60%;
			display: flex;
			align-items: center;
			.title {
				font-weight: 900;
				font-size: 32rpx;
			}
			.how-time {
				margin: 0 20rpx;
				font-size: 28rpx;
				color: $base-color;
			}
		}
	}
	.more {
		.title {
			margin-right: 10rpx;
		}
	}
}
</style>
