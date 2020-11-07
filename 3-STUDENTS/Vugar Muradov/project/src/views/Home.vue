<template>
    <div>
        <header class="header container"> <a href="Index.html" class="logoBrand">Bran<span>D</span></a>
            <form action="#" class="search">
                <label class="searchBrowse">Browse&nbsp;&nbsp;<i class="fas fa-caret-down" aria-hidden="true"></i></label>
                <datalist>
                    <option value="man"></option>
                    <option value="women"></option>
                    <option value="kids"></option>
                </datalist>
                <input name="search" type="text" placeholder="Search for Item...">
                <button><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <!-----Запуск Скрипта на инициализацию basket----->
            <Basket />
            <!-----Запуск Скрипта на инициализацию basket----->
            <button class="accountButton">My Account&nbsp;&nbsp;<i class="fas fa-caret-down" aria-hidden="true"></i></button>
        </header>
        <div class="headerLine"></div>
        <nav class="topNav"> <a href="#">Home</a> <a href="#">Man</a> <a href="#">Women</a> <a href="#">Kids</a> <a href="#">Accoseriese</a> <a href="#">Featured</a> <a href="#">Hot Deals</a> </nav>
        <main>
            <div class="topBanner">
                <div class="container topBannerContent">
                    <div class="rectangle"></div>
                    <div class="topBannerText">
                        <div class="theBrand">THE BRAND
                            <br> </div>
                        <div class="ofLux">OF LUXERIOUS&nbsp;</div>
                        <div class="fashion">FASHION</div>
                    </div>
                    <div class="topBannerImage"></div>
                </div>
            </div>
            <div class="container offers">
                <div class="offer1"> <img src="@/assets/img/offer1.jpg" alt="offer1">
                    <div class="label1">
                        <div class="topOfferLabel">Hot deal</div>
                        <div class="offerLabel">For Men</div>
                    </div>
                </div>
                <div class="offer2"> <img src="@/assets/img/offer2.jpg" alt="offer2">
                    <div class="label2">
                        <div class="topOfferLabel">LUXIROUS &amp; trendy</div>
                        <div class="offerLabel">ACCESORIES</div>
                    </div>
                </div>
                <div class="offer3"> <img src="@/assets/img/offer3.jpg" alt="offer3">
                    <div class="label3">
                        <div class="topOfferLabel">30% offer</div>
                        <div class="offerLabel">women</div>
                    </div>
                </div>
                <div class="offer4"> <img src="@/assets/img/offer4.jpg" alt="offer4">
                    <div class="label4">
                        <div class="topOfferLabel">new arrivals</div>
                        <div class="offerLabel">FOR kids</div>
                    </div>
                </div>
            </div>
            <div class="featuredText"> <span class="featuredItems">Fetured Items</span>
                <br> <span class="shopForItems">Shop for items based on what we featured in this week</span> </div>
            <!-----Запуск Скрипта на инициализацию каталога----->
            <Catalog />
            <!-----Запуск Скрипта на инициализацию каталога----->
            <section class="container browseAllProductButton"> <a href="Product.html" class="browseAllProduct">Browse All Product&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></a> </section>
            <section class="banner">
                <div class="container bannerFull">
                    <div class="bannerImage">
                        <div class="bannerImageText"><span class="span30">30% </span> <span class="spanOffer">OFFER </span> <span class="spanForWoman">FOR WOMEN</span> </div>
                    </div>
                    <div class="bannerOptions">
                        <div class="liner">
                            <div class="bannerOptionsLayerFirst"></div>
                            <div class="bannerOptionsText"><span class="bannerOptionsSpanFirst">Free Delivery</span>
                                <br>
                                <br><span class="bannerOptionsSpanSecond">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</span></div>
                        </div>
                        <div class=liner>
                            <div class="bannerOptionsLayerSecond"></div>
                            <div class="bannerOptionsText"><span class="bannerOptionsSpanFirst">Sales & discounts</span>
                                <br>
                                <br><span class="bannerOptionsSpanSecond">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</span></div>
                        </div>
                        <div class="liner">
                            <div class="bannerOptionsLayerThird"></div>
                            <div class="bannerOptionsText"><span class="bannerOptionsSpanFirst">Quality assurance</span>
                                <br>
                                <br><span class="bannerOptionsSpanSecond">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <div class="reviewSubscribe">
            <div class="container reviewSubscribeFit">
                <div class="review">
                    <div class="customerPhoto"></div>
                    <div class="customerReviewAndLine">
                        <div class="customerReview"><i>&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum mattis neque sed pretium&raquo;</i></div>
                        <div class="customerReviewName"><span class="reviewName">Bin Burhan</span>
                            <br> <span class="reviewCity">Dhaka, Bd</span></div>
                        <div class="customerLine"><img src="@/assets/img/3layers.png" alt="layers"></div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="subscribe">
                    <div class="subEmailText1">Subscribe</div>
                    <div class="subEmailText2">FOR OUR NEWLETTER AND PROMOTION</div>
                    <div>
                        <input name="search" type="text" placeholder="Enter Your Email" class="subEmailButton">
                        <button class="myRedButton">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container description">
                <div class="descriptionFirst">
                    <div class="logoBrand">Bran<span>D</span></div>
                    <div class="descriptionText">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                        <br>
                        <br> Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</div>
                </div>
                <nav class="naviBar">
                    <div class="naviBarList"><span class="naviBarLetters">COMPANY</span>
                        <br> <a href="#">Home</a>
                        <br><a href="#">Shop</a>
                        <br><a href="#">About</a>
                        <br><a href="#">How It Works</a>
                        <br><a href="#">Contanct</a></div>
                    <div class="naviBarList"><span class="naviBarLetters">INFORMATION</span>
                        <br><a href="#">Tearms &amp; Condition</a>
                        <br> <a href="#">Privacy Policy</a>
                        <br><a href="#">How to Buy</a>
                        <br> <a href="#">How to Sell</a>
                        <br> <a href="#">Promotion</a> </div>
                    <div class="naviBarList"><span class="naviBarLetters">SHOP CATEGORY</span>
                        <br><a href="#">Man</a>
                        <br><a href="#">Women</a>
                        <br> <a href="#">Child</a>
                        <br><a href="#">Apparel</a>
                        <br><a href="#">Brows All</a></div>
                </nav>
            </div>
        </footer>
        <div class="footerRights">
            <div class="container rights">
                <div class="rightText">© 2017 Brand All Rights Reserved.</div>
                <div class="social"> <a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> <a href="#"><i class="fab fa-linkedin-in"></i></a> <a href="#"><i class="fab fa-pinterest-p"></i></a> <a href="#"><i class="fab fa-google-plus-g"></i></a> </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Catalog from '@/components/Catalog.vue';
    import Basket from '@/components/Basket.vue';
    export default {
        name: 'Home', 
        components: {Catalog, Basket}
    }
</script>