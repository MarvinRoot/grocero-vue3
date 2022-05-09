<template>
    <main id="cart">
      <h2>Your cart</h2>

      <div class="cart--item-list-container">
        <ul class="item-list cart--item-list">
          <li v-for="(item, itemIndex) in store.getCartItems()" :key="itemIndex">
            <img class="cart--item-icon" :src="`assets/icons/${store.addZeros(item.id)}-${item.name}.svg`" alt={{item.name}}>
            <p>{{item.name}}</p>
            <button @click="store.listenToRemoveFromCartBtn(item)" class="quantity-btn.remove-btn.center">-</button>
            <span class="quantity-text.center">{{item.count}}</span>
            <button @click="store.listenToAddToCartBtn(item)" class="quantity-btn.add-btn.center">+</button>
          </li>
        </ul>
      </div>

      <div class="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span class="total-number">{{store.getTotalPrice()}}</span>
        </div>
      </div>

    </main>    
</template>

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