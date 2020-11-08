<template>
	<div class="featured__items">
		<RenderedCatalogItem v-for="item in items" :key="item.id" :item="item"
			@item-added="$emit('item-added', {item})" />
		<div class="snippet__filler"></div>
		<div class="snippet__filler"></div>
		<div class="snippet__filler"></div>
	</div>
</template>

<script>
	import CatalogItem from "./CatalogItem.js";
	import RenderedCatalogItem from "./RenderedCatalogItem.vue";

	export default {
		components: {RenderedCatalogItem},

		data() {
			return {
				items: []
			};
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
