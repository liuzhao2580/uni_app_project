const state = {
	activeCurrent: 0,
	skillListData: [], // 首页秒杀的数据
	tabListData: {}, // 首页 tab栏 的数据
}

const mutations = {
	/* tab 导航栏的改变 */
	MUT_changeCurrent(state, active) {
		state.activeCurrent = active
	},
	// 存储 tab 栏的数据
	MUT_saveTabListData(state, data) {
		state.tabListData[state.activeCurrent] = data
		// 用来解决 vue 无法监听数据变化的问题
		state.tabListData = Object.assign({}, state.tabListData)
	},
	// 首页秒杀的数据
	MUT_skillListData(state, data) {
		state.skillListData = data
	}
}

const actions = {
	ACT_changeCurrent({
		commit
	}, active) {
		commit("MUT_changeCurrent", active)
	},
	// 存储 tab 栏的数据
	ACT_saveTabListData({
		commit
	}, data) {
		commit('MUT_saveTabListData', data)
	},
	// 首页秒杀的数据
	ACT_skillListData({
		commit
	}, data) {
		commit("MUT_skillListData", data)
	}
}

const getters = {
	activeCurrent: state => state.activeCurrent,
	tabListData: state => state.tabListData,
	skillListData: state => state.skillListData,
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
