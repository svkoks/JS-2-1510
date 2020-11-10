<template>
    <main class="main">
        <section class="product">
            <div class="product__slide-img">
                <a href="#" class="product__slide-link product__slide-link_left">
                    <i class="fas fa-angle-left"></i>
                </a>
                <img src="https://raw.githubusercontent.com/wowankz/static/master/shop/img/product_img.jpg" alt="product" class="product__img" />
                <a href="#" class="product__slide-link product__slide-link_right">
                    <i class="fas fa-angle-right"></i>
                </a>
            </div>
<ProductInfo/>
            
        </section>

        <!-- section may like -->
        <CatalogLike/>
    </main>
</template>

<script>
import CatalogLike from '@/components/product-page/catalog-like';
import ProductInfo from '@/components/product-page/product-info';
export default {
    components:{
        CatalogLike,
        ProductInfo
    },
    
};
</script>

<style scoped>
@import '../layout/css/product.css';
</style>
