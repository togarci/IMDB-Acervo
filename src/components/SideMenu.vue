<template>
    <div>
        <div v-if="showSideBar" class="side-menu d-flex flex-column">
            <div class="d-flex p-3 justify-content-between mt-3">
                <h5 v-if="typeSideBar === 'C'">Meu Carrinho</h5>
                <h5 v-else-if="typeSideBar === 'F'">Meus Favoritos</h5>
                <p class="esvaziar">Esvaziar</p>
            </div>

            <div class="d-flex pl-3 pr-3 align-items-center info">
                <div class="d-flex align-items-center col-md-6 p-0 m-0">
                    <img src="" alt="">
                    &nbsp;
                    <p>Nome do Filme</p>
                </div>
                <div class="d-flex justify-content-between col-md-6">
                    <p>R$ 9,99</p>
                    <i v-if="typeSideBar === 'F'" class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>

            <div v-if="typeSideBar === 'C'" class="col-md-3 p-3 end-info">
                <div class="d-flex mb-3 justify-content-between align-items-center">
                    <h5>Total:</h5>
                    <h4>R$ 19,98</h4>
                </div>
                <button @click="finalizarLink" class="btnPrimary col-md-12">
                    Finalizar Compra
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'side-menu',
    computed: {
        ...mapState('cartDados', ['typeSideBar', 'showSideBar'])
    },
    methods: {
        finalizarLink() {
            this.$store.commit('cartDados/setShowSideBar', false);
            this.$router.push({ name: 'Finalizar' });
        }
    }
}
</script>

<style>

</style>