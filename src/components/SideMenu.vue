<template>
    <div>
        <div v-if="showSideBar" class="side-menu d-flex">
            <div class="side" @click="closeSideMenu"></div>
            <div class="menu">
                <div class="d-flex p-3 justify-content-between mt-3">
                    <h5 v-if="typeSideBar === 'C'">Meu Carrinho</h5>
                    <h5 v-else-if="typeSideBar === 'F'">Meus Favoritos</h5>
                    <p @click="clearDadosItens" class="esvaziar">Esvaziar</p>
                </div>

                <div v-for="(dado, index) in dataItems" :key="index" class="d-flex mt-3 pl-3 pr-3 align-items-center info">
                    <div class="d-flex align-items-center col-md-6 p-0 m-0">
                        <img src="" alt="">
                        &nbsp;
                        <p>{{ dado.nomeFilme }}</p>
                    </div>
                    <div class="d-flex justify-content-between col-md-6">
                        <p>{{ `R$ ${dado.preco}` }}</p>
                        <i v-if="typeSideBar === 'F'" class="fa-solid fa-cart-shopping"></i>
                        <i @click="deleteItens(index)" class="fa-solid fa-trash"></i>
                    </div>
                </div>

                <div v-if="typeSideBar === 'C'" class="col-md-3 p-3 end-info">
                    <div class="d-flex mb-3 justify-content-between align-items-center">
                        <h5>Total:</h5>
                        <h4>{{ `R$ ${qtdeTotal}` }}</h4>
                    </div>
                    <button @click="finalizarLink" class="btnPrimary col-md-12">
                        Finalizar Compra
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'side-menu',
    data() {
        return {
            qtdeTotal: '0,00',
        }
    },
    computed: {
        ...mapState('cartDados', ['typeSideBar', 'showSideBar']),
        dataItems: {
            get() {
                return this.$store.state.cartDados.dataItems;
            },
            set(value) {
                this.$store.commit('cartDados/setDataItems', value);
            }
        }
    },
    methods: {
        finalizarLink() {
            this.$store.commit('cartDados/setShowSideBar', false);
            this.$router.push({ name: 'Finalizar' });
        },
        deleteItens(index) {
            this.dataItems = this.dataItems.filter((e, i) => i !== index);
            this.calTotalItens();
        },
        calTotalItens() {
            let total = 0.00;
            this.dataItems.forEach(elem => {
                total += Number(elem.preco);
            });

            this.qtdeTotal = total;
        },
        clearDadosItens() {
            this.dataItems = [];
            this.calTotalItens();
        },
        closeSideMenu() {
            this.$store.commit('cartDados/setShowSideBar', false);
        }
    },
    mounted() {
        this.calTotalItens();
    }
}
</script>

<style>

</style>