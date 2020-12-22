<template>
    <div>
        <Header />
        <div class="header__line"></div>
        <NavBar />
        <div class="new-arrivals-main">
            <div class="new-arrivals container">
                <h2>New Arrivals</h2>
                <div class="new-arrivals__breadcrumbs"><router-link to="/">Home</router-link> / <router-link to="/men">Men</router-link> / <a href="#">New Arrivals</a></div>
            </div>
        </div>
        <div class="man-main container">
            <div class="man-sideBar">
                <div>
                    <input type="checkbox" id="sideBar-checkbox-1" checked>
                    <label for="sideBar-checkbox-1">Category <i class="fas fa-caret-down"></i></label>
                    <label for="sideBar-checkbox-1">Category <i class="fas fa-caret-up"></i></label>
                    <div>
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies &amp; Sweatshirts</a>
                        <a href="#">Jackets &amp; Coats</a>
                        <a href="#">Pants</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Shorts</a>
                        <a href="#">Sweaters &amp; Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="sideBar-checkbox-2">
                    <label for="sideBar-checkbox-2">Brand <i class="fas fa-caret-down"></i></label>
                    <label for="sideBar-checkbox-2">Brand <i class="fas fa-caret-up"></i></label>
                    <div>
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies &amp; Sweatshirts</a>
                        <a href="#">Jackets &amp; Coats</a>
                        <a href="#">Pants</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <a href="#">Shorts</a>
                        <a href="#">Sweaters &amp; Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="sideBar-checkbox-3">
                    <label for="sideBar-checkbox-3">Designer <i class="fas fa-caret-down"></i></label>
                    <label for="sideBar-checkbox-3">Designer <i class="fas fa-caret-up"></i></label>
                    <div>
                        <a href="#">Accessories</a>
                        <a href="#">Bags</a>
                        <a href="#">Denim</a>
                        <a href="#">Hoodies &amp; Sweatshirts</a>
                        <a href="#">Jackets &amp; Coats</a>
                        <a href="#">Pants</a>
                        <a href="#">Polos</a>
                        <a href="#">Shirts</a>
                        <a href="#">Shoes</a>
                        <!-- <a href="#">Shorts</a>
                        <a href="#">Sweaters &amp; Knits</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Tanks</a> -->
                    </div>
                </div>
            </div>
            <div class="man-goods">
                <div class="man-goods__parameters">
                    <div>
                        <h3>Trending now</h3>
                        <div><a href="#">Bohemian</a> | <a href="#">Floral</a> | <a href="#">Lace</a><a href="#">Floral</a> | <a href="#">Lace</a> | <a href="#">Bohemian</a></div>
                    </div>
                    <div>
                        <h3>Size</h3>
                        <div>
                            <label>
                                <input type="checkbox">
                                <span>XXS</span>
                            </label>
                            <label>
                                <input type="checkbox">
                                <span>L</span>
                            </label>
                            <label>
                                <input type="checkbox">
                                <span>XS</span>
                            </label>
                            <label>
                                <input type="checkbox">
                                <span>XL</span>
                            </label>
                            <label>
                                <input type="checkbox">
                                <span>S</span>
                            </label>
                            <label>
                                <input type="checkbox">
                                <span>XXL</span>
                            </label>
                            <label>
                                <input type="checkbox">
                                <span>M</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3>Price</h3>
                        <img src="@/assets/img/filter-line.png" alt="filter-line">
                        <div><span>$52</span><span>$400</span></div>
                    </div>
                </div>
                <div class="man-goods__sort">
                    <div>
                        <div>Sort By</div>
                        <div>Name <a href="#"><i class="fas fa-caret-down"></i></a></div>
                    </div>
                    <div>
                        <div>Show</div>
                        <div>09 <a href="#"><i class="fas fa-caret-down"></i></a></div>
                    </div>
                </div>
                <CatalogMen />
                <div class="man-goods__buttons">
                    <div>
                        <a href="#"><i class="fas fa-chevron-left"></i></a><a href="#"><span>1</span></a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">5</a><a href="#">6.....20</a><a href="#"><span><i class="fas fa-chevron-right"></i></span></a>
                    </div>
                    <a href="#">View All</a>
                </div>
            </div>
        </div>
        <div class="about-shop">
            <div class="about-shop__inner container">
                <div>
                    <img src="@/assets/img/truck.svg" alt="truck">
                    <h3>Free Delivery</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                <div>
                    <img src="@/assets/img/percentage.svg" alt="percentage">
                    <h3>Sales &amp; discounts</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                <div>
                    <img src="@/assets/img/crown.svg" alt="crown">
                    <h3>Quality assurance</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import NavBar from '@/components/Nav.vue';
import CatalogMen from '@/components/CatalogMen.vue'
import Footer from '@/components/Footer.vue';

export default {
    components: { Header, NavBar, CatalogMen, Footer }
}
</script>

<style>

</style>