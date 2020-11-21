<template>
	<swiper class="swiper-box" :current='activeCurrent' @change='swiperChange'>
		<swiper-item v-for="item in tabList" :key="item.id" >
			<view class="swiper-item">{{ item.name}}</view>
		</swiper-item>
	</swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	props: {
		tabList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			activeCurrent: 'home/activeCurrent'
		})
	},
	mounted() {},
	methods:{
		...mapActions({
			ACT_changeCurrent: "home/ACT_changeCurrent"
		}),
		// swiper 的改变事件
		swiperChange(e) {
			const {source, current} = e.detail
			console.log(source, current);
			// 说明是用户滑动的时候改变
			if(source == 'touch') this.ACT_changeCurrent(current)
		}
	}
}
</script>

<style lang="scss">
.swiper-box {
	height: 100%;
	box-sizing: border-box;
}
</style>
