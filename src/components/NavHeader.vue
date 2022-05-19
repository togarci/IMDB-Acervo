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
				<div class="qtd-cart row align-items-center justify-content-center">{{ listCart.length }}</div>
			</div>
		</div>
	</header>
</template>

<script>
import { movieService } from '@/services/movieService';

const serviceMovie = new movieService();
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
		listFavorites: {
			get() {
				return this.$store.state.listFavorites;
			}
		},
		listCart: {
			get() {
				return this.$store.state.listCart;
			}
		},
		dataItems: {
			get() {
				return this.$store.state.dataItems;
			},
			set(value) {
				this.$store.commit('setDataItems', value);
			}
		}
	},	
	methods: {
		openCart() {
			this.showSideBar = !this.showSideBar;
			this.$store.commit('setTypeSideBar', 'C');
		},
		openFavorite() {
			this.showSideBar = !this.showSideBar;
			this.$store.commit('setTypeSideBar', 'F');
		},
		getSearchMovie() {
			if (this.searchValue) {
				serviceMovie.getSearchMovie(this.searchValue).then(resp => {
					resp.results.forEach(elem => elem.preco = (Math.random() * (100 - 10) + 10).toFixed(2));
					this.dataItems = resp.results;
					this.searchValue = null;
				}).catch(e => this.$toasted.show('Erro na busca'));
			}
		}
	}
}
</script>

<style>
</style>