import { createStore } from 'vuex';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		typeSideBar: null,
		showSideBar: false,
		showModal: false,
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
		],
		listGenres: []
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
		setDataItems(state, payload) {
			state.dataItems = payload;
		},
		setShowModal(state, payload) {
			state.showModal = payload;
		},
		setListGenres(state, payload) {
			state.listGenres = payload;
		}
	},
	actions: {
	},
	modules: {
	}
})