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
export default {
	components: {
		CardMovie
	},
	data() {
		return {
			dataItems: [
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				},
				{
					data: '7 de Janeiro, 2019',
					nomeFilme: 'Nome do Filme',
					pontos: 7,
					genero: 'Gênero',
					preco: '79,99'
				}
			]
		}
	}
}
</script>

<style>

</style>