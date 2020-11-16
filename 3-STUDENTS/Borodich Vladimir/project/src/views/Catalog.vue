<template>
	<div class="catalog-page">
		<Breadcrumb />

		<div class="wrap center">
			<AsideMenu />
			<main class="main">
				<div class="catalog">
					<SortForm />
					<Catalog ref="catalog" :category="category" :key="category" cl="catalog-products" />
					<Pagination />
				</div>
			</main>
		</div>
		<CatalogFeature />
	</div>
</template>

<script>
	import Breadcrumb from '@/components/shared/breadcrumb';
	import SortForm from '@/components/catalog-page/sort-form';
	import Catalog from '@/components/shared/catalog';
	import AsideMenu from '@/components/catalog-page/aside-menu';
	import Pagination from '@/components/catalog-page/pagination';
	import CatalogFeature from '@/components/catalog-page/catalog-feature';
	export default {
		data() {
			return {
				category: '',
			};
		},
		components: {
			Breadcrumb,
			SortForm,
			Catalog,
			AsideMenu,
			Pagination,
			CatalogFeature,
		},
		methods: {
			matchPath(path) {
				const re = /catalog\/(.*)\/?/;
				const res = path.match(re);
				if (res) {
					return res[1];
				} else {
					return 'catalog';
				}
			},
		},
		created() {
			this.category = this.matchPath(this.$route.path);
		},
		watch: {
			$route(toPath) {
				console.log(this.matchPath(toPath.path));
				this.category = this.matchPath(toPath.path);
			},
		},
	};
</script>

<style scoped>
	@import '../layout/css/catalog.css';
</style>
