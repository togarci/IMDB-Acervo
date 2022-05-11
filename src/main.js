import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes'
import store from './store/store';
import Toasted from 'vue-toasted';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/assets/package.css';
import '@/assets/sass/main.scss';
import 'bootstrap/scss/bootstrap.scss';

library.add([faUserCircle, faSignOutAlt])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Toasted);

const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'active'
});

new Vue({
	store,
	el: '#app',
	render: h => h(App),
  	router
})
