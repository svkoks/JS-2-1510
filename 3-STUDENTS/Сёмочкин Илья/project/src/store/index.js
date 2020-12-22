import Vue from 'vue'
import Vuex from 'vuex'
import { get, post, put, deleteReq } from '@/core/requests';

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //...идем в State и тут при помощи той самой мутации КОРЗИНА наполнилась содержимым
    cart: [] // теперь cart: ['El_1', 'El_2'] 
  },
  mutations: { //...ИНИЦИИРУЮТ МУТАЦИЮ) тут происходит изменение той изначальной вещи которая находится в СОСТОЯНИИ (state) ----> далее ИДЕМ В STATE...
    cart_load: (state, payload) => {
      state.cart = payload
    },
    cart_add: (state, item) => {
      state.cart.push(item);
    },
    cart_remove: (state, item) => {
      state.cart.splice(state.cart.indexOf(item), 1)
    },
    cart_change: (state, payload) => {
      payload.item.amount += payload.amount;
    }
  },
  actions: { // ВСЕ НАЧИНАЕТСЯ С ЭКШНС (вгружаем данные с сервера итп) ----> ОНИ (ИНИЦИИРУЮТ МУТАЦИЮ ...
    async loadCart({ commit }, url) { // PAYLOAD тут - МАССИВ ТОВАРОВ из JSON
      let payload = (await get(url)).content;
      commit('cart_load', payload);
    },
    changeCartItems({ commit, state }, payload) {
      if(!payload.action) {
        let find = state.cart.find(el => el.productId == payload.item.productId);
        payload.action = find ? 3 : 1;
        payload.item = find ? find : Object.assign({}, payload.item, { amount: 1 });
        payload.amount = 1;
      }
      switch (payload.action) {
        case 1: {
          post('/api/cart', payload.item)
            .then(res => {
                if (res.status) {
                  commit('cart_add', payload.item);
                }
            });
          break;
        }
        case 2: {
          deleteReq('/api/cart/' + payload.item.productId)
            .then(res => {
                if (res.status) {
                  commit('cart_remove', payload.item);
                }
            });
          break;
        }
        case 3: {
          put('/api/cart/' + payload.item.productId, payload.amount)
            .then(res => {
                if (res.status) {
                  commit('cart_change', { item: payload.item, amount: payload.amount });
                }
            });
          break;
        }
      }
    }
  },
  getters: { // а геттерсы в итоге ретурнят выходной вариант массива из state (уже измененного и наполненного)
    cart_getter: state => state.cart,
  }
})
