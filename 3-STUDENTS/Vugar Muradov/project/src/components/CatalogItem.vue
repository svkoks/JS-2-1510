<template>
    <div style="text-align: -webkit-left;">
        <a style="cursor: pointer"> <img :src="item.productImg" alt="item">
            <h6> {{ item.productName }} </h6>
            <button class="buyButton" name="add">Add to Cart</button>
            <p class="price"> ${{ item.productPrice }} </p>
        </a>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style>

</style>