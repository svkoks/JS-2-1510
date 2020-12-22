import Item from "./Item.js";

export default class CartItem extends Item {
	constructor() {
		// We can construct a CartItem either from an Item or from raw values
		if(arguments[0] instanceof Item) {
			const [item, qty = 1] = arguments;
			super(item.id, item.name, item.price, item.img);
			this.qty = qty;
		} else {
			const [id, name, price, img, qty = 1] = arguments;
			super(id, name, price, img);
			this.qty = qty;
		}
	}
}
