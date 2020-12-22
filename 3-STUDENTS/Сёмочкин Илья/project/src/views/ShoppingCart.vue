<template>
    <div>
        <Header />
        <div class="header__line"></div>
        <NavBar />
        <div class="new-arrivals-main">
            <div class="new-arrivals container">
                <h2>New Arrivals</h2>
                <div class="new-arrivals__breadcrumbs"><router-link to="/">Home</router-link> / <router-link to="/men">Men</router-link> / <a href="#">New Arrivals</a></div>
            </div>
        </div>
        <div class="shopping-cart-items container">
            <div class="shopping-cart-items__headers-row">
                <div>Product Details</div>
                <div>Unite Price</div>
                <div>Quantity</div>
                <div>Shipping</div>
                <div>Subtotal</div>
                <div>Action</div>
            </div>
            <Item 
                v-for="item of items"
                type="cart-final"
                :key="item.productId"
                :item="item"
                @delete="remove"
            />
            <div class="shopping-cart-items__buttons">
                <a href="#">clear shopping cart</a><a href="#">continue shopping</a>
            </div>
        </div>
        <div class="delivery-details container">
            <div class="delivery-details__shipping-address">
                <h2>Shipping Address</h2>
                <div>
                    <input type="text" value="Bangladesh">
                    <a href="#"><i class="fas fa-caret-down"></i></a>
                </div>
                <input type="text" placeholder="State">
                <input type="text" placeholder="Postcode/Zip">
                <a href="#">get a quote</a>
            </div>
            <div class="delivery-details__coupon-discount">
                <h2>coupon discount</h2>
                <p>Enter your coupon code if you have one</p>
                <input type="text" placeholder="State">
                <a href="#">apply coupon</a>
            </div>
            <div class="delivery-details__checkout">
                <div class="delivery-details__checkout-inner">
                    <div>
                        <h4>Sub total&emsp;${{ totalPrice() }}</h4>
                        <h2>GRAND TOTAL&emsp;<span>${{ totalPrice() }}</span></h2>
                    </div>
                    <div>
                        <router-link to="/checkout">checkout</router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import NavBar from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import Item from '@/components/Item.vue';
import { get, post, put, deleteReq } from '@/core/requests';
import { mapGetters } from 'vuex';

export default {
    name: 'ShoppingCart',
    components: { Header, NavBar, Item, Footer },
    data() {
        return {
            // url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/cart.json',
            url: '/api/cart', 
            // cartShow: false
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
        // add(item) {
        //     let find = this.items.find(cartItem => cartItem.productId == item.productId);
    
        //     if (!find) {
        //         let newItem = Object.assign({}, item, { amount: 1 });
        //         post(this.url, newItem)
        //             .then(res => {
        //                 if (res.status) {
        //                     this.$store.dispatch('changeCartItems', { item: newItem, action: 1 });
        //                 }
        //             });
        //     } else { 
        //         // find.amount++;
        //         this.$store.dispatch('changeCartItems', { item: find, action: 3, amount: 1 })
        //     }
        // },
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