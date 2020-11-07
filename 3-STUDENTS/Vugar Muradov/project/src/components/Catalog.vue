<template>
    <div>
        <div class="container features d-flex">
            <article class="product" id="catalog" style="display: contents">
                <Item v-for="item of items" :key="item.productId" :item="item" /> </article>
        </div>
    </div>
</template>

<script>
    import {
        get
    }
    from '@/core/requests'
    import Item from './CatalogItem'
    export default {
        components: {
            Item
        }, 
        data() {
            return {
                items: []
                , url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
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