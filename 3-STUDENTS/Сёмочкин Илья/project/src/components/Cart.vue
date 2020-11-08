<template>
    <div class="header__cart" id='header-cart'>
        <img 
            src="@/assets/img/cart.png" 
            alt="cart" 
            id="toggle-cart"
            @click="cartShow = !cartShow"
            >
        <div class="qty" id="qty">
            {{ totalQty() }}
        </div>
        <div class="cart-dropdown" v-show="cartShow">
            <Item 
                v-for="item of items"
                type="cart"
                :key="item.productId"
                :item="item"
                @delete="remove"
            />
            <div id="sum">
                <div id="total" class="cart-dropdown__sum">
                    <div>total</div>
                    <div>${{ totalPrice() }}</div>
                </div>
            </div>
            <div class="cart-dropdown__buttons">
                <a href="checkout.html">checkout</a>
                <a href="shopping-cart.html">go to cart</a>
            </div>
        </div>
    </div>
</template>

<script>

import { get } from '@/core/requests';
import Item from './Item.vue';
import { mapGetters } from 'vuex';

export default {
    components: { Item },
    data() {
        return {
            url: '/api/cart', 
            cartShow: false
        }
    },
    async mounted() {
        try {
            this.$store.dispatch('loadCart', this.url)
        }
        catch(err) {
            console.log(err);
        }
    },
    methods: {
        add(item) {
            let find = this.items.find(cartItem => cartItem.productId == item.productId);
    
            if (!find) { 
                let newItem = Object.assign({}, item, { amount: 1 });
                this.$store.dispatch('changeCartItems', { item: newItem, action: 1 })
            } else { 
                // find.amount++;
                this.$store.dispatch('changeCartItems', { item: find, action: 3, amount: 1 })
            }
        },
        remove(id) {
            let find = this.items.find(cartItem => cartItem.productId == id);
    
            if (find.amount > 1) {
                // 
                this.$store.dispatch('changeCartItems', { item: find, action: 3, amount: -1 })
            } else {
                // this.items.splice(this.items.indexOf(find), 1)
                this.$store.dispatch('changeCartItems', { item: find, action: 2 })
            }
        },
        totalPrice() {
            let sum = 0;
            for(let item of this.items) {
                sum += item.productPrice * item.amount;
            }
            return sum;
        },
        totalQty() {
            let qty = 0;
            for(let item of this.items) {
                qty += item.amount;
            }
            return qty;
        }
    },
    computed: {
        ...mapGetters({ items: 'cart_getter' }) //cart getter - это такой же массив как и раньше, только теперь полученный из vuex
    }
}
</script>

<style>

</style>