import { httpGet } from '@/services/http-service';

export default {
    state: {
        basket: [],
        badge: 0,
    },
    getters: {
        basket(state) {
            return state.basket;
        },
    },
    mutations: {
        changeBasket(state, payload) {
            switch (payload.action.name) {
                case 'update':
                    if (payload.action.type === '++') payload.data.amount++;
                    else if (payload.action.type === '+') state.basket.push(payload.data);
                    else state.basket = payload.data;
                    break;

                case 'remove':
                    if (payload.action.type === '-') payload.data.amount--;
                    else state.basket.splice(state.basket.indexOf(payload.data), 1);
                    break;
            }
            state.badge = state.basket.length;
        },
    },
    actions: {
        async getBasket({ commit }) {
            let data = await httpGet('/api/basket');
            commit('changeBasket',    { action: { name: 'update', type: '' }, data: data });
        },

        addToBasket({ commit, state }, item) {
            let product = Object.assign({}, { amount: 1 }, item);
            let searchResult = state.basket.find((item) => item.id === product.id);
            if (searchResult) commit('changeBasket', { action: { name: 'update', type: '++' }, data: searchResult });
            else commit('changeBasket', { action: { name: 'update', type: '+' }, data: product });
        },

        removeFromBasket({ commit, state }, id) {
            let product = state.basket.find((item) => item.id === +id);
            if (product.amount > 1) commit('changeBasket', { action: { name: 'remove', type: '-' }, data: product });
            else commit('changeBasket', { action: { name: 'remove', type: '' }, data: product });
        },
    },
};
