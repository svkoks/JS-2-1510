<template>
	<div>
		<header class="header">
			<div class="header__top container">
				<div class="header__left">
					<a href="index.html" class="logo">
						<img class="logo__img" src="@/assets/img/logo.png"
							alt="Brand"><h1 class="logo__title">Bran<span
							class="logo__titleLast highlight">d</span></h1>
					</a>

					<div class="header__search">
						<a href="#" class="header__browse">Browse<i
							class="header__browseCaret fas fa-caret-down"></i></a>
						<form class="header__searchForm">
							<input type="search" class="header__searchBox"
							placeholder="Search for item…"><button
							class="header__searchBtn"><i class="fas fa-search"></i></button>
						</form>
					</div>
				</div>

				<div class="header__right">
					<Cart ref="cart" />
					<a href="#" class="header__myAccount">My account<i
						class="header__myAccountCaret fas fa-caret-down"></i></a>
				</div>
			</div>

			<nav class="header__menu">
				<a class="header__menuItem" href="#">Home</a>
				<a class="header__menuItem" href="#">Men</a>
				<a class="header__menuItem" href="#">Women</a>
				<a class="header__menuItem" href="#">Kids</a>
				<a class="header__menuItem" href="#">Accessories</a>
				<a class="header__menuItem" href="#">Featured</a>
				<a class="header__menuItem" href="#">Hot deals</a>
			</nav>
		</header>

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
			<div class="featured__items">
				<article class="snippet" v-for="item in catalogItems" :key="item.id">
					<img :src="item.img" :alt="item.name" class="snippet__img">
					<div class="snippet__hover">
						<button class="snippet__addToCart"
							@click="addItemToCart(item)">Add to cart</button>
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
	import CatalogItem from "@/components/CatalogItem.js";

	import Cart from "@/components/Cart.vue";
	import Footer from "@/components/Footer.vue";

	export default {
		components: {Cart, Footer},

		data() {
			return {
				catalogItems: []
			};
		},

		methods: {
			formatPrice(price) {
				return Math.floor(price / 100) + "." + `00${price}`.slice(-2);
			},

			addItemToCart(item) {
				this.$refs.cart.add(item);
			}
		},

		created() {
			fetch(
				"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/catalog.json"
			).then(response => {
				return response.json();
			}).then(json => {
				json.forEach(jsonItem => {
					this.catalogItems.push(new CatalogItem(jsonItem.id, jsonItem.name,
						jsonItem.price, jsonItem.img));
				});
			});
		}
	};
</script>
