<template>
  <div>
	  <div id="catalog">
		  <Item 
		  		v-for="item of items" 
				:key="item.productId"
				:item="item"
		  />
		</div>
		<div class="featured-items__undertitle">
				<a href="#">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></a>
		</div>
  </div>
</template>

<script>
import { get } from '@/core/requests'
import Item from './Catalogitem'

export default {
	components: { Item },
	data() {
		return {
			items: [],
			url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
		}
	},
	async mounted() {
			try {
				this.items = await get(this.url);
			}
			catch(err) {
				console.log(err);
			}
		}
}
</script>

<style>

</style>