<template>
  <div>
    <div class="header container">
        <div class="header__left">
            <a class="header__logo" href="/">
                <img src="@/assets/img/logo.png" alt="logo">bran <span>d</span>
            </a>
            <form class="header__search">
                <a href="#" class="header__browse">Browse <i class="fas fa-caret-down"></i></a>
                    <input type="text" placeholder="Search for item">
                    <button class="header__search-button"><i class="fas fa-search"></i></button>
            </form>
        </div>
        <div class="header__right">
            <a href="#" class="header__cart" id="toggle-basket" @click="show = !show">
                <div id="cart-badge" class="header__cart-badge">{{ sumItem }}</div>
                <img src="@/assets/img/cart.png" alt="card" class="header__cart-img">
            </a>
            <div class="drop-cart" v-show="show">
                <div id="basket">
                    <div class="drop-cart__product" v-for="item in items" :key="item.productId">
                        <a href="product.html" class="drop-cart__product-link">
                            <img :src="item.productImg"
                                alt="product" class="drop-cart__product-img">
                        </a>
                        <div class="drop-cart__product-info">
                            <a href="product.html" class="drop-cart__product-name">{{item.productName}}</a>
                            <div class="drop-cart__product-price">
                                <span class="drop-cart__product-count">{{item.amount}} </span> x ${{item.productPrice}}
                                <span class="drop-cart__product-sum"> = ${{item.productPrice * item.amount}}</span>
                            </div>
                        </div>
                        <a href="#" @click="remove(id)" id="item.productId" name="remove" class="drop-cart__product-close far fa-times-circle" ></a>
                    </div>
                </div>
                <div class="drop-cart__total" >
                    <span class="drop-cart__total-name">TOTAL</span>
                    <span id="basket-total" class="drop-cart__total-sum">${{sumCost}}</span>
                </div>
                <a id="checkout-button" onclick="return false" href="checkout.html" class="drop-cart__button">Checkout</a>
                <a id="go-cart" href="shopping-cart.html" class="drop-cart__button">Go to cart</a>
            </div>

            <a href="#" class="button">My Account<i class="fas fa-caret-down"></i></a>
            <a href="#" class="icon-user"><i class="fas fa-user-alt"></i></a>
        </div>
    </div>
    <div class="header_line"></div>
    <div class="topNav">
        <a href="product.html">Home</a>
        <a href="product.html">Man</a>
        <a href="product.html">Women</a>
        <a href="product.html">Kids</a>
        <a href="product.html">Accessories</a>
        <a href="product.html">Featured</a>
        <a href="product.html">Hot Deals </a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            url: '/api/basket',
            show: false
        }
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }, 
        add(item) {
            let find = this.items.find(basketItem => basketItem.productId == item.productId);
            if (!find) {
                let newItem = Object.assign({}, item, { amount: 1 });
                this.items.push(newItem);
            } else {
                find.amount++;
            }
        },
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        }
    },
    computed: {
        sumCost() {
            let sum = 0;
            for (let item of this.items) {
                sum+= item.productPrice * item.amount;
            }
            return sum;
        },
        sumItem() {
            let sumItem = 0;
            for (let item of this.items) {
                sumItem += item.amount;
            }
            return sumItem;
        }
    },
    async mounted() {
        try {
            this.items = (await this.get(this.url)).content;
        }
        catch(err) {
            console.log(err);
        }
    }
}
</script>

<style>

</style>