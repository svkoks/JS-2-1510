<template>
	<div class="featured__items">
		<article class="snippet" v-for="item in items" :key="item.id">
			<img :src="item.img" :alt="item.name" class="snippet__img">
			<div class="snippet__hover">
				<button class="snippet__addToCart"
					@click="$emit('item-added', {item})">Add to cart</button>
			</div>
			<div class="snippet__caption">
				<h3 class="snippet__name">{{item.name}}</h3>
				<p class="snippet__price">${{formatPrice(item.price)}}</p>
			</div>
		</article>
		<div class="snippet__filler"></div>
		<div class="snippet__filler"></div>
		<div class="snippet__filler"></div>
	</div>
</template>

<script>
	import CatalogItem from "./CatalogItem.js";

	export default {
		data() {
			return {
				items: []
			};
		},

		methods: {
			formatPrice(price) {
				return Math.floor(price / 100) + "." + `00${price}`.slice(-2);
			}
		},

		created() {
			fetch(
				"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/catalog.json"
			).then(response => {
				return response.json();
			}).then(json => {
				json.forEach(jsonItem => {
					this.items.push(new CatalogItem(jsonItem.id, jsonItem.name,
						jsonItem.price, jsonItem.img));
				});
			});
		}
	};
</script>
