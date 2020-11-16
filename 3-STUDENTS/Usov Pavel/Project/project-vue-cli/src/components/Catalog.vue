<template>
    <div id="catalog">
        <div class="hot-offer" v-for="item in items" :key="item.productId">
            <div class="hot-offer__shadow">
                <img :src="item.productImg" alt="">
                <div class="hot-offer__hover">
                    <div class="hot-offer__square">
                        <button name="add" @click="add(item)"><img src="@/assets/img/kart_white.png" alt="order">Add to Cart</button>
                    </div>
                </div>
            </div>
            <a href="single.html">{{ item.productName }}</a>
            <h3>${{ item.productPrice }}</h3>
        </div>
    </div>
</template>

<script>
import {add} from "./Header.vue"

export default {
    data() {
        return {
            items: [],
            url: '/api/catalog',
        }
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        } 
    },
    async mounted() {
        try {
            this.items = await this.get(this.url);
        }
        catch(err) {
            console.log(err);
        }
    }
}
</script>

<style>

</style>