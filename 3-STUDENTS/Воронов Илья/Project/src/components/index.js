export default () => {
    const app = new Vue({
        el: '#app',
        data: {
            catalog: {
                items: [],
                url: 'https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/catalog.json'
            },
            basket: {
                items: [],
                url: 'https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/basket.json',
            }
        },
        methods: {
            _get(url) {
                return fetch(url).then(d => d.json());
            },
            add(item) {
                let find = this.basket.items.find(basketItem => basketItem.productId == item.productId);

                if (!find) {
                    this.basket.items.push(Object.assign({}, item, { amount: 1 }));
                } else {
                    find.amount++;
                }
            },
            remove(id) {
                let find = this.basket.items.find(basketItem => basketItem.productId == id);

                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basket.items.splice(this.basket.items.indexOf(find), 1);
                }
            }
        },
        async mounted() {
            try {
                this.catalog.items = await this._get(this.catalog.url);
                this.basket.items = (await this._get(this.basket.url)).content;
            } catch (err) {
                console.log(err);
            } finally {
                //console.log(await this._get(this.basket.url));
            }
        }
    })
}