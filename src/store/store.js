import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cartDados from './modules/cartDados';

export default new Vuex.Store({
	modules: {
		cartDados
	}
});