export default () => {
    const app = new Vue ({
        el: '#app',
        data: {
            catalog: {
                items: [],
                url: 'https://raw.githubusercontent.com/Nicknk77/img/master/dist/catalog.json',
            },
            basket: {
                items: [],
                url: 'https://raw.githubusercontent.com/Nicknk77/img/master/dist/basket.json',
                show: false,
                sum:0
            }
        },
        methods: {
            
            get(url) {
                return fetch(url).then(d => d.json())   //на выходе из этого метода вы получите полноценный объект(массив) с данными
            },

            remove(id) {
                let find = this.basket.items.find(item => item.productId == id);
                if (find.amount > 1) --find.amount;
                else this.basket.items.splice(this.basket.items.indexOf(find), 1);
                this.summ();
            },
        
            add(item) {
                let find = this.basket.items.find(basketItem => basketItem.productId == item.productId);
                if (!find) {
                    item.amount = 1;
                    this.basket.items.push(item);
                }else {
                    find.amount++;
                }
                this.summ();
            },
            summ() {
                let sum = 0;
                for (let i = 0; i < this.basket.items.length; i++) {
                    sum += this.basket.items[i].productPrice * this.basket.items[i].amount;
                }
                 this.basket.sum = sum;//this.basket.items.length;
            }
        },
        async mounted() {       // await мы пишем перед промистсными методами . асинхрону всегда нужно кэтч или файнели
            try {               // await заменяет then(() => { ... })
                this.catalog.items = await this.get(this.catalog.url);
                this.basket.items = (await this.get(this.basket.url)).content;
                this.summ();
                
                
            }
            catch(err) {
                console.log(err);
            }
        }

    })

}