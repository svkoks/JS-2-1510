export default {
    state: {
        sort: 'name',
        amount: '9',
        price: { from: 0, to: 800 },
        checkedSize: []
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
        },
        checkedSize(state, payload) {
            state.checkedSize = payload;
        }
    },
    getters: {
        priceForQuery(state) {
            return `priceFrom=${encodeURIComponent(state.price.from)}&priceTo=${encodeURIComponent(state.price.to)}`;
        },
        checkedSizeForQuery(state) {
            return '&sizes=' + encodeURIComponent(state.checkedSize.join());
        },
        checkedSize(state) {
            return state.checkedSize;
        }
    }
};
