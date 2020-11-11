<template>
    <main class="main">
        <section class="product">
            <SliderImg :product="product" v-if="product.sliderImg" />
            <ProductInfo :product="product" />
        </section>

        <!-- section may like -->
        <CatalogLike />
    </main>
</template>

<script>
import { Get } from '@/services/http-service';

import CatalogLike from '@/components/product-page/catalog-like';
import ProductInfo from '@/components/product-page/product-info';
import SliderImg from '@/components/product-page/slider-img';
export default {
    components: {
        CatalogLike,
        ProductInfo,
        SliderImg,
    },
    data() {
        return {
            product: {},
        };
    },
    methods: {
        async getProduct(url) {
            let product = await Get(url);
            this.product = product ? product : {};
        },
    },
    created() {
        this.getProduct('/api/product/' + this.$route.params.id);
    },
};
</script>

<style scoped>
@import '../layout/css/product.css';
</style>
