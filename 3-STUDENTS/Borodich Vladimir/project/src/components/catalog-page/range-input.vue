<template>
	<div class="catalog-form__price-box">
		<h3 class="catalog-form__heading">PRICE</h3>
		<div class="catalog-form__range-inputs">
			<div class="catalog-form__range-wrap">
				<div class="catalog-form__range">
					<div ref="track" class="track"></div>
					<input
						v-model="minValue"
						@input="minInput"
						@mousemove="mouseMove"
						@mouseup="mouseUp"
						name="min"
						type="range"
						min="0"
						max="760"
						step="1"
						class="catalog-form__range-min"
					/>
					<input
						v-model="maxValue"
						@input="maxInput"
						@mousemove="mouseMove"
						@mouseup="mouseUp"
						name="max"
						type="range"
						min="40"
						max="800"
						step="1"
						class="catalog-form__range-max"
					/>
				</div>
			</div>
		</div>
		<div class="catalog-form__range-outputs">
			<output name="minResult" for="min" class="catalog-form__output-min">${{ minValue }}</output>
			<output name="maxResult" for="max" class="catalog-form__output-max">${{ maxValue }}</output>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				minValue: 0,
				maxValue: 800,
			};
		},
		methods: {
			mouseUp() {
				this.$store.commit('setPrice', {
					from: this.minValue,
					to: this.maxValue,
				});
				this.$parent.$parent.$refs.catalog.update();
			},
			mouseMove(event) {
				if (event.target.name === 'min') this.$refs.track.style.right = 100 - (this.maxValue / 800) * 100 + 3 + '%';
				if (event.target.name === 'max') this.$refs.track.style.left = (this.minValue / 800) * 100 + 3 + '%';
			},
			maxInput() {
				if (this.maxValue - this.minValue <= 60) {
					this.minValue = +this.maxValue - 60;
					if (this.minValue <= 0) {
						this.maxValue = 60;
						this.minValue = 0;
					}
				}
				this.$refs.track.style.right = 100 - (this.maxValue / 800) * 100 + 3 + '%';
			},
			minInput() {
				if (this.maxValue - this.minValue <= 60) {
					this.maxValue = +this.minValue + 60;
					if (this.maxValue >= 800) {
						this.maxValue = 800;
						this.minValue = 740;
					}
				}
				this.$refs.track.style.left = (this.minValue / 800) * 100 + 3 + '%';
			},
		},
	};
</script>

<style scoped>
	.catalog-form__range {
		height: 6px;
		width: 265px;
		background-color: #f0f0f0;
		border-radius: 3px;
	}
	.track {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 2px;
		right: 2px;
		background-color: #f16d7f;
	}
</style>
