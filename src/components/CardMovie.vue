<template>
	<div class="card-container">
		<div class="border-card">
			<div class="img-card">
				<i :id="`favorite-icon-${data.id}`" class="fa-solid fa-heart" @click="addFavorite($event)"></i>
				<img v-if="data.backdrop_path" :src="`https://image.tmdb.org/t/p/w220_and_h330_face/${data.backdrop_path}`">
				<div v-else class="d-flex h-100 col-md-12 align-items-center justify-content-center ">
					<i class="fas fa-image"></i>
				</div>
				<p>{{ convertData(data.release_date) }}</p>
			</div>
			<div class="info-card d-flex flex-column col-md-12 align-items-center mt-3">
				<b class="tooltip-container">
					{{ `${data.original_title.substring(0, 20)}` }}
					<span class="tooltiptext">{{ data.original_title }}</span>
				</b>
				<div class="row mb-2 align-items-center">
					<i class="fa-solid fa-star"></i>
					<b>{{ data.vote_average }}</b>
					&nbsp;
					<p class="m-0 p-0 align-self-end">{{ setGenre(data.genre_ids[0]) }}</p>
				</div>
				<p class="m-1">{{ `R$ ${data.preco}` }}</p>
			</div>
		</div>
		<button @click="addCard" class="btnPrimary col-md-12">
			Adicionar
		</button>
	</div>
</template>

<script>
import generalMixin from '@/mixins/generalMixin';

export default {
	name: 'card-movie',
	props: {
		data: {
			type: Object,
			default: () => {}
		}		
	},
	mixins: [
		generalMixin
	],
	computed: {
		listGenres: {
			get() {
				return this.$store.state.listGenres;
			}
		},
		listFavorites: {
			get() {
				return this.$store.state.listFavorites;
			},
			set(value) {
				this.$store.commit('setListFavorites', value);
			}
		},
		listCart: {
			get() {
				return this.$store.state.listCart;
			},
			set(value) {
				this.$store.commit('setListCart', value);
			}
		}
	},
	data() {
		return {
			months: [
				'Janeiro',
				'Fevereiro',
				'Março',
				'Abril',
				'Maio',
				'Junho',
				'Julho',
				'Agosto',
				'Setembro',
				'Outubro',
				'Novembro',
				'Dezembro'
			]
		}
	},
	methods: {
		addFavorite(event) {
			let checkFavoriteInList = this.listFavorites.some(elem => elem.id === this.data.id);
			if (checkFavoriteInList) {
				event.target.style.color = "#FFF";
				this.listFavorites = this.listFavorites.filter(elem => elem.id !== this.data.id);
			} else {
				event.target.style.color = "#DC3545";
				this.listFavorites.push(this.data);
			}
			this.calTotalItens();
		},
		addCard() {
			let checkCardInList = this.listCart.some(elem => elem.id === this.data.id);
			if (checkCardInList) {
				this.listCart.find(elem => {
					if (elem.id === this.data.id) {
						elem.qtde += 1;
					}
				});
				
			} else {
				this.data.qtde = 1;
				this.listCart.push(this.data);
			}
			this.calTotalItens();
		},
		convertData(data) {
			data = data.split('-');
			return `${data[2]} de ${this.months[Number(data[1]) - 1]}, ${data[0]}`
		},
		setGenre(idGenre) {
			let genre = this.listGenres.find(elem => elem.id === idGenre);
			let result = null;
			if (genre) {
				result = genre.name;
			}
			return result;
		}
	}
}
</script>

<style>

</style>