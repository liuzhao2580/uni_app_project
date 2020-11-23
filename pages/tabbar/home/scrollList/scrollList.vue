<template>
	<swiper class="swiper-box" :current='activeCurrent' @change='swiperChange'>
		<swiper-item v-for="item in tabList" :key="item.id" >
			<view class="swiper-item">
				<template v-if="item.name === '推荐'">
					<Recommend />
				</template>
				<template v-else>
					<Common :gainItem='item'/>
				</template>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Recommend from '../Recommend/Recommend'
import Common from '../Common/Common'
export default {
	components:{
		Recommend,
		Common
	},
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
	.swiper-item {
		width: 100%;
		height: 100%;
	}
}
</style>
