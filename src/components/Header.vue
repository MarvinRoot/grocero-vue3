<script>
import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header id="store">
      <h1>Grocero</h1>
      <ul class="item-list store--item-list">
        <li class="store--item" v-for="(item, itemIndex) in store.groceries" :key="itemIndex">
          <div class="store--item-icon">
            <img :src="`assets/icons/${store.addZeros(item.id)}-${item.name}.svg`" alt={{item.name}}>
          </div>
          <button @click="store.listenToAddToCartBtn(item)">Add to cart</button>
        </li>
      </ul>
    </header>
</template>