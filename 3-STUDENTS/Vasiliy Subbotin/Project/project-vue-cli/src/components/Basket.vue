<template>
    <div id="basket">
        <Item 
            v-for="item of items"
            type="basket"
            :item="item"
            @del="remove"
        />
    
    </div>
</template>

<script>
import Item from './Item.vue';
import { get } from '@/core/requests';

export default {
    components: { Item },
  data() {
    return {
      items: [],
      url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
    }
  },
  methods: {
    add(product) {
        let find = this.items.find(el => el.productId == product.productId);
            if (!find) {
                let newItem = Object.assign({}, product, { amount: 1 });
                this.items.push(newItem);
                
            } else {
                find.amount++;
              
            }
    },        
    remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
    }
  },
  async mounted() {
    try {
        this.items = (await get(this.url)).content;
    }
    catch(err) {
        console.log(err);
    }
  }
}
</script>

<style>

</style>