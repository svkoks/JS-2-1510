<template>
  <div class="catalog">
    <div class="product-items" id="catalog-index">
      <Item v-for="item of items" :key="item.productId" :item="item" />
    </div>
    <a href="#" class="product-btn"
      >Browse All Product <i class="fas fa-long-arrow-alt-right"></i
    ></a>
  </div>
</template>

<script>
import { get } from "@/core/requests";
import Item from "./CatalogItem";

export default {
  data() {
    return {
      items: [],
      url:
        "https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/catalog.json",
    };
  },
  components: { Item },

  async mounted() {
    try {
      this.items = await get(this.url);
    } catch (err) {
      console.log(err);
    } finally {
      //console.log(await this._get(this.basket.url));
    }
  },
};
</script>

<style>
</style>