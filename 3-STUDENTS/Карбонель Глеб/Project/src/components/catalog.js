import { SHOP } from './SHOP.js';

export class Catalog extends SHOP{

    constructor(basket, container, url){
        super(basket, container = '#catalog', url = '/catalog.json');
        this.type = 'catalog';
    }

    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price
                })
            }
        })
    }

}