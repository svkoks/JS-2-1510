<template>
	<div>
		<Header ref="header" />

		<div class="top container">
			<div class="top__text">
				<h2 class="top__textFirst">The brand</h2>
				<p class="top__textSecond">of luxurious
					<span class="highlight">fashion</span></p>
			</div>
		</div>

		<div class="promos container">
			<div class="promos__item">
				<img class="promos__img" src="@/assets/img/promo-0.jpg" alt="">
				<div class="promos__label">
					<h3 class="promos__labelTitle">Hot deal</h3>
					<p class="promos__labelSubtitle">For men</p>
				</div>
			</div>

			<div class="promos__item">
				<img class="promos__img" src="@/assets/img/promo-1.jpg" alt="">
				<div class="promos__label">
					<h3 class="promos__labelTitle">Luxurious &amp; trendy</h3>
					<p class="promos__labelSubtitle">Accessories</p>
				</div>
			</div>

			<div class="promos__item">
				<img class="promos__img" src="@/assets/img/promo-2.jpg" alt="">
				<div class="promos__label">
					<h3 class="promos__labelTitle">30% offer</h3>
					<p class="promos__labelSubtitle">Women</p>
				</div>
			</div>

			<div class="promos__item">
				<img class="promos__img" src="@/assets/img/promo-3.jpg" alt="">
				<div class="promos__label">
					<h3 class="promos__labelTitle">New arrivals</h3>
					<p class="promos__labelSubtitle">For kids</p>
				</div>
			</div>
		</div>

		<div class="featured container">
			<h2 class="featured__title">Featured items</h2>
			<p class="featured__subtitle">Shop for items based on what we featured
				this week</p>
			<Catalog @item-added="addToCart($event.item)" />
			<a href="#" class="featured__browseAll">Browse all products</a>
		</div>

		<div class="offer container">
			<div class="offer__left">
				<h2 class="offer__leftTitle">30%
					<span class="highlight">offer</span></h2>
				<p class="offer__leftSubtitle">for women</p>
			</div>
			<div class="offer__right">
				<div class="offer__feature">
					<h3 class="offer__featureTitle">Free delivery</h3>
					<p class="offer__featureDesc">World&shy;wide de&shy;liv&shy;ery on
						all. Au&shy;thor&shy;it&shy;at&shy;ively morph
						next-gen&shy;er&shy;a&shy;tion in&shy;nov&shy;a&shy;tion with
						ex&shy;tens&shy;ive mod&shy;els.</p>
				</div>

				<div class="offer__feature">
					<h3 class="offer__featureTitle">Sales &amp; discount</h3>
					<p class="offer__featureDesc">World&shy;wide de&shy;liv&shy;ery on
						all. Au&shy;thor&shy;it&shy;at&shy;ively morph
						next-gen&shy;er&shy;a&shy;tion in&shy;nov&shy;a&shy;tion with
						ex&shy;tens&shy;ive mod&shy;els.</p>
				</div>

				<div class="offer__feature">
					<h3 class="offer__featureTitle">Quality assurance</h3>
					<p class="offer__featureDesc">World&shy;wide de&shy;liv&shy;ery on
						all. Au&shy;thor&shy;it&shy;at&shy;ively morph
						next-gen&shy;er&shy;a&shy;tion in&shy;nov&shy;a&shy;tion with
						ex&shy;tens&shy;ive mod&shy;els.</p>
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Catalog from "@/components/Catalog.vue";
	import Footer from "@/components/Footer.vue";

	export default {
		components: {Header, Catalog, Footer},

		methods: {
			addToCart(item) {
				this.$refs.header.addToCart(item);
			}
		}
	};
</script>
