<template>
	<header class="d-flex justify-content-between col-md-12 pl-5 pr-5 header">
		<div class="row ml-2 align-items-center">
			<img src="@/assets/logo.png" @click="$router.push({ path: '/' })">
		</div>
		<div class="col-md-8 row align-items-center justify-content-center">
			<div class="input-search col-md-7">
				<input 
					class="col-md-12"
					type="text" 
					v-model="searchValue" 
					@submit="getSearchMovie"
					placeholder="Pesquisa"
				>
				<i class="fas fa-search" @click="getSearchMovie"></i>
			</div>
		</div>
		<div class="row h-100 align-items-center">
			<div class="col-md-5">
				<i class="fa-solid fa-heart" @click="openFavorite"></i>
			</div>
			<div class="cart d-flex h-100 align-items-center col-md-5">
				<i class="fa-solid fa-cart-shopping" @click="openCart"></i>
				<div class="qtd-cart row align-items-center justify-content-center">{{ qtde }}</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'nav-header',
	data() {
		return {
			searchValue: null,
			qtde: 3
		}
	},
	computed: {
		...mapState('cartDados', ['showSideBar'])
	},
	methods: {
		getSearchMovie() {

		},
		openCart() {
			this.$store.commit('cartDados/setShowSideBar', !this.showSideBar);
			this.$store.commit('cartDados/setTypeSideBar', 'C');
		},
		openFavorite() {
			this.$store.commit('cartDados/setShowSideBar', !this.showSideBar);
			this.$store.commit('cartDados/setTypeSideBar', 'F');
		}
	}
}
</script>

<style>
</style>