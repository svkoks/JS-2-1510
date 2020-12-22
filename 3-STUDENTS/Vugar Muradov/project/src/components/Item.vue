<template>
    <div>
        <template v-if="type == 'catalog'">
            <div style="text-align: -webkit-left;">
                <a style="cursor: pointer"> <img :src="item.productImg" alt="item">
                    <h6> {{ item.productName }} </h6>
                    <button class="buyButton" name="add" @click="add(item)">Add to Cart</button>
                    <p class="price"> ${{ item.productPrice }} </p>
                </a>
            </div>
        </template>
        <template v-if="type == 'basket'">
            <div class="d-flex justify-content-between">
                <a href="product.html"><img :src="item.productImg" width="72px" alt="cartPhoto"></a>
                <div class="tripleCart"> <a href="product.html" class="reboxZane"> {{ item.productName }} </a>
                    <div class="yellowStars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
                    <div class="inCartQuantity"> <span> {{ item.amount }} </span> x {{ item.productPrice }} <span> = {{ item.productPrice }} * {{ item.amount }} </span> </div>
                </div>
            </div>
            <button @click.prevent="$emit('del', item.productId)" class="closeButton" name="remove" style="background-color: white; border: none;">X </button>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: 'catalog'
            }, 
            item: { type: Object, default: () => ({}) }
        },
        methods: {
            add(item) {
                this.$store.dispatch('changeBasketItems', {item, action: undefined});
            }
        }
    }
</script>

<style>

</style>