<template>
	<div class="d-flex justify-content-center">
		<div class="container row pt-5">
			<div class="col-md-3 mb-4">
				<card-movie/>
			</div>
			<div class="col-md-3 mb-4">
				<card-movie/>
			</div>
			<div class="col-md-3 mb-4">
				<card-movie/>
			</div>
			<div class="col-md-3 mb-4">
				<card-movie/>
			</div>
			<div class="col-md-3 mb-4">
				<card-movie/>
			</div>
		</div>
	</div>
</template>

<script>
import CardMovie from '@/components/CardMovie.vue';
export default {
	components: {
		CardMovie
	}
}
</script>

<style>

</style>