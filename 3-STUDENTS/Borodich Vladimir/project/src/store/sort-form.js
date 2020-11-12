export default {
    state: {
        sort: 'name',
        amount: '9',
        price: { from: 0, to: 800 }
    },
    mutations: {
        sortChange(state, payload) {
            state.sort = payload;
        },
        amountChange(state, payload) {
            state.amount = payload;
        },

        setPrice(state, payload) {
            state.price = payload;
        }
    },
    getters: {
        priceForQuery(state) {
            return `priceFrom=${encodeURIComponent(state.price.from)}&priceTo=${encodeURIComponent(state.price.to)}`;
        }
    }
};
