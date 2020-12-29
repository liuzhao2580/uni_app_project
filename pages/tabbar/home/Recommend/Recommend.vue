<template>
	<view class="recommend-box">
		<!-- 导航菜单 -->
		<nav-list :navListData="navListData"></nav-list>
		<!-- 秒杀活动 -->
		<second-kill></second-kill>
		<!-- 猜你喜欢 -->
		<recommend-list></recommend-list>
	</view>
</template>

<script>
import navList from './components/nav-list.vue';
import secondKill from './components/second-kill.vue'
import recommendList from './components/recommend-list.vue'
export default {
	components: {
		navList,
		secondKill,
		recommendList
	},
	data() {
		return {
			navListData: [
				{
					title: '限时秒杀',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/6cd41740-49d6-11eb-b997-9918a5dda011.png'
				},
				{
					title: '数码电器',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/6b62d400-49d6-11eb-bd01-97bc1429a9ff.png'
				},
				{
					title: '充值缴费',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/68c25f90-49d6-11eb-8a36-ebb87efcf8c0.png'
				},
				{
					title: '潮流服饰',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/681cf7d0-49d6-11eb-a16f-5b3e54966275.png'
				},
				{
					title: '签到领钱',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/6ab72ab0-49d6-11eb-a16f-5b3e54966275.png'
				},
				{
					title: '9块9包邮',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/6769ad60-49d6-11eb-a16f-5b3e54966275.png'
				},
				{
					title: '今日爆款',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/69784210-49d6-11eb-a16f-5b3e54966275.png'
				},
				{
					title: 'VIP会员',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-minions/6c1fbb60-49d6-11eb-a16f-5b3e54966275.png'
				}
			]
		};
	},
	mounted() {
		console.log(123);
	},
	methods:{
		
	}
};
</script>

<style lang="scss">

</style>
