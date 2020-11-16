<template>
	<form action="#" class="catalog-form">
		<div class="catalog-form__trending">
			<h3 class="catalog-form__heading">Trending now</h3>
			<div class="catalog-form__trending-inputs">
				<label class="catalog-form__trending-label">
					<input class="catalog-form__trending-input" type="checkbox" name="bohemian" hidden />
					<span>Bohemian</span>
				</label>
				<label class="catalog-form__trending-label">
					<input class="catalog-form__trending-input" type="checkbox" name="floral" hidden />
					<span>Floral</span>
				</label>
				<label class="catalog-form__trending-label">
					<input class="catalog-form__trending-input" type="checkbox" name="lace" hidden />
					<span>Lace</span>
				</label>
				<label class="catalog-form__trending-label">
					<input class="catalog-form__trending-input" type="checkbox" name="Floral" hidden />
					<span>Floral</span>
				</label>
				<label class="catalog-form__trending-label">
					<input class="catalog-form__trending-input" type="checkbox" name="Lace" hidden />
					<span>Lace</span>
				</label>
				<label class="catalog-form__trending-label">
					<input class="catalog-form__trending-input" type="checkbox" name="Bohemian" hidden />
					<span>Bohemian</span>
				</label>
			</div>
		</div>
		<ChooseSize />
		<RangeInput />
		<SortContainer/>
	</form>
</template>

<script>
	import RangeInput from './range-input';
	import ChooseSize from './choose-size';
	import SortContainer from './sort-container';
	export default {
		components: {
			RangeInput,
			ChooseSize ,
			SortContainer
		},
		
	};
</script>

<style></style>
