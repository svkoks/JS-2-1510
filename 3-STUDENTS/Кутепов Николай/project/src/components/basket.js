
import Goods from './goods.js';

export default class Basket extends Goods {
    constructor (container = '#basket-list', url = '/basket.json', basket = null) {
        super(basket, container, url)
        this.wrapper = document.querySelector('#basket');
        this.basket_link = document.querySelector("#basket-link");
        this.type = 'basket';
    }


    _handleEvents() {
        this.basket_link.addEventListener('click', e => {
            this.wrapper.classList.toggle('hidden');
        });
        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove' || e.target.parentNode.name == 'remove') {
                let id = e.target.dataset.id ? e.target.dataset.id : e.target.parentNode.dataset.id;
                this._remove(id);
            }
        });
    }

    _sum() {
        let total_cost = 0;
        this.items.forEach((item) => {
            total_cost += +item.amount * +item.productPrice;
        });
        document.querySelector('#total-cost').innerText = `$${total_cost}.00`;
    }

    _remove(id) {
        let find = this.items.find(item => item.productId == id);
        if (find.amount > 1) --find.amount;
        else this.items.splice(this.items.indexOf(find), 1);
        this._render();
    }

    add(item) {
        let find = this.items.find(basketItem => basketItem.productId == item.productId);
        if (!find) {
            item.amount = 1;
            this.items.push(item);
        }else {
            find.amount++;
        }
        this._render();
    }

}

// basket.init();