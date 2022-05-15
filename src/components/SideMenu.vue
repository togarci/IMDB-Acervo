<template>
    <div>
        <div v-if="showSideBar" class="side-menu d-flex">
            <div class="side" @click="closeSideMenu"></div>
            <div class="menu">
                <div class="d-flex p-3 justify-content-between mt-3">
                    <h5 v-if="typeSideBar === 'C'">Meu Carrinho</h5>
                    <h5 v-else-if="typeSideBar === 'F'">Meus Favoritos</h5>
                    <p v-if="typeSideBar === 'C'" @click="clearDadosItens" class="esvaziar">Esvaziar</p>
                </div>

                <template v-if="typeSideBar === 'C'">
                    <div v-for="(dado, index) in listCart" :key="index" class="d-flex mt-3 pl-3 pr-3 align-items-center info">
                        <div class="d-flex align-items-center col-md-6 p-0 m-0">
                            <img :src="`https://image.tmdb.org/t/p/w220_and_h330_face/${dado.backdrop_path}`">
                            &nbsp;
                            <p class="p-1">{{ `${dado.original_title.substring(0, 15)}` }}</p>
                            &nbsp;
                            <p class="p-1">{{ `${dado.qtde}` }}</p>
                        </div>
                        <div class="d-flex justify-content-between col-md-6">
                            <p>{{ `R$ ${(dado.preco * dado.qtde).toFixed(2)}` }}</p>
                            <i @click="deleteFromListCart(index)" class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div v-for="(dado, index) in listFavorites" :key="index" class="d-flex mt-3 pl-3 pr-3 align-items-center info">
                        <div class="d-flex align-items-center col-md-6 p-0 m-0">
                            <img :src="`https://image.tmdb.org/t/p/w220_and_h330_face/${dado.backdrop_path}`">
                            &nbsp;
                            <p class="p-1">{{ `${dado.original_title.substring(0, 15)}` }}</p>
                        </div>
                        <div class="d-flex justify-content-between col-md-6">
                            <p>{{ `R$ ${dado.preco}` }}</p>
                            <i @click="addListCart(dado, index)" class="fa-solid fa-cart-shopping"></i>
                            <i @click="deleteFromListFavorites(index)" class="fa-solid fa-trash"></i>
                        </div>
                    </div>

                </template>

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
import generalMixin from '@/mixins/generalMixin';

export default {
    name: 'side-menu',
    data() {
        return {
        }
    },
    mixins: [
        generalMixin
    ],
    computed: {
        typeSideBar: {
            get() {
                return this.$store.state.typeSideBar;
            }
        },
        showSideBar: {
            get() {
                return this.$store.state.showSideBar;
            }
        },
        listFavorites: {
            get() {
                return this.$store.state.listFavorites;
            },
            set(value) {
                this.$store.commit('setListFavorites', value);
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
        }
    },
    methods: {
        finalizarLink() {
            this.$store.commit('setShowSideBar', false);
            this.$router.push({ name: 'Finalizar' });
        },
        removeFavorite(index) {
            this.listFavorites = this.listFavorites.filter((e, i) => i !== index);
            this.calTotalItens();
        },        
        clearDadosItens() {
            this.listCart = [];
            this.calTotalItens();
        },
        closeSideMenu() {
            this.$store.commit('setShowSideBar', false);
        },
        deleteFromListFavorites(index) {
            document.querySelector(`#favorite-icon-${this.listFavorites[index].id}`).style.color = '#FFF';
            this.listFavorites = this.listFavorites.filter((elem, idx) => idx !== index);
            this.calTotalItens();
        },
        deleteFromListCart(index) {
            this.listCart = this.listCart.filter((elem, idx) => index !== idx);
            this.calTotalItens();
        },
        addListCart(dado, index) {
            let checkCardInList = this.listCart.some(elem => elem.id === dado.id);
			if (!checkCardInList) {
                dado.qtde = 1;
				this.listCart.push(dado);
			}
            this.deleteFromListFavorites(index);
			this.calTotalItens();
        }
    }, 
    mounted() {
        this.calTotalItens();
    }
}
</script>

<style>

</style>