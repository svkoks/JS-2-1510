<template>
	<li class="cartPopup__item" >
		<img :src="item.img" :alt="item.name" class="cartPopup__itemImg">
		<div class="cartPopup__itemDetails">
			<p class="cartPopup__itemName">{{item.name}}</p>
			<p class="cartPopup__itemPrice">{{item.qty}}&nbsp;&times;&nbsp;${{formatPrice(item.price)}}</p>
		</div>
		<button href="#" class="cartPopup__itemRemove fas fa-times-circle"
			@click="$emit('item-removed', {item, index})"></button>
	</li>
</template>

<script>
	import {formatPrice} from "@/core/formatPrice.js";

	export default {
		props: ["item", "index"],
		methods: {formatPrice}
	};
</script>
