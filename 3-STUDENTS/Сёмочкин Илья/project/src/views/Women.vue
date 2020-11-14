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
        <div class="selected-item__main">
            <a href="#"><i class="fas fa-angle-left"></i></a>
            <div class="selected-item__inner container">
                <img src="@/assets/img/woman-selected-item.jpg" alt="woman-selected-item">
            </div>
            <a href="#"><i class="fas fa-angle-right"></i></a>
        </div>
        <div class="selected-product__info-main container">
            <div class="selected-product__info-inner">
                <div class="selected-product__info-inner-top">
                    <div>
                        <h3>women collection</h3>
                        <div><a href="#"></a><a href="#"></a><a href="#"></a></div>
                        <h2>Moschino Cheap And Chic</h2>
                        <p>Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. </p>
                        <div>
                            <div>material:&nbsp;<span>cotton</span></div>
                            <div>designer:&nbsp;<span>binburhan</span></div>
                        </div>
                        <div>$561</div>
                    </div>
                </div>
                <div class="selected-product__info-inner-bottom">
                    <div>
                        <div>
                            <h3>choose color</h3>
                            <div>
                                <div><img src="@/assets/img/red-color.png" alt="red-color"></div>
                                <input type="text" placeholder="Red">
                                <a href="#"><i class="fas fa-angle-down"></i></a>
                            </div>
                        </div>
                        <div>
                            <h3>choose size</h3>
                            <div>
                                <input type="text" placeholder="XXL">
                                <a href="#"><i class="fas fa-angle-down"></i></a>
                            </div>
                        </div>
                        <div>
                            <h3>quantity</h3>
                            <div><input type="number" value="2"></div>
                        </div>
                        <a href="#"><img src="@/assets/img/cart-red.svg" alt="cart-red"> Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="matched-items container">
            <div class="matched-items__header">you may like also</div>
            <CatalogWomen />
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import NavBar from '@/components/Nav.vue';
import CatalogWomen from '@/components/CatalogWomen.vue'
import Footer from '@/components/Footer.vue';

export default {
    components: { Header, NavBar, CatalogWomen, Footer }
}
</script>

<style>

</style>