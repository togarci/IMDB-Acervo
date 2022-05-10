<template>
	<div class="d-flex container-finalizar justify-content-center">
		<div class="container pt-5">
			<h2 class="mb-5">Finalizar Compra</h2>
			<div class="row justify-content-between">
				<div class="col-md-6">
					<input v-model="dataDados.nome" class="col-md-12 mb-4" type="text" name="nome" placeholder="Nome Completo">
					<div class="d-flex justify-content-between mb-4">
						<input v-model="dataDados.cpf" @input="mask('###.###.###-##', $event, 'cpf')" maxlength="14" class="col-md-6" type="text" name="cpf" placeholder="CPF">
						<input v-model="dataDados.celular" @input="mask('## #####-####', $event, 'celular')" maxlength="13" class="col-md-6" type="text" name="celular" placeholder="Celular">
					</div>
					<input v-model="dataDados.email" class="col-md-12 mb-4" type="text" name="email" placeholder="E-mail">
					<div class="d-flex justify-content-between mb-4">
						<input v-model="dataDados.cep" @input="mask('##.###-###', $event, 'cep')" maxlength="10" class="col-md-5" type="text" name="cep" placeholder="CEP">
						<input v-model="dataDados.endereco" class="col-md-7" type="text" maxlength="150" name="endereco" placeholder="Endereço">
					</div>
					<div class="d-flex justify-content-between mb-4">
						<input v-model="dataDados.cidade" class="col-md-6" type="text" name="cidade" maxlength="50" placeholder="Cidade">
						<input v-model="dataDados.estado" class="col-md-6" type="text" name="estado" maxlength="2" placeholder="Estado">
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
						<tr class="line" v-for="(dado, index) in dataFinalizar" :key="index">
							<td class="col-md-2 pl-0"><img src="" alt=""></td>
							<td class="col-md-5"><p>{{ dado.nome }}</p></td>
							<td class="col-md-1"><p>{{ dado.qtd }}</p></td>
							<td class="col-md-3"><p>{{ `R$: ${dado.preco}` }}</p></td>
							<td class="col-md-1 pr-0"><i @click="deleteDataFinalizar(index)" class="fa-solid fa-trash"></i></td>
						</tr>						
					</table>
					<div>
						<div class="d-flex mb-3 mt-5 justify-content-between align-items-center">
							<h5>Total:</h5>
							<h4>R$ 19,98</h4>
						</div>
						<button @click="finalizar" class="btnPrimary col-md-12">
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


export default {
	data() {
		return {
			dataDados: {
				nome: null,
				cpf: null,
				celular: null,
				email: null,
				cep: null,
				endereco: null,
				cidade: null,
				estado: null
			},
			dataFinalizar: [
				{
					img: null,
					nome: 'Nome do Filme',
					qtd: 1,
					preco: '9,99'
				},
				{
					img: null,
					nome: 'Nome do Filme',
					qtd: 1,
					preco: '9,99'
				}
			]
		}
	},
	methods: {
		mask(mascara, documento, name) {
            var i = documento.target.value.length;
            var masc = mascara[i];
        
            if (masc && masc != '#'){
                this.dataDados[name] = documento.target.value + masc.substring(0,1);
            }
        },
		deleteDataFinalizar(index) {
			this.dataFinalizar = this.dataFinalizar.filter((e, i) => i !== index)
		},
		finalizar() {

		},
		clearDataEndereco() {
			this.dataDados.endereco = null;
			this.dataDados.cidade = null;
			this.dataDados.estado = null;

		},
		setEndereco(conteudo) {
			this.dataDados.endereco = conteudo.logradouro;
			this.dataDados.cidade = conteudo.localidade;
			this.dataDados.estado = conteudo.uf;
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
		}
	},
	watch: {
		'dataDados.cep': function(newValue, oldValue) {
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