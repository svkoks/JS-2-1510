// import Basket from "./basket.js"
// import Catalog from "./catalog.js"

// export default () => {
//     let basket = new Basket();
//     let catalog = new Catalog(basket);
// }

Vue.component('basket-item', {
    props: ['todo'],
    template: `<div class="hot-offer">
                    <div class="hot-offer__shadow">
                        <img :src="todo.productImg" alt="t-shirt">
                        <div class="hot-offer__hover">
                            <div class="hot-offer__square">
                                <button 
                                    name="add"
                                    data-id="{{todo.productId}}"
                                    data-name="{{todo.productName}}"
                                    data-img="{{todo.productImg}}"
                                    data-price="{{item.productPrice}}"
                                ><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <a href="single.html">{{todo.productName}}</a>
                    <h3>
                        $ {{todo.productPrice}}
                        <!--stars-->
                    </h3>
                </div>
    
    `
})

const app = new Vue({
    el: "#app",
    data: {
        items:[],
        url: "https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json",
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }
    },
    mounted() {
        this.get(this.url)
            .then(data => {
                this.items = data;
            });
    },
})