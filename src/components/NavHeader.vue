<template>
	<header class="d-flex justify-content-between pl-5 pr-5 header">
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
				<div class="qtd-cart row align-items-center justify-content-center">{{ dataItems.length }}</div>
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
			searchValue: null
		}
	},
	computed: {
		showSideBar: {
			get() {
				return this.$store.state.showSideBar;
			},
			set(value) {
				this.$store.commit('setShowSideBar', value);
			}
		},
		dataItems: {
			get() {
				return this.$store.state.dataItems;
			}
		}
	},
	methods: {
		getSearchMovie() {

		},
		openCart() {
			this.showSideBar = !this.showSideBar;
			this.$store.commit('setTypeSideBar', 'C');
		},
		openFavorite() {
			this.showSideBar = !this.showSideBar;
			this.$store.commit('setTypeSideBar', 'F');
		}
	}
}
</script>

<style>
</style>