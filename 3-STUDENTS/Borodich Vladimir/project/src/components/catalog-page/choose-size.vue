<template>
	<div id="checkedSize" @mouseleave="changeSize" class="catalog-form__size">
		<h3  class="catalog-form__heading">Size</h3>
		<div  class="catalog-form__size-inputs">
			<label class="catalog-form__size-label"
				><input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="XXS" />XXS</label>
			<label class="catalog-form__size-label"
				><input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="XS" />XS
			</label>
			<label class="catalog-form__size-label">
				<input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="S" />S
			</label>
			<label class="catalog-form__size-label">
				<input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="M" />M
			</label>
			<label class="catalog-form__size-label">
				<input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="L" />L
			</label>
			<label class="catalog-form__size-label"
				><input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="XL" />XL
			</label>
			<label class="catalog-form__size-label"
				><input v-model="checkedSize" type="checkbox" class="catalog-form__size-input" value="XXL" />XXL
			</label>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
                checkedSize: []
			};
		},
		methods: {
			changeSize(event) {
                if (event.target.id === 'checkedSize' 
                && this.checkedSize.join() !== this.$store.getters.checkedSize.join()
                ){
                    this.$store.commit('checkedSize',this.checkedSize);	
                    this.$parent.$parent.$refs.catalog.update();
                }
                    
			},
        },
        computed:{
        }
	};
</script>

<style></style>
