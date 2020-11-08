<template>
    <header class="header container">
        <div class="header__left">
            <a href="index.html" class="header__logo"><img src="@/assets/img/logo.png" alt="logo"> Bran<span>d</span></a>
            <form action="#" class="header__search" method="get">
                <input type="checkbox" id="browse-checkbox">
                <label for="browse-checkbox" class="browse">Browse <i class="fas fa-caret-down"></i></label>
                <label for="browse-checkbox" class="browse-active">Browse <i class="fas fa-caret-up"></i></label>
                <div class="drop-down">
                    <div>Women</div>
                    <a href="#">Dresses</a>
                    <a href="#">Tops</a>
                    <a href="#">Sweaters/Knits</a>
                    <a href="#">Jackets/Coats</a>
                    <a href="#">Blazers</a>
                    <a href="#">Denim</a>
                    <a href="#">Leggings/Pants</a>
                    <a href="#">Skirts/Shorts</a>
                    <a href="#">Accessories</a>
                    <div>Men</div>
                    <a href="#">Tees/Tank tops</a>
                    <a href="#">Shirts/Polos</a>
                    <a href="#">Sweaters</a>
                    <a href="#">Sweatshirts/Hoodies</a>
                    <a href="#">Blazers</a>
                    <a href="#">Jackets/vests</a>
                </div>
                <input name="search" type="text" placeholder="Search for Item...">
                <button><i class="fas fa-search"></i></button>
            </form>
        </div>
        <div class="header__right">
            <Cart ref="cart" />
            <a class="header__account-bar" href="#">My Account <i class="fas fa-caret-down"></i></a>
        </div>
    </header>
</template>

<script>

import Cart from '@/components/Cart.vue'

export default {
    components: { Cart }
}
</script>

<style>

</style>