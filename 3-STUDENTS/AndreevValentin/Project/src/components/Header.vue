<template>
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
</template>

<script>
	import Cart from "./Cart.vue";

	export default {
		components: {Cart},

		methods: {
			addToCart(item) {
				this.$refs.cart.add(item);
			}
		}
	};
</script>
