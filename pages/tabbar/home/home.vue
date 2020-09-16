<template>
	<layout>
		<!-- 自定义tab组件 -->
		<tab :tabList="tabList"></tab>
	</layout>
</template>

<script>
import layout from '@/layout/layout.vue';
import tab from './tab/tab.vue'
import { tabList_api } from '@/common/api/home';
export default {
	components: {
		layout,
		tab
	},
	data() {
		return {
			tabList: []
		};
	},
	created() {
		this.init_tabList();
	},
	methods: {
		// 初始化tab的数据
		async init_tabList() {
			const data = await tabList_api({ name: 'tabList' });
			this.tabList = data;
		}
	}
};
</script>

<style lang="scss"></style>
