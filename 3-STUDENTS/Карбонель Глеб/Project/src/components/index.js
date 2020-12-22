// import { Basket } from './basket.js';
// import { Catalog } from './catalog.js';
// import { mainMenuItems } from './mainMenuItems.js';
// import { footerMenuItems } from './footerMenuItems.js';
//
// export default () => {
//     let basket = new Basket();
//     let catalog = new Catalog(basket);
//     let mainMenu = new mainMenuItems();
//     let footerMenu = new footerMenuItems();
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
                show: false
            }
            // topMenuItems: [
            //     {
            //         name: 'Home',
            //         href: 'product.html'
            //     },
            //     {
            //         name: 'Man',
            //         href: 'product.html'
            //     },
            //     {
            //         name: 'Women',
            //         href: 'product.html'
            //     },
            //     {
            //         name: 'Kids',
            //         href: 'product.html'
            //     },
            //     {
            //         name: 'Accessories',
            //         href: 'product.html'
            //     },
            //     {
            //         name: 'Featured',
            //         href: 'product.html'
            //     },
            //     {
            //         name: 'Hot Deals',
            //         href: 'product.html'
            //     }
            // ],
            // footerMenuItems: {
            //
            // }
        },
        methods: {
            _get(url) {
                return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
            },
            add(item) {
                let find = this.basket.items.find(basketItem => basketItem.productId == item.productId);

                if (!find) {
                    this.basket.items.push(Object.assign({}, item, { amount: 1 }));
                } else {
                    find.amount++;
                }
                this._render();
            },
            remove(id) {
                let find = this.items.find(basketItem => basketItem.productId == id);

                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basket.items.splice(this.basket.items.indexOf(find), 1);
                }
                this._render();
            },
            async mounted(){
                try {
                    this.catalog.items = await this._get(this.catalog.url);
                    this.basket.items = await this._get(this.basket.url).content;
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    });
}