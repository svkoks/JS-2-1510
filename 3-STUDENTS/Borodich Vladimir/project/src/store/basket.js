import { httpGet } from '@/services/http-service';

export default {
    state: {
        basket: [],
        badge: 0,
    },
    getters: {
        basket(state) {
            return state.basket;
        }
    },
    mutations: {
        changeBasket(state, payload) {
            state.basket = payload;
            state.badge = state.basket.length;
        }    
    },
    actions: {
        async getBasket({ commit }) {
            console.log('action getBasket');
            commit('changeBasket', await httpGet('/api/basket'))
        },
        // async addToBasket({ commit }, item) {
            
        // }
    },
};
