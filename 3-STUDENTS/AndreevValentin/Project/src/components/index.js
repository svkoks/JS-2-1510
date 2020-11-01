import CartItem from "./CartItem.js";
import CatalogItem from "./CatalogItem.js";

export default () => {
	new Vue({
		el: "#vueWrapper",
		data: {
			catalogItems: [],
			cartShown: false,
			cartItems: []
		},

		computed: {
			cartTotal() {
				return this.cartItems.reduce((a, b) => a + b.price * b.qty, 0);
			}
		},

		methods: {
			formatPrice(price) {
				return Math.floor(price / 100) + "." + `00${price}`.slice(-2);
			},

			addToCart(item) {
				const index = this.cartItems.findIndex(x => x.id == item.id);
				if(index == -1) {
					this.cartItems.push(new CartItem(item));
				} else {
					++this.cartItems[index].qty;
				}
			},

			removeFromCart(item, index) {
				if(--item.qty == 0) {
					this.cartItems.splice(index, 1);
				}
			}
		},

		created() {
			fetch(
				"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/catalog.json"
			).then(response => {
				return response.json();
			}).then(json => {
				json.forEach(jsonItem => {
					this.catalogItems.push(new CatalogItem(jsonItem.id, jsonItem.name,
						jsonItem.price, jsonItem.img));
				});
			});

			fetch(
				"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/cart.json"
			).then(response => {
				return response.json();
			}).then(json => {
				json.forEach(jsonItem => {
					this.cartItems.push(new CartItem(jsonItem.id, jsonItem.name,
						jsonItem.price, jsonItem.img, jsonItem.qty));
				});
			});
		}
	});
};
