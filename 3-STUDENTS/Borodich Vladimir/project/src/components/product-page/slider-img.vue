<template>
    <div class="product__slide-img">
        <a 
         v-bind:class="{ disabled: imgNum === 0 }"
        @click.prevent="changeImg(-1)" href="#" 
        class="product__slide-link product__slide-link_left">
            <i class="fas fa-angle-left"></i>
        </a>
        <img :src="`https://raw.githubusercontent.com/wowankz/static/master/shop/img/${img}`" alt="product" class="product__img" />
        <a 
        v-bind:class="{ disabled: imgNum === (product.sliderImg.length -1) }"
        @click.prevent="changeImg(1)" href="#" 
        class="product__slide-link product__slide-link_right">
            <i class="fas fa-angle-right"></i>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },

    data() {
        return {
            img: 'slider-img.jpg',
            imgNum: 0,
        };
    },

    methods: {
        changeImg(val) {
            this.imgNum += val;
            this.img = this.product.sliderImg[this.imgNum];
        },
    },

    mounted() {
        this.img = this.product.sliderImg[this.imgNum];
    },
};
</script>

<style></style>
