<template>
	<div class="header__cart">
		<a href="#" class="header__cartLink" @click="shown = !shown"></a>
		<div class="cartPopup" v-show="shown">
			<ul class="cartPopup__items" id="cartPopupItems">
				<li class="cartPopup__item" v-for="(item, index) in items"
						:key="item.id">
					<img :src="item.img" :alt="item.name" class="cartPopup__itemImg">
					<div class="cartPopup__itemDetails">
						<p class="cartPopup__itemName">{{item.name}}</p>
						<p class="cartPopup__itemPrice">{{item.qty}}&nbsp;&times;&nbsp;${{formatPrice(item.price)}}</p>
					</div>
					<button href="#" class="cartPopup__itemRemove fas fa-times-circle"
						@click="remove(item, index)"></button>
				</li>
			</ul>
			<div class="cartPopup__total">
				<p class="cartPopup__totalLabel">Total</p>
				<p class="cartPopup__totalValue">${{formatPrice(total)}}</p>
			</div>
			<a href="checkout.html" class="cartPopup__checkout">Checkout</a>
			<a href="cart.html" class="cartPopup__goToCart">Go to cart</a>
		</div>
	</div>
</template>

<script>
	import CartItem from "@/components/CartItem.js";

	export default {
		data() {
			return {
				shown: false,
				items: []
			};
		},

		computed: {
			total() {
				return this.items.reduce((a, b) => a + b.price * b.qty, 0);
			}
		},

		methods: {
			formatPrice(price) {
				return Math.floor(price / 100) + "." + `00${price}`.slice(-2);
			},

			add(item) {
				const index = this.items.findIndex(x => x.id == item.id);
				if(index == -1) {
					this.items.push(new CartItem(item));
				} else {
					++this.items[index].qty;
				}
			},

			remove(item, index) {
				if(--item.qty == 0) {
					this.items.splice(index, 1);
				}
			}
		},

		created() {
			fetch(
				"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/cart.json"
			).then(response => {
				return response.json();
			}).then(json => {
				json.forEach(jsonItem => {
					this.items.push(new CartItem(jsonItem.id, jsonItem.name,
						jsonItem.price, jsonItem.img, jsonItem.qty));
				});
			});
		}
	};
</script>
