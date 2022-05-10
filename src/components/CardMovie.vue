<template>
	<div class="card-container">
		<div class="border-card">
			<div class="img-card">
				<i class="fa-solid fa-heart" @click="addFavorite"></i>
				<img src="" alt="">
				<p>{{ data.data }}</p>
			</div>
			<div class="info-card d-flex flex-column col-md-12 align-items-center mt-3">
				<b>{{ data.nomeFilme }}</b>
				<div class="row mb-2 align-items-center">
					<i class="fa-solid fa-star"></i>
					<b>{{ data.pontos }}</b>
					&nbsp;
					<p class="m-0 p-0">{{ data.genero }}</p>
				</div>
				<p class="m-1">{{ `R$ ${data.preco}` }}</p>
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
	methods: {
		addFavorite() {

		}
	}
}
</script>

<style>

</style>