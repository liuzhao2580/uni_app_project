const state = {
	activeCurrent: 0
}

const mutations = {
	MUT_changeCurrent(state, active) {
		state.activeCurrent = active
	}
}

const actions = {
	ACT_changeCurrent({commit}, active) {
		commit("MUT_changeCurrent", active)
	}
}

const getters = {
	activeCurrent:state => state.activeCurrent
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}