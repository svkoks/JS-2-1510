import Item from './item.js';
export default class Goods {
    
    constructor (basket, container, url) {       /*basket, */
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/Nicknk77/img/master/dist' + url;
        this.basket = basket;
        this._init();
    }
    
    _init() {
        this._get(this.url)
        .then(data => {
            this.items = this.type === 'catalog' ? data : data.content;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    }

    _get(url) {
        return fetch(url).then(d => d.json())   //на выходе из этого метода вы получите полноценный объект(массив) с данными
    }

    _render() {
        let str = '';
        this.items.forEach((item) => {
            if (this.type === 'catalog') str += new Item(item).renderCatalog();
            else if (this.type === 'basket') str += new Item(item).renderBasket();
        });
        this.container.innerHTML = str;
        if (this.type === 'basket') this._sum();
    }

}