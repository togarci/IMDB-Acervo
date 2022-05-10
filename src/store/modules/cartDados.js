
const cartDadosState = () => {
	return {
		typeSideBar: null,
		showSideBar: false,
		dataItems: [
			{
				img: null,
				nomeFilme: 'Nome do Filme',
				preco: '9.99'
			},
			{
				img: null,
				nomeFilme: 'Nome do Filme',
				preco: '9.99'
			}
		]
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
		},
		setDataItems(state, payload) {
			state.dataItems = payload;
		}
	},
	actions: {
	}
}