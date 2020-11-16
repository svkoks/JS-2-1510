<template>
	<div class="product__info">
		<div class="product__desc ">
			<div class="category-name">
				{{ category }} COLLECTION
				<div class="category-name__border-button"></div>
			</div>
			<h1 class="product__info-h1">{{ product.name }}</h1>
			<div class="product__stars">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star-half-alt"></i>
			</div>
			<p class="product__text">
				{{ product.desc }}
			</p>
			<div class="product__property">
				<div class="property">
					<span class="property__name">MATERIAL: </span>
					<span class="property__value"> {{ product.material }} </span>
				</div>
				<div class="property">
					<span class="property__name">DESIGNER: </span>
					<span class="property__value"> {{ product.designer }} </span>
				</div>
			</div>

			<span class="product__price">${{ product.price }}</span>
			<div class="product__hr"></div>
			<form method="POST" class="product__choose">
				<div class="product__choose-datalist" data-color="">
					<label class="product__choose-name" for="color">CHOOSE COLOR</label><br />
					<input name="color" id="color" list="colors" placeholder="Red" />
					<datalist id="colors">
						<option selected value="RED">RED</option>
						<option value="RED" />
						<option value="Blue" />
					</datalist>
				</div>
				<div class="product__choose-datalist">
					<label class="product__choose-name" for="size">CHOOSE SIZE</label> <br />
					<input name="size" list="sizes" id="size" placeholder="XXL" />
					<datalist id="sizes">
						<option selected value="XXL"> </option>
						<option value="XL"> </option>
					</datalist>
				</div>
				<div class="product__choose-datalist">
					<label class="product__choose-name" for="quantity">QUANTITY</label><br />
					<input min="1" type="number" name="quantity" id="quantity" placeholder="2" v-model="amount" />
				</div>
			</form>
			<a href="#" v-bind:class="{ disabled: amount < 1 }" @click.prevent="addToBasket" class="product__button">
				<img src="@/assets/images/cart-red.png" alt="cart" class="product__button-img" />
				Add to Cart
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			product: Object,
		},
		data() {
			return {
				amount: 1,
				productId: this.$route.params.id,
				category: '',
			};
		},
		methods: {
			addToBasket() {
				if (this.amount >= 1) this.$store.dispatch('addToBasket', { id: this.productId, amount: +this.amount });
			},
		},
		created() {
			this.category = this.$route.params.category;
			this.productId = this.$route.params.id;
		},
	};
</script>

<style></style>
