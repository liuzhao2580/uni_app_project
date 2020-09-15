<template>
	<view>
		<!-- 自定义导航栏组件 -->
		<navbar></navbar>
		<!-- 自定义tab组件 -->
		<tab :tabList='tabList'></tab>
	</view>
</template>

<script>
	import {tabList_api} from '@/common/api/home'
	export default {
		data() {
			return {
				tabList: []
			};
		},
		created(){
			this.init_tabList()
		},
		methods:{
			// 初始化tab的数据
			async init_tabList() {
				const data = await tabList_api({name: "tabList"})
				this.tabList = data
			}
		}
	}
</script>

<style lang="scss">

</style>
