<template>
	<div class="catalog-form__sort-container">
		<div class="catalog-form__sort">
			<div class="catalog-form__sort-name">Sort By</div>
			<div @click="sortToggle" class="catalog-form__sort-details">
				<div class="catalog-form__sort-value">
					<output name="sortBy" for="sort">{{ sortName }}</output>
				</div>
				<div v-show="openSort" class="catalog-form__sort-options">
					<label class="catalog-form__sort-label">
						Name
						<input
							@click="sortToggle"
							class="catalog-form__sort-input"
							type="radio"
							name="sort"
							value="name"
							v-model="sort"
							checked
							hidden
						/>
					</label>
					<label class="catalog-form__sort-label">
						Price
						<input
							@click="sortToggle"
							class="catalog-form__sort-input"
							type="radio"
							name="sort"
							value="price"
							v-model="sort"
							hidden
						/>
					</label>
					<label class="catalog-form__sort-label">
						Size
						<input
							@click="sortToggle"
							class="catalog-form__sort-input"
							type="radio"
							name="sort"
							value="size"
							v-model="sort"
							hidden
						/>
					</label>
				</div>
			</div>
		</div>
		<div class="catalog-form__show">
			<div class="catalog-form__show-name">Show</div>
			<div @click="amountToggle" class="catalog-form__show-details">
				<div class="catalog-form__show-value">
					<output name="showValue" for="show">{{ amountValue }}</output>
				</div>
				<div v-show="openAmount" class="catalog-form__show-options">
					<label class="catalog-form__show-label">
						09
						<input
							@click="amountToggle"
							class="catalog-form__show-input"
							type="radio"
							name="show"
							value="09"
							v-model="amount"
							checked
							hidden
						/>
					</label>
					<label class="catalog-form__show-label">
						12
						<input
							@click="amountToggle"
							class="catalog-form__show-input"
							type="radio"
							name="show"
							value="12"
							v-model="amount"
							hidden
						/>
					</label>
					<label class="catalog-form__show-label">
						15
						<input
							@click="amountToggle"
							class="catalog-form__show-input"
							type="radio"
							name="show"
							value="15"
							v-model="amount"
							hidden
						/>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        data() {
			return {
				sort: 'name',
				amount: '09',
				openSort: false,
				openAmount: false,
			};
		},
		methods: {
			sortToggle() {
				this.openSort = !this.openSort;
			},
			amountToggle() {
				this.openAmount = !this.openAmount;
			},
		},
		computed: {
			sortName() {
				this.$store.commit('sortChange', this.sort);
				return this.$store.state.sortForm.sort;
			},
			amountValue() {
				this.$store.commit('amountChange', this.amount);
				return this.amount;
			},
		},
    };
</script>

<style></style>
