

export default ()=>{
    const app = new Vue({
        el: '#app',
        data: {
            catalog: {
                items:[],
                url:'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
            },
            basket: {
                items:[],
                url:'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
                show: false
            }
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json())
            },
            add(item) {
                // console.log('add ' + item.productName)
                let find = this.basket.items.find(basketItem => basketItem.productId == item.productId);
        
                if (!find) {
                    this.basket.items.push(Object.assign({}, item, { amount: 1 }));
                } else {
                    find.amount++;
                }
                this._render();
            },
            remove(id) {
                let find = this.basket.items.find(basketItem => basketItem.productId == id);
        
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basket.items.splice(this.basket.items.indexOf(find), 1);
                }
                this._render();
            }
        },
        async mounted(){
            try {
                this.catalog.items = await this.get(this.catalog.url);
                this.basket.items = (await this.get(this.basket.url)).content;
            }
            catch(err){
                console.log(err);
            }
        }
    })
}