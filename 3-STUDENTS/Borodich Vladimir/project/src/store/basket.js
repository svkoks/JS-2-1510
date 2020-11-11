import { Get, Post, Put, Delete } from '@/services/http-service';

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
        changeBasket(state, basket) {
            state.basket = basket;
            state.badge = state.basket.length;
        },
    },
    actions: {
        async getBasket({ commit }) {
            let data = await Get('/api/basket');
            if (data) commit('changeBasket', data);
        },

        async addToBasket({ commit, state }, payload) {
            let find = state.basket.find((item) => item.id == payload.id);
            if (find) {
                const data = await Put('/api/basket/increase', { ...payload });
                if (data) commit('changeBasket', data);
            } else {
                const data = await Post('/api/basket', { ...payload });
                if (data) commit('changeBasket', data);
            }
        },

        async removeFromBasket({ commit, state }, payload) {
            let find = state.basket.find((item) => item.id === payload.id);
            if (find.amount > 1) {
                const data = await Put('/api/basket/decrease', { ...payload });
                if (data) commit('changeBasket', data);
            } else {
                const data = await Delete('/api/basket/' + payload.id);
                if (data) commit('changeBasket', data);
            }
        },
        async clearBasket({ commit}) {
                const data = await Delete('/api/basket/all' );
                if (data) commit('changeBasket', data);
        },
    },
};
