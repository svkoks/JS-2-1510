<template>
	<div  :class="cl">
		<div v-show="catalogItems.length < 1" style="width: 100%; font-size: 5rem; color: #eeeeee; text-align: center">
			<i class="fas fa-spinner fa-spin"></i>
		</div>
		<Item v-for="item of items" :key="item.id" :item="item" :category="category" />
	</div>
</template>

<script>
	import Item from './item';
	import { Get } from '@/services/http-service';
	export default {
		props: {
			cl: String,
			category: String,
			amount: Number,
		},
		components: {
			Item,
		},

		data() {
			return {
				catalogItems: [],
				baseUrl: '/api/catalog/',
			};
		},

		methods: {
			async update(){
				await this.getProducts(this.baseUrl + this.category+`?${this.$store.getters.priceForQuery}${this.$store.getters.checkedSizeForQuery}`);
			},
			async getProducts(url) {
				let items = await Get(url);
				this.catalogItems = items ? items : [];
			},

			sortItems() {
				const typeSort = this.$store.state.sortForm.sort;
				return this.catalogItems.sort((a, b) => {
					switch (typeSort) {
						case 'name':
							if (a[typeSort] > b[typeSort]) return 1;
							if (a[typeSort] < b[typeSort]) return -1;
							return 0;
						case 'price':
							if (+a[typeSort] > +b[typeSort]) return 1;
							if (+a[typeSort] < +b[typeSort]) return -1;
							return 0;
						default:
							return 0;
					}
				});
			},
		},
		computed: {
			items() {
				let from = 0;
				let to = Math.abs(this.amount) || Math.abs(this.$store.state.sortForm.amount);
				return this.sortItems().slice(from, to);
			},
		},

		created() {
			this.getProducts(this.baseUrl + this.category+`?${this.$store.getters.priceForQuery}`);
		},
	};
</script>

<style></style>
