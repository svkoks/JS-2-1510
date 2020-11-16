
export default class Item {
    constructor(item) {
        this.item = item;
    }

    renderBasket() {
        return `<div class="basket__item">
        <img src="${this.item.productImg}" alt="item1">
        <div class="basket__item-about">
            <h3>${this.item.productName}</h3>
            <div class="hot-offer__stars-basket">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div${this.item.stars ? this.item.stars : ""}></div>
            </div>
            <div class="amount-price">
                <span id="amount-item">${this.item.amount}</span>&nbsp;
                x &nbsp;$
                <span id="price-item">${this.item.productPrice}.00</span>
            </div>
        </div>
        <a href="#" name="remove" data-id=${this.item.productId}><i class="fas fa-times-circle"></i></a>
        </div>`;
    }

    renderCatalog() {
        return `<div class="hot-offer">
        <div class="hot-offer__shadow">
            <img src="${this.item.productImg}" alt="t-shirt">
            <div class="hot-offer__hover">
                <div class="hot-offer__square">
                    <button 
                    name="add-to-cart" 
                    data-id="${this.item.productId}" 
                    data-name="${this.item.productName}"
                    data-price="${this.item.productPrice}"
                    data-image="${this.item.productImg}" 
                    data-stars="${this.item.stars}"
                    ><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                </div>
            </div>
        </div>
        <a href="single.html">${this.item.productName}</a>
        <h3>
            $${this.item.productPrice}.00
            <div class="hot-offer__stars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div${this.item.stars}></div>
            </div>
        </h3>
        </div>`;
    }
}