<template>
    <div>
        <Header />
        <div class="header__line"></div>
        <nav class="topNav">
            <a href="index.html">Home</a>
            <a href="product.html">Man</a>
            <a href="single-page.html">Women</a>
            <a href="#">Kids</a>
            <a href="#">Accoseriese</a>
            <a href="#">Featured</a>
            <a href="#">Hot Deals</a>
        </nav>
        <div class="brand-top__background">
            <div class="brand-top container">
                <div class="brand-top__header">
                    <div class="brand-top__header-part1">The Brand</div>
                    <div class="brand-top__header-part2">of luxerious <span>fashion</span></div>
                </div>
            </div>
        </div>
        <div class="news-and-offers container">
            <div class="news-and-offers__list1">
                <div class="news-and-offers__list1-content">
                    <div class="news-and-offers__declaration-top">hot deal</div>
                    <div class="news-and-offers__declaration-bottom">for men</div>
                </div>
            </div>
            <div class="news-and-offers__list2">
                <div class="news-and-offers__list2-content">
                    <div class="news-and-offers__declaration-top">luxirous &amp; trendy</div>
                    <div class="news-and-offers__declaration-bottom">accesories</div>
                </div>
            </div>
            <div class="news-and-offers__list3">
                <div class="news-and-offers__list3-content">
                    <div class="news-and-offers__declaration-top">30% offer</div>
                    <div class="news-and-offers__declaration-bottom">women</div>
                </div>
            </div>
            <div class="news-and-offers__list4">
                <div class="news-and-offers__list4-content">
                    <div class="news-and-offers__declaration-top">new arrivals</div>
                    <div class="news-and-offers__declaration-bottom">for kids</div>
                </div>
            </div>
        </div>
        <div class="featured-items container">
            <div class="featured-items__header">
                <div class="featured-items__header-top">Featured Items</div>
                <div class="featured-items__header-bottom">Shop for items based on what we featured in this week</div>
            </div>
            <Catalog />
        </div>
        <div class="special-offer container">
            <div class="special-offer__info">
                <div class="special-offer__info-declaration">
                    <div>30% <span>offer</span></div>
                    <div>for women</div>
                </div>
            </div>
            <div class="special-offer__general-info">
                <div class="special-offer__general-info__div">
                    <img src="@/assets/img/truck.svg" alt="truck">
                    <div class="special-offer__general-info__div-text">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="special-offer__general-info__div">
                    <img src="@/assets/img/percentage.svg" alt="percentage">
                    <div class="special-offer__general-info__div-text">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="special-offer__general-info__div">
                    <img src="@/assets/img/crown.svg" alt="crown">
                    <div class="special-offer__general-info__div-text">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue';
import Catalog from '@/components/Catalog.vue';
import Footer from '@/components/Footer.vue';


export default {
    name: 'Home',
    components: { Header, Catalog, Footer },
    // data() {
    //     return {
    //         cartShow: false
    //     }
    // }
    // methods: {
    //     get(url) {
    //         return fetch(url).then(d => d.json()) 
    //     },
    //     add(item) {
    //         let find = this.cart.items.find(cartItem => cartItem.productId == item.productId);
    
    //         if (!find) { 
    //             this.cart.items.push(Object.assign({}, item, { amount: 1 }));
    //         } else { 
    //             find.amount++;
    //         }
    //     },
    //     remove(id) {
    //         let find = this.cart.items.find(cartItem => cartItem.productId == id);
    
    //         if (find.amount > 1) {
    //             find.amount--;
    //         } else {
    //             this.cart.items.splice(this.cart.items.indexOf(find), 1)
    //         }
    //     },
    //     totalPrice() {
    //         let sum = 0;
    //         for(let item of this.cart.items) {
    //             sum += item.productPrice * item.amount;
    //         }
    //         return sum;
    //     },
    //     totalQty() {
    //         let qty = 0;
    //         for(let item of this.cart.items) {
    //             qty += item.amount;
    //         }
    //         return qty;
    //     }
    // },

    // async mounted() {
    //     try {
    //         this.cart.items = (await this.get(this.cart.url)).content;
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }
}
</script>
