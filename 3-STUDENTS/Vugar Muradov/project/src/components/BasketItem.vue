<template>
    <div>
        <div class="d-flex justify-content-between">
            <a href="product.html"><img :src="item.productImg" width="72px" alt="cartPhoto"></a>
            <div class="tripleCart"> <a href="product.html" class="reboxZane"> {{ item.productName }} </a>
                <div class="yellowStars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
                <div class="inCartQuantity"> <span> {{ item.amount }} </span> x {{ item.productPrice }} <span> = {{ item.productPrice }} * {{ item.amount }} </span> </div>
            </div>
        </div>
        <button class="closeButton" name="remove" style="background-color: white; border: none;" data-id="item.productId">X </button>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style>

</style>