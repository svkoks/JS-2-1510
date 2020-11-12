<template>
	<div class="product__slide-img">
		<a
			v-bind:class="{ disabled: imgNum === 0 }"
			@click.prevent="changeImg(-1)"
			href="#"
			class="product__slide-link product__slide-link_left"
		>
			<i class="fas fa-angle-left"></i>
		</a>

		<div v-show="loadImg" class="load-img"><i class="fas fa-spinner fa-spin"></i></div>

		<img
			v-show="!loadImg"
			:onload="loaded()"
			:src="`https://raw.githubusercontent.com/wowankz/static/master/shop/img/${img}`"
			alt="product"
			class="product__img"
		/>

		<a
			v-bind:class="{ disabled: imgNum === product.sliderImg.length - 1 }"
			@click.prevent="changeImg(1)"
			href="#"
			class="product__slide-link product__slide-link_right"
		>
			<i class="fas fa-angle-right"></i>
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			product: Object,
		},

		data() {
			return {
				img: 'slider-img.jpg',
				imgNum: 0,
				loadImg: true,
			};
		},

		methods: {
			changeImg(val) {
				console.log(this.loadImg);
				this.loadImg = true;
				this.imgNum += val;
				console.log(this.loadImg);
				this.img = this.product.sliderImg[this.imgNum];
			},

			loaded() {
				console.log('loaded');
				setTimeout(() => {
					this.loadImg = false;
				}, 300);
			},
		},

		mounted() {
			this.img = this.product.sliderImg[this.imgNum];
		},
	};
</script>

<style scoped>
	.load-img {
		position: absolute;
		top: 40%;
		left: 50%;
		font-size: 5rem;
		color: #9e9e9e;
		font-size: 5rem;
	}
</style>
