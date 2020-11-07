<template>
    <div class="headerCart">
        <div class="shoppingCart" @click="basket.show = !basket.show"> <img src="@/assets/img/cart.png" alt="headerCart">
            <div class="cartProduct" id="basket">
                <Item v-for="item of items" :key="item.productId" :item="item" /> </div>
            <div class="total500">
                <div>TOTAL</div>
                <div>$500.00</div>
            </div> <a class="headerCheckoutButton" href="Checkout.html" target="_blank">CHECKOUT</a> <a href="Shopping%20Cart.html" class="headerGoToCartButton" target="_blank">GO TO CART</a> </div>
    </div>
</template>

<script>
    import {
        get
    }
    from '@/core/requests'
    import Item from './BasketItem'
    export default {
        components: {
            Item
        }, 
        data() {
            return {
                items: []
                , url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
                , show: false
            }
        }, 
        methods: {
            add(product) {
                let find = this.basket.items.find(el => el.productId == product.productId);
                if (!find) {
                    let newItem = Object.assign({}, product, {
                        amount: 1
                    });
                    this.basket.items.push(newItem);
                }
                else {
                    find.amount++;
                }
            }, 
            remove(id) {
                let find = this.basket.items.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                }
                else {
                    this.basket.items.splice(this.basket.items.indexOf(find), 1);
                }
            }
        }, 
        async mounted() {
            try {
                this.items = await get(this.url);
            }
            catch (err) {
                console.log(err);
            }
            finally {}
        }
    }
</script>

<style>
</style>