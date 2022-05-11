<template>
	<div class="card-container">
		<div class="border-card">
			<div class="img-card">
				<i class="fa-solid fa-heart" @click="addFavorite"></i>
				<img :src="`https://image.tmdb.org/t/p/w220_and_h330_face/${data.backdrop_path}`" alt="">
				<p>{{ convertData(data.release_date) }}</p>
			</div>
			<div class="info-card d-flex flex-column col-md-12 align-items-center mt-3">
				<b>{{ `${data.original_title.substring(0, 20)}` }}</b>
				<div class="row mb-2 align-items-center">
					<i class="fa-solid fa-star"></i>
					<b>{{ data.vote_average }}</b>
					&nbsp;
					<p class="m-0 p-0 align-self-end">{{ setGenre(data.genre_ids[0]) }}</p>
				</div>
				<p class="m-1">{{ `R$ 79,99` }}</p>
			</div>
		</div>
		<button class="btnPrimary col-md-12">
			Adicionar
		</button>
	</div>
</template>

<script>
export default {
	name: 'card-movie',
	props: {
		data: {
			type: Object,
			default: () => {}
		}		
	},
	computed: {
		listGenres: {
			get() {
				return this.$store.state.listGenres;
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
		addFavorite() {

		},
		convertData(data) {
			data = data.split('-');
			return `${data[2]} de ${this.months[Number(data[1]) - 1]}, ${data[0]}`
		},
		setGenre(idGenre) {
			let genre = this.listGenres.find(elem => elem.id === idGenre);
			genre = genre.name;
			return genre;
		}
	}
}
</script>

<style>

</style>