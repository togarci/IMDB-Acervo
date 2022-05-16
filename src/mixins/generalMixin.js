export default {
    data() {
        return {
        }
    },
    computed: {
        qtdeTotal: {
            get() {
                return this.$store.state.qtdeTotal;
            },
            set(value) {
                this.$store.commit('setQtdeTotal', value);
            }
        },
        listCart: {
            get() {
                return this.$store.state.listCart;
            },
            set(value) {
                this.$store.commit('setListCart', value);
            }
        }
    },
    methods: {
        calTotalItens() {
            let total = 0.00;
            this.listCart.forEach(elem => {
                total += ((Number(elem.preco) * Number(elem.qtde)));
            });

            this.qtdeTotal = total.toFixed(2);
        },
    }
}