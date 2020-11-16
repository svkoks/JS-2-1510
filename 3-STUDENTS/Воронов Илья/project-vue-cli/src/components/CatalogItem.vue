<template>
  <div class="catalog-item">
    <div class="product-item">
      <img :src="item.productImg" alt="item.productId" />
      <div class="hover-bg">
        <button name="add" @click="add(item)">
          <i class="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
      <div class="product-item__desc">
        <div class="product-item__name" name="bascket-click">
          <a href="#">{{ item.productName }}</a>
        </div>
        <div class="product-item__detail">
          <div class="product-item__price">${{ item.productPrice }}.00</div>
          <div class="product-item__rating">
            <i class="fas fa-star"></i><i class="fas fa-star"></i
            ><i class="fas fa-star"></i><i class="fas fa-star"></i
            ><i class="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    add(item) {
      let find = this.items.find(
        (basketItem) => basketItem.productId == item.productId
      );

      if (!find) {
        this.items.push(Object.assign({}, item, { amount: 1 }));
      } else {
        find.amount++;
      }
    },
  },
};
</script>

<style>
</style>