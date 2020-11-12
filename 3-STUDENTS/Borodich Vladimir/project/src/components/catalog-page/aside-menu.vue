<template>
	<aside class="aside-nav">
		<AsideMenuBlock v-for="(block, index) in blocks" :key="index" :item="block" :indexBlock="index" />
	</aside>
</template>

<script>
	import AsideMenuBlock from './aside-menu-block';
	import { Get } from '@/services/http-service';
	export default {
		components: {
			AsideMenuBlock,
		},
		data() {
			return {
				url: 'https://raw.githubusercontent.com/wowankz/static/master/shop/menu/aside-menu.json',
				blocks: [],
			};
		},

		methods: {
			async getMenu() {
				let items = await Get(this.url);
				this.blocks = items ? items : [];
			},
		},
		created() {
			this.getMenu();
		},
	};
</script>

<style></style>
