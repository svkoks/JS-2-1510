<template>
  <div class="basket">
    <div class="basket-items">
      <div class="basket-item" v-for="item of items" :key="item.productId">
        <img :src="item.productImg" alt="item.productId" />
        <div class="basket-item-details">
          <a href="#">{{ item.productName }}</a>
          <div>
            <div>
              <input type="text" id="basket-quantity" :value="item.amount" />
              <span>
                X ${{ item.productPrice }}.00 - $<output name="result-item">{{
                  item.amount * item.productPrice
                }}</output></span
              >
            </div>
          </div>
        </div>
        <button name="remove" class="fas fa-times-circle"></button>
      </div>
      <!-- <div class="basket-empty">
                                            <span>Корзина пуста</span>
                                        </div> -->
    </div>
  </div>
</template>

<script>
import { get } from "@/core/requests";

export default {
  data() {
    return {
      items: [],
      url:
        "https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/basket.json",
    };
  },
  methods: {
    remove(id) {
      let find = this.items.find((basketItem) => basketItem.productId == id);

      if (find.amount > 1) {
        find.amount--;
      } else {
        this.items.splice(this.items.indexOf(find), 1);
      }
    },
  },
  async mounted() {
    try {
      this.items = (await get(this.url)).content;
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