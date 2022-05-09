
const cartDadosState = () => {
	return {
		typeSideBar: null,
		showSideBar: false
	}
}

export default {
	namespaced: true,
	state: cartDadosState(),
	getters: {},
	mutations: {
		resetState(state) {
			Object.assign(state, cartDadosState())
		},
		setTypeSideBar(state, payload) {
			state.typeSideBar = payload;
		},
		setShowSideBar(state, payload) {
			state.showSideBar = payload;
		}
	},
	actions: {
	}
}