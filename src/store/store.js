import { createStore } from 'vuex';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		typeSideBar: null,
		showSideBar: false,
		showModal: false,
		listFavorites: [],
		listCart: [],
		listGenres: [],
		qtdeTotal: 0.00,
		dataDados: {
			nome: null,
			cpf: null,
			celular: null,
			email: null,
			cep: null,
			endereco: null,
			cidade: null,
			estado: null
		},
		dataItems: []
	},
	getters: {
	},
	mutations: {
		setTypeSideBar(state, payload) {
			state.typeSideBar = payload;
		},
		setShowSideBar(state, payload) {
			state.showSideBar = payload;
		},
		setShowModal(state, payload) {
			state.showModal = payload;
		},
		setListGenres(state, payload) {
			state.listGenres = payload;
		},
		setListFavorites(state, payload) {
			state.listFavorites = payload;
		},
		setListCart(state, payload) {
			state.listCart = payload;
		},
		setQtdeTotal(state, payload) {
			state.qtdeTotal = payload;
		},
		setDataDados(state, payload) {
			state.dataDados[payload.key] = payload.value;
		},
		resetDataDados(state, payload) {
			for (var key in state.dataDados) {
				state.dataDados[key] = null;
			}
		},
		setDataItems(state, payload) {
			state.dataItems = payload;
		}
	},
	actions: {
	},
	modules: {
	}
})