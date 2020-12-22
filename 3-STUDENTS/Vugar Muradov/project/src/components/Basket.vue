<template>
<div class="cartProduct" id="basket">
    <Item 
        v-for="item of items"
        type="basket"
        :item = "item"
        @del="remove"
    />
</div>
</template>

<script>
    import { get, post, put, deleteReq } from '@/core/requests';
    import Item from './Item.vue'; 
    import { mapGetters } from 'vuex';    

    export default {
        components: { Item },
        data() {
            return {
            url: '/api/basket'
            }
        },
        methods: {
            remove(id) {
                let find = this.items.find(el => el.productId == id);
                if (find.amount > 1) {
                    this.$store.dispatch('changeBasketItems', { item: find, action: 3, amount: -1 });
                } else {
                    this.$store.dispatch('changeBasketItems', { item: find, action: 2 });
                    }
            }
        },
        async mounted() {
            try {
                this.$store.dispatch('loadBasket', this.url);
            }
            catch(err) {
                console.log(err);
            }
            finally {

            }
        },
        computed: {
         ...mapGetters({ items: 'basket_getter' })
        }
    }
</script>

<style>
</style>