<template>
	<div v-if="showModal" class="modal-container d-flex justify-content-center align-items-center" @click="closeModal($event)">
		<div class="modal m-0 pt-3 pb-3 d-flex flex-column align-item-center col-md-4">
			<h3 class="h-25">{{ `Obrigado ${nome}!` }}</h3>
			<div class="h-50 d-flex align-items-center justify-content-center">
				Sua compra foi finalizada com sucesso !
			</div>
			
			<div class="d-flex h-25 align-items-end">
				<button @click="irParaLoja" class="btnPrimary col-md-12">Ir para loja</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'modal',
	computed: {
		showModal: {
			get() {
				return this.$store.state.showModal;
			},
			set(value) {
				this.$store.commit('setShowModal', value);
			}
		},
		nome: {
			get() {
				return this.$store.state.dataDados.nome;
			}
		}
	},
	methods: {
		clearAllData() {
			this.showModal = false;
			this.$store.commit('setListCart', []);
			this.$store.commit('setQtdeTotal', 0.00);
			this.$store.commit('resetDataDados');
		},
		closeModal(event) {
			if (event.target.className.includes('modal-container')) {
				this.clearAllData();
			}
		},
		irParaLoja() {
			this.$router.push({ path: '/' });
			this.clearAllData();
		}
		
	}
}
</script>

<style>

</style>