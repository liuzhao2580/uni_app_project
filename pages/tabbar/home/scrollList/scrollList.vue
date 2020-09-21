<template>
	<swiper class="swiper-box">
		<swiper-item v-for="item in tabList" :key='item.id'>
			<view class="swiper-item">{{item.name}}-{{text}}</view>
		</swiper-item>
	</swiper>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		props:{
			tabList: {
				type: Array,
				default: ()=> []
			}
		},
		data() {
			return {}
		},
		computed:{
			...mapGetters({
				text: "home/text"
			})
		},
		mounted() {
			console.log(this.text);
		}
	}
</script>

<style lang="scss">
	.swiper-box {
		height: 100%;
		border: 1px solid pink;
		box-sizing: border-box;
	}
</style>
