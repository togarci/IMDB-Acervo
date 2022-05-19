<template>
	<div class="d-flex justify-content-center">
		<div class="container row pt-5">
			<div v-for="(item, index) in dataItems" :key="index" class="col-md-3 mb-4">
				<card-movie :data="item"/>
			</div>
			
		</div>
	</div>
</template>

<script>
import CardMovie from '@/components/CardMovie.vue';
import { movieService } from '@/services/movieService';

const serviceMovie = new movieService();
export default {
	components: {
		CardMovie
	},
	computed: {
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
		async getGenre() {
            await serviceMovie.getGenre()
            .then(resp => this.$store.commit('setListGenres', resp.genres))
            .catch(e => this.$toasted.show('Erro ao carregar dados'))
        },
		getMovies() {
			serviceMovie.getMovies()
			.then(response => {
				response.results.forEach(elem => elem.preco = (Math.random() * (100 - 10) + 10).toFixed(2));
				this.dataItems = response.results;
			})
			.catch(e => this.$toasted.show('Erro ao carregar dados'))
		}
	},
	mounted() {
		this.getGenre();
		this.getMovies();
	}
}
</script>

<style>

</style>