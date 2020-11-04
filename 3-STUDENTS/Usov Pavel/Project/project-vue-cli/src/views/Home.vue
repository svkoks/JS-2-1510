<template>
  <div>
    <Header />
  <div class="image-frame">
      <div class="container second-block">
          <div class="forBorder">
              <div class="theBrand">The Brand</div>
              <div class="ofLuxerious">of luxerious <span>fashion</span></div>
          </div>
      </div>
  </div>
  <div class="container hot-offers">
      <div class="hot-offers__left">
          <a class="hot-offers__square">
            <img src="@/assets/img/Layer 30.jpg" alt="">
            <div class="hot-offers__text">
                <div class="hot-offers__upper-text">
                    hot deal
                </div>
                <div class="hot-offers__under-text">
                    for men
                </div>
            </div>
          </a>
          <a class="hot-offers__square">
            <img src="@/assets/img/Layer 37.jpg" alt="">
            <div class="hot-offers__text">
                <div class="hot-offers__upper-text">
                    luxirous &amp; trendy
                </div>
                <div class="hot-offers__under-text">
                    accesories
                </div>
            </div>
          </a>
      </div>
      <div class="hot-offers__right">
          <a class="hot-offers__square">
            <img src="@/assets/img/Layer 32.jpg" alt="">
            <div class="hot-offers__text">
                <div class="hot-offers__upper-text">
                    30% offer
                </div>
                <div class="hot-offers__under-text">
                    women
                </div>
            </div>
          </a>
          <a class="hot-offers__square">
            <img src="@/assets/img/Layer 31.jpg" alt="">
            <div class="hot-offers__text">
                <div class="hot-offers__upper-text">
                    new arrivals
                </div>
                <div class="hot-offers__under-text">
                    for kids
                </div>
            </div>
          </a>
      </div>
  </div>
  <div class="container featured-items">
      <div class="featured-items__title">
          <h2>Featured Items</h2>
          <h4>Shop for items based on what we featured in this week</h4>
      </div>
      <Catalog />
      <div class="featured-items__undertitle">
          <a href="#">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
  </div>  <!-- End of div.featured-items-->
  <div class="container offer-women">
      <div class="offer-women__dicount">
          <h2>30% <span>offer</span></h2>
          <h3>for women</h3>
      </div>
      <div class="offer-women__bonus">
          <div class="offer-women__pic"><img src="@/assets/img/car.png" alt=""></div>
          <div class="offer-women__text">
              <h3>Free Delivery</h3>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
      </div>
      <div class="offer-women__bonus">
          <div class="offer-women__pic"><img src="@/assets/img/proc.png" alt=""></div>
          <div class="offer-women__text">
              <h3>Sales &amp; discounts</h3>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
      </div>
      <div class="offer-women__bonus">
          <div class="offer-women__pic"><img src="@/assets/img/corona.png" alt=""></div>
          <div class="offer-women__text">
              <h3>Quality assurance</h3>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
      </div>
  </div><!-- End of .offer-women -->
  <div class="subscibe">
      <div class="subscibe-shadow">
          <div class="container subscibe_wrapper">
              <div class="subscribe-left">
                  <img src="@/assets/img/subsribe-face.png" alt="face">
                  <div>
                      <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                      <h4>Bin Burhan</h4>
                      <p>Dhaka, Bd</p>
                      <div class="subscribe-pagination">
                          <a href="#"></a>
                          <a href="#"></a>
                          <a href="#"></a>
                      </div>
                  </div>
              </div>
              <div class="subscribe-border"></div>
              <div class="subscribe-right">
                  <h3>subscribe</h3>
                  <h4>for our newletter and promotion</h4>
                  <form action="">
                      <input type="text" placeholder="Enter your Email">
                      <button>Subscribe</button>
                  </form>
              </div>
          </div> <!-- End of .subscibe_wrapper -->
      </div>
  </div> <!-- End of .subscibe -->
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Catalog from '@/components/Catalog.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Catalog
  }
}
</script>
