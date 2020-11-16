<template>
    <div>
        <template v-if="type == 'catalog'">
            <div class="featured-items__item">
                <div class="featured-items__item-top"><img :src="item.productImg" alt="t-shirt">
                    <div class="add-hover-div">
                        <div>
                            <button name="add" @click="add(item)"><img src="@/assets/img/cart_small.png" alt="cart_small">Add to Cart</button>
                            <a href="#"><i class="fas fa-retweet"></i></a>
                            <a href="#"><i class="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
                <div class="featured-items__item-bottom">
                    <div>{{ item.productName }}</div>
                    <div>${{ item.productPrice }}.00</div>
                </div>
            </div>
        </template>
        <template v-if="type == 'cart'">
            <div 
                id="checked-items"
                :key="item.productId"
            >
                <div class="cart-dropdown__checked-items">
                    <img :src="item.productImg" alt="pic">
                    <div>
                        <h3>{{ item.productName }}</h3>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>{{ item.amount }} x ${{ item.productPrice }}</p>
                    </div>
                    <button 
                        @click.prevent="$emit('delete', item.productId)" 
                        name="remove" 
                        class="fas fa-times-circle"
                    >
                    </button>
                </div>
            </div>
        </template>
        <template v-if="type == 'cart-final'">
            <div class="shopping-cart-items__details-row">
                <div>
                    <img :src="item.productImg" alt="pic">
                    <div>
                        <h3>{{ item.productName }}</h3>
                        <p><span>Color</span>: Red<br><span>Size</span>: Xll</p>
                    </div>
                </div>
                <div>${{ item.productPrice }}</div>
                <div>
                    <button @click="$emit('delete', item.productId)" class="far fa-minus-square"></button>
                    {{ item.amount }}
                    <button name="add" @click="add(item)" class="far fa-plus-square"></button>
                </div>
                <div>free</div>
                <div>${{ item.productPrice * item.amount }}</div>
                <div>
                    <a 
                        href="#" 
                        class="fas fa-times-circle"
                        @click.prevent="$emit('delete', item.productId)"
                        name="remove"
                    >
                    </a>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            default: 'catalog' //ДЕФОЛТЫ (!_!)
        },
        item: { type: Object, default: () => ({}) }
    },
    methods: {
        add(item) {
            // this.$parent.$parent.$refs.cart.add(item)
            this.$store.dispatch('changeCartItems', { item, action: undefined })
        }
    }
}
</script>

<style>

</style>