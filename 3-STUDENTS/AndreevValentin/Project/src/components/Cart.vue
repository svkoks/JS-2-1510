<template>
	<div class="header__cart">
		<a href="#" class="header__cartLink" @click="shown = !shown"></a>
		<div class="cartPopup" v-show="shown">
			<ul class="cartPopup__items" id="cartPopupItems">
				<RenderedCartItem v-for="(item, index) in items" :key="item.id"
					:item="item" :index="index"
					@item-removed="remove($event.item, $event.index)" />
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
	import {formatPrice} from "@/core/formatPrice.js";
	import CartItem from "./CartItem.js";
	import RenderedCartItem from "./RenderedCartItem.vue";

	export default {
		components: {RenderedCartItem},

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
			formatPrice,

			add(item) {
				const index = this.items.findIndex(x => x.id == item.id);
				let newItem;
				if(index == -1) {
					newItem = new CartItem(item);
					this.items.push(newItem);
				} else {
					newItem = this.items[index];
					++newItem.qty;
				}
				fetch(`/api/cart/${item.id}`, {
					method: "put",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(newItem)
				});
			},

			remove(item, index) {
				if(--item.qty == 0) {
					this.items.splice(index, 1);
					fetch(`/api/cart/${item.id}`, {
						method: "delete"
					});
				} else {
					console.log(JSON.stringify(item));
					fetch(`/api/cart/${item.id}`, {
						method: "put",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify(item)
					});
				}
			}
		},

		async created() {
			const response = await fetch("/api/cart");
			const json = await response.json();
			json.forEach(jsonItem => {
				this.items.push(new CartItem(jsonItem.id, jsonItem.name,
					jsonItem.price, jsonItem.img, jsonItem.qty));
			});
		}
	};
</script>
