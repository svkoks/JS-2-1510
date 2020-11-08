<template>
	<article class="snippet">
		<img :src="item.img" :alt="item.name" class="snippet__img">
		<div class="snippet__hover">
			<button class="snippet__addToCart"
				@click="$emit('item-added')">Add to cart</button>
		</div>
		<div class="snippet__caption">
			<h3 class="snippet__name">{{item.name}}</h3>
			<p class="snippet__price">${{formatPrice(item.price)}}</p>
		</div>
	</article>
</template>

<script>
	export default {
		props: ["item"],

		methods: {
			formatPrice(price) {
				return Math.floor(price / 100) + "." + `00${price}`.slice(-2);
			}
		}
	};
</script>
