<template>
    <div class="drop-cart">
        <div v-if="basket.length < 1" class="drop-cart__empty">Empty</div>
        <product-item v-for="item of basket" :key="item.id" :item="item" />
        <div class="drop-cart__total">
            <span class="drop-cart__total-name">TOTAL</span>
            <span id="basket-total" class="drop-cart__total-sum">${{ amountTotal }}</span>
        </div>
        <router-link v-bind:class="{ disabled: basket.length < 1 }" to="/checkout" class="drop-cart__button">Checkout</router-link>
        <router-link v-bind:class="{ disabled: basket.length < 1 }" to="/cart" class="drop-cart__button">Go to cart</router-link>
    </div>
</template>

<script>
import productItem from './item';
import { mapActions,  mapGetters } from 'vuex';
export default {
    components: {
        productItem,
    },

    methods: {
        ...mapActions([
            'getBasket'
        ])
    },
    computed: {
        ...mapGetters([
            'basket'
        ]),
        amountTotal() {
            return this.basket.length > 0
                ? this.basket.reduce((sum, item) => {
                      return (sum += item.price * item.amount);
                  }, 0)
                : '0';
        },
    },
    created() {
        this.getBasket()
    },
};
</script>

<style></style>
