<template>
	<div class="card-container">
		<div class="border-card">
			<div class="img-card">
				<i class="fa-solid fa-heart" @click="addFavorite"></i>
				<img src="" alt="">
				<p>7 de Janeiro, 2019</p>
			</div>
			<div class="info-card d-flex flex-column col-md-12 align-items-center mt-3">
				<b>Nome do Filme</b>
				<div class="row mb-2 align-items-center">
					<i class="fa-solid fa-star"></i>
					<b>7</b>
					&nbsp;
					<p class="m-0 p-0">Gênero</p>
				</div>
				<p class="m-1">R$ 79,99</p>
			</div>
		</div>
		<button class="btnPrimary col-md-12">
			Adicionar
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		addFavorite() {

		}
	}
}
</script>

<style>

</style>