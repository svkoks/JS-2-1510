// import Basket from './basket';
// import Catalog from './catalog';

// export default () => {
//     let basket = new Basket;
//     let catalog = new Catalog(basket)
// }

export default () => {
    const app = new Vue({
        el: '#app',
        data: {
            catalog: {
                items: [],
                url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
            },
            basket: {
                items: [],
                url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
                show: false, 
                total: 0
            }
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json())
            },
            add(product) {
                let find = this.basket.items.find(el => el.productId == product.productId);
                console.log(find)
                // this.basket.total += find.
                    if (!find) {
                        let newItem = Object.assign({}, product, { amount: 1 });
                        this.basket.items.push(newItem);
                    } else {
                        find.amount++;
                    }
            }, 
            remove(id) {
                let find = this.basket.items.find(el => el.productId == id);
        
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basket.items.splice(this.basket.items.indexOf(find), 1);
                }
                this._render();
            },
            calcTotal() {
                let sum = 0;
                for (let item of this.basket.items){
                    sum += item.productPrice * item.amount;
                }
                return sum;
            }

        },
        async mounted () {
            try {
                this.catalog.items = await this.get(this.catalog.url);
                this.basket.items = (await this.get(this.basket.url)).content;
            }
            catch(err) {
                console.log(err);
            }
        }
    })
}