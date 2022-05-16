<template>
	<div class="d-flex container-finalizar justify-content-center">
		<div class="container pt-5 mb-5">
			<h2 class="mb-5">Finalizar Compra</h2>
			<div ref="form" class="row justify-content-between">
				<div class="col-md-6">
					<input 
						v-model="nome" 
						class="col-md-12 mb-4" 
						type="text" 
						name="nome" 
						placeholder="Nome Completo"
						v-validate="{ 'required': true }"
					>
					<div class="d-flex justify-content-between mb-4">
						<input 
							v-model="cpf" 
							@input="mask('###.###.###-##', $event, 'cpf')" 
							maxlength="14" 
							class="col-md-6" 
							type="text" 
							name="cpf" 
							placeholder="CPF"
							v-validate="{ 'required': true }"
						>
						<input 
							v-model="celular" 
							@input="mask('## #####-####', $event, 'celular')" 
							maxlength="13" 
							class="col-md-6" 
							type="text" 
							name="celular" 
							placeholder="Celular"
							v-validate="{ 'required': true }"
						>
					</div>
					<input 
						v-model="email" 
						class="col-md-12 mb-4" 
						type="text" 
						name="email" 
						placeholder="E-mail"
						v-validate="{ 'required': true }"
					>
					<div class="d-flex justify-content-between mb-4">
						<input 
							v-model="cep" 
							@input="mask('##.###-###', $event, 'cep')" 
							maxlength="10" 
							class="col-md-5" 
							type="text" 
							name="cep" 
							placeholder="CEP"
							v-validate="{ 'required': true }"
						>
						<input 
							v-model="endereco" 
							class="col-md-7" 
							type="text" 
							maxlength="150" 
							name="endereco" 
							placeholder="Endereço"
							v-validate="{ 'required': true }"
						>
					</div>
					<div class="d-flex justify-content-between mb-4">
						<input 
							v-model="cidade" 
							class="col-md-6" 
							type="text" 
							name="cidade" 
							maxlength="50" 
							placeholder="Cidade"
							v-validate="{ 'required': true }"
						>
						<input 
							v-model="estado" 
							class="col-md-6" 
							type="text" 
							name="estado" 
							maxlength="2" 
							placeholder="Estado"
							v-validate="{ 'required': true }"
						>
					</div>
				</div>

				<div class="col-md-5 d-flex flex-column p-0 m-0">
					 <table class="mb-2">
						<tr>
							<th class="col-md-2 pl-0">Imagem</th>
							<th class="col-md-5">Nome</th>
							<th class="col-md-1">Qtd</th>
							<th class="col-md-2">Preço</th>
						</tr>
						<tr class="line" v-for="(dado, index) in listCart" :key="index">
							<td class="col-md-2 pl-0"><img :src="`https://image.tmdb.org/t/p/w220_and_h330_face/${dado.backdrop_path}`" alt=""></td>
							<td class="col-md-5"><p>{{ dado.original_title }}</p></td>
							<td class="col-md-1"><p>{{ dado.qtde }}</p></td>
							<td class="col-md-3"><p>{{ `R$: ${dado.preco * dado.qtde}` }}</p></td>
							<td class="col-md-1 pr-0"><i @click="deleteFromListCart(index)" class="fa-solid fa-trash"></i></td>
						</tr>						
					</table>
					<div>
						<div class="d-flex mb-3 mt-5 justify-content-between align-items-center">
							<h5>Total:</h5>
							<h4>{{ `R$ ${qtdeTotal}` }}</h4>
						</div>
						<button @click="finalizar" class="btnPrimary mb-5 col-md-12">
							Finalizar Compra
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import generalMixin from '@/mixins/generalMixin';

export default {
	mixins: [
		generalMixin
	],
	computed: {
		showModal: {
			get() {
				return this.$store.state.showModal;
			},
			set(value) {
				this.$store.commit('setShowModal', value);
			}
		},
		listCart: {
			get() {
				return this.$store.state.listCart;
			},
			set(value) {
				this.$store.commit('setListCart', value);
			}
		},
		qtdeTotal: {
			get() {
				return this.$store.state.qtdeTotal;
			},
			set(value) {
				this.$store.commit('setQtdeTotal', value);
			}
		},
		nome: {
			get() {
				return this.$store.state.dataDados.nome;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'nome', value: value });
			}
		},
		cpf: {
			get() {
				return this.$store.state.dataDados.cpf;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'cpf', value: value });
			}
		},
		celular: {
			get() {
				return this.$store.state.dataDados.celular;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'celular', value: value });
			}
		},
		email: {
			get() {
				return this.$store.state.dataDados.email;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'email', value: value });
			}
		},
		cep: {
			get() {
				return this.$store.state.dataDados.cep;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'cep', value: value });
			}
		},
		endereco: {
			get() {
				return this.$store.state.dataDados.endereco;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'endereco', value: value });
			}
		},
		cidade: {
			get() {
				return this.$store.state.dataDados.cidade;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'cidade', value: value });
			}
		},
		estado: {
			get() {
				return this.$store.state.dataDados.estado;
			},
			set(value) {
				this.$store.commit('setDataDados', { key: 'estado', value: value });
			}
		}
	},
	data() {
		return {
		}
	},
	methods: {
		mask(mascara, documento, key) {
            var i = documento.target.value.length;
            var masc = mascara[i];
        
            if (masc && masc != '#'){
				let value = documento.target.value + masc.substring(0,1);
                this.$store.commit('setDataDados', { key: key, value: value }); 
            }
        },
		finalizar() {
			this.$validator.validateAll().then(isValid => {
				if (isValid) {
					this.showModal = true;
				} else {
					alert('Todos os campos devem ser preenchidos')
				}
			})
		},
		clearDataEndereco() {
			this.endereco = null;
			this.cidade = null;
			this.estado = null;

		},
		setEndereco(conteudo) {
			this.endereco = conteudo.logradouro;
			this.cidade = conteudo.localidade;
			this.estado = conteudo.uf;
		},
		getEndereco(cep) {
			cep = cep.replaceAll(/([-.]+)/g, '');
			let url = `https://viacep.com.br/ws/${cep}/json/`;
			axios.get(url).then(resp => {
				this.setEndereco(resp.data);
			}).catch(e => {
				this.clearDataEndereco();
				alert("CEP não encontrado.");
			})
		},
		deleteFromListCart(index) {
            this.listCart = this.listCart.filter((elem, idx) => index !== idx);
            this.calTotalItens();
        }
	},
	watch: {
		cep(newValue, oldValue) {
			if (newValue.length === 10) {
				this.getEndereco(newValue);
			}
		}
	}
}
</script>

<style scoped>
.col-md-6 {
	flex: 0 0 47%;
}
.col-md-5 {
	flex: 0 0 36%;
}
</style>