<template>
  <div>
    <header class="header container">
        <div class="header__left">
            <a href="index.html" class="header__logo"><img src="../src/assets/img/logo.jpg" alt="logo"> Bran<span>d</span></a>
            <form class="header__search">
                <div class="header__browse">Browse <i class="fas fa-caret-down"></i></div>
                <input name="search" type="text" placeholder="Search for Item...">
                <button><i class="fas fa-search"></i></button>
            </form>
        </div>
        <div class="header__right">
            <a href="#" class="header__cart"><img src="../src/assets/img/cart.jpg" alt="cart"></a>
            <a href="#" class="header__account-bar">My account <i class="fas fa-caret-down"></i></a>
        </div>
    </header>
    <div class="header__line"></div>
    <div class="main__menu">
        <a href="index.html">Home</a>
        <a href="#">Man</a>
        <a href="Single-page.html" class="main__menu-active">Women</a>
        <a href="#">Kids</a>
        <a href="#">Accoseriese</a>
        <a href="#">Featured</a>
        <a href="#">Hot Deals</a>
    </div>
    <div class="shoppingCart__topMenu">
        <div class="shoppingCart__topMenu-contente container">
            <div class="shoppingCart__topMenu-contente-left">New Arrivals</div>
            <div class="shoppingCart__topMenu-contente-right">
                <a href="#" class="">Home </a> /
                <a href="#">Men </a> /
                <div class="shoppingCart__topMenu-active"><a href="#">New Arrivals</a></div>
            </div>
        </div>
    </div>
    <div class="checkout__main container">
        <div class="checkout__main-section">
            <input type="checkbox" id="checkout__section1">
            <label for="checkout__section1">01.<span>Shipping Adress</span></label>
            <div class="checkout__main-section-contente">
                <div class="checkout__main-section-contente-left">
                    <div class="checkout__main-section-contente-caption">Check as a guest or register</div>
                    <div class="checkout__main-section-contente-description">Register with us for future convenience</div>
                    <div class="checkout-guest">
                        <input type="radio" id="checkout-guest">
                        <label for="checkout-guest" class="checkout__label">checkout as guest</label>
                    </div>
                    <div class="checkout-register">
                        <input type="radio" id="checkout-register">
                        <label for="checkout-register" class="checkout__label">register</label>
                        <div class="checkout-register-contente">
                            <div class="checkout-register-contente-caption">register and save time!</div>
                            <div class="checkout-register-contente-description">Register with us for future convenience</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                            <button id="checkout-register-button">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__main-section-contente-right">
                    <div class="checkout__main-section-contente-caption">Already registed?</div>
                    <div class="checkout__main-section-contente-description">Please log in below</div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">EMAIL ADDRESS <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">Password <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form-required">* Required Fileds</div>
                    <div class="checkout__main-section-contente-right-button">
                        <button id="chekout-login">Log in</button>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout__main-section">
                <input type="checkbox" id="checkout__section2">
                <label for="checkout__section2">02.<span>BILLING INFORMATION</span></label>
            <div class="checkout__main-section-contente">
                <div class="checkout__main-section-contente-left">
                    <div class="checkout__main-section-contente-caption">Check as a guest or register</div>
                    <div class="checkout__main-section-contente-description">Register with us for future convenience</div>
                    <div class="checkout-guest">
                        <input type="radio" id="checkout-guest">
                        <label for="checkout-guest" class="checkout__label">checkout as guest</label>
                    </div>
                    <div class="checkout-register">
                        <input type="radio" id="checkout-register">
                        <label for="checkout-register" class="checkout__label">register</label>
                        <div class="checkout-register-contente">
                            <div class="checkout-register-contente-caption">register and save time!</div>
                            <div class="checkout-register-contente-description">Register with us for future convenience</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                            <button id="checkout-register-button">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__main-section-contente-right">
                    <div class="checkout__main-section-contente-caption">Already registed?</div>
                    <div class="checkout__main-section-contente-description">Please log in below</div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">EMAIL ADDRESS <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">Password <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form-required">* Required Fileds</div>
                    <div class="checkout__main-section-contente-right-button">
                        <button id="chekout-login">Log in</button>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout__main-section">
            <input type="checkbox" id="checkout__section3">
            <label for="checkout__section3">03.<span>SHIPPING INFORMATION</span></label>
            <div class="checkout__main-section-contente">
                <div class="checkout__main-section-contente-left">
                    <div class="checkout__main-section-contente-caption">Check as a guest or register</div>
                    <div class="checkout__main-section-contente-description">Register with us for future convenience</div>
                    <div class="checkout-guest">
                        <input type="radio" id="checkout-guest">
                        <label for="checkout-guest" class="checkout__label">checkout as guest</label>
                    </div>
                    <div class="checkout-register">
                        <input type="radio" id="checkout-register">
                        <label for="checkout-register" class="checkout__label">register</label>
                        <div class="checkout-register-contente">
                            <div class="checkout-register-contente-caption">register and save time!</div>
                            <div class="checkout-register-contente-description">Register with us for future convenience</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                            <button id="checkout-register-button">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__main-section-contente-right">
                    <div class="checkout__main-section-contente-caption">Already registed?</div>
                    <div class="checkout__main-section-contente-description">Please log in below</div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">EMAIL ADDRESS <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">Password <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form-required">* Required Fileds</div>
                    <div class="checkout__main-section-contente-right-button">
                        <button id="chekout-login">Log in</button>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout__main-section">
            <input type="checkbox" id="checkout__section4">
            <label for="checkout__section4">04.<span>SHIPPING METHOD</span></label>
            <div class="checkout__main-section-contente">
                <div class="checkout__main-section-contente-left">
                    <div class="checkout__main-section-contente-caption">Check as a guest or register</div>
                    <div class="checkout__main-section-contente-description">Register with us for future convenience</div>
                    <div class="checkout-guest">
                        <input type="radio" id="checkout-guest">
                        <label for="checkout-guest" class="checkout__label">checkout as guest</label>
                    </div>
                    <div class="checkout-register">
                        <input type="radio" id="checkout-register">
                        <label for="checkout-register" class="checkout__label">register</label>
                        <div class="checkout-register-contente">
                            <div class="checkout-register-contente-caption">register and save time!</div>
                            <div class="checkout-register-contente-description">Register with us for future convenience</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                            <button id="checkout-register-button">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__main-section-contente-right">
                    <div class="checkout__main-section-contente-caption">Already registed?</div>
                    <div class="checkout__main-section-contente-description">Please log in below</div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">EMAIL ADDRESS <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">Password <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form-required">* Required Fileds</div>
                    <div class="checkout__main-section-contente-right-button">
                        <button id="chekout-login">Log in</button>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout__main-section">
            <input type="checkbox" id="checkout__section5">
            <label for="checkout__section5">05.<span>PAYMENT METHOD</span></label>
            <div class="checkout__main-section-contente">
                <div class="checkout__main-section-contente-left">
                    <div class="checkout__main-section-contente-caption">Check as a guest or register</div>
                    <div class="checkout__main-section-contente-description">Register with us for future convenience</div>
                    <div class="checkout-guest">
                        <input type="radio" id="checkout-guest">
                        <label for="checkout-guest" class="checkout__label">checkout as guest</label>
                    </div>
                    <div class="checkout-register">
                        <input type="radio" id="checkout-register">
                        <label for="checkout-register" class="checkout__label">register</label>
                        <div class="checkout-register-contente">
                            <div class="checkout-register-contente-caption">register and save time!</div>
                            <div class="checkout-register-contente-description">Register with us for future convenience</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                            <button id="checkout-register-button">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__main-section-contente-right">
                    <div class="checkout__main-section-contente-caption">Already registed?</div>
                    <div class="checkout__main-section-contente-description">Please log in below</div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">EMAIL ADDRESS <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">Password <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form-required">* Required Fileds</div>
                    <div class="checkout__main-section-contente-right-button">
                        <button id="chekout-login">Log in</button>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout__main-section">
            <input type="checkbox" id="checkout__section6">
            <label for="checkout__section6">06.<span>ORDER REVIEW</span></label>
            <div class="checkout__main-section-contente">
                <div class="checkout__main-section-contente-left">
                    <div class="checkout__main-section-contente-caption">Check as a guest or register</div>
                    <div class="checkout__main-section-contente-description">Register with us for future convenience</div>
                    <div class="checkout-guest">
                        <input type="radio" id="checkout-guest">
                        <label for="checkout-guest" class="checkout__label">checkout as guest</label>
                    </div>
                    <div class="checkout-register">
                        <input type="radio" id="checkout-register">
                        <label for="checkout-register" class="checkout__label">register</label>
                        <div class="checkout-register-contente">
                            <div class="checkout-register-contente-caption">register and save time!</div>
                            <div class="checkout-register-contente-description">Register with us for future convenience</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</div>
                            <div class="checkout-register-contente-description-advantage"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</div>
                            <button id="checkout-register-button">Continue</button>
                        </div>
                    </div>
                </div>
                <div class="checkout__main-section-contente-right">
                    <div class="checkout__main-section-contente-caption">Already registed?</div>
                    <div class="checkout__main-section-contente-description">Please log in below</div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">EMAIL ADDRESS <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form">
                        <div class="checkout__main-section-contente-right-form-text">Password <sub>*</sub></div>
                        <input type="text" id="email">
                    </div>
                    <div class="checkout__main-section-contente-right-form-required">* Required Fileds</div>
                    <div class="checkout__main-section-contente-right-button">
                        <button id="chekout-login">Log in</button>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="subscribe">
            <div class="subscribe__contente container">
                <div class="subscribe__contente-left">
                    <div class="subscribe__icon"><img src="../src/assets/img/subscribe_icon.jpg" alt="author"></div>
                    <div class="subscribe__contente-left-text">
                        <div class="subscribe__contente-left-message">
                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </div>
                        <div class="subscribe__contente-left-author">
                            Bin Burhan <span>Dhaka, Bd</span>
                        </div>
                        <div class="subscribe__contente-left-lines">
                            <div class="subscribe__contente-left-line1"></div>
                            <div class="subscribe__contente-left-line2"></div>
                            <div class="subscribe__contente-left-line3"></div>
                        </div>
                    </div>
                </div>
                <div class="subscribe__contente-right">
                    <div class="subscribe__contente-right-formCapture">
                        <div class="subscribe__contente-right-formCaptureHeader">Subscribe</div>
                        <span>FOR OUR NEWLETTER AND PROMOTION</span>
                    </div>
                    <form class="subscribe__contente-right-form">
                        <input name="email" type="text" placeholder="Enter Your Email">
                        <button>Subscribe</button>
                    </form>
                </div>

            </div>

        </div>
        <div class="contacts">
            <div class="contacts__contente container">
                <div class="contacts__contente-left">
                    <a href="index.html" class="header__logo"><img src="../src/assets/img/logo.jpg" alt="logo"> Bran<span>d</span></a>
                    <div class="contacts__contente-left-text">
                        Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. <br><br>
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.<br>

                        Objectively strategize seamless relationships via resource sucking testing procedures. Proactively cultivate next-generation results for value-added methodologies. Dynamically plagiarize unique methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after alternative synergy.

                        Compellingly envisioneer corporate methods of empowerment before standards compliant technologies. Objectively facilitate progressive.
                    </div>
                </div>
                <div class="contacts__contente-right">
                    <div class="contacts__contente-right-column">
                        <span>COMPANY</span>
                        <div class="contacts__contente-right-column-menu">
                            <a href="#">Home</a>
                            <a href="#">Shop</a>
                            <a href="#">About</a>
                            <a href="#">How It Works</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div class="contacts__contente-right-column">
                        <span>INFORMATION</span>
                        <div class="contacts__contente-right-column-menu">
                            <a href="#">Tearms &amp; Condition</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">How to Buy</a>
                            <a href="#">How to Sell</a>
                            <a href="#">Promotion</a>
                        </div>
                    </div>
                    <div class="contacts__contente-right-column">
                        <span>SHOP CATEGORY</span>
                        <div class="contacts__contente-right-column-menu">
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">Child</a>
                            <a href="#">Apparel</a>
                            <a href="#">Brows All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer__contente container">
                <div class="footer__contente-left">
                    &copy; 2017  Brand  All Rights Reserved.
                </div>
                <div class="footer__contente-right">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue';
import Basket from '@/components/Basket.vue';

export default {
    name: 'Home',
    components: { Catalog, Basket },
    data() {
        return {
            showBasket: false
        }
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
    },
    mounted() {
        console.log(this);
    }
}
</script>
