<script setup>
  import { reactive } from 'vue'
  import './App.css'
  import './reset.css'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
//   const groceries = reactive([
//     {
//         id: 1,
//         name: 'beetroot',
//         price: 0.35,
//         count: 0
//     },
//     {
//         id: 2,
//         name: 'carrot',
//         price: 0.25,
//         count: 0
//     },
//     {
//         id: 3,
//         name: 'apple',
//         price: 0.45,
//         count: 0
//     },
//     {
//         id: 4,
//         name: 'apricot',
//         price: 0.20,
//         count: 0
//     },
//     {
//         id: 5,
//         name: 'avocado',
//         price: 0.80,
//         count: 0
//     },
//     {
//         id: 6,
//         name: 'bananas',
//         price: 1.10,
//         count: 0
//     },
//     {
//         id: 7,
//         name: 'bell-pepper',
//         price: 0.30,
//         count: 0
//     },
//     {
//         id: 8,
//         name: 'berry',
//         price: 0.70,
//         count: 0
//     },
//     {
//         id: 9,
//         name: 'blueberry',
//         price: 0.90,
//         count: 0
//     },
//     {
//         id: 10,
//         name: 'eggplant',
//         price: 0.55,
//         count: 0
//     }
// ])
//   let cartItems = reactive([])

//   function addZeros(number) {
//     const str = "" + number;
//     const pad = "000";
//     return pad.substring(0, pad.length - str.length) + str;
//   }
  
//   function listenToAddToCartBtn(item) {
//     item.count ++
//     cartItems = getCartItems()
//   }

//   function listenToRemoveFromCartBtn(item) {
//     item.count --
//     cartItems = getCartItems()
//   }

//   function getCartItems() {
//     let updatedGroceries = groceries.filter(item => item.count > 0)
//     return updatedGroceries
//   }

//   function getTotalPrice() {
//     let totalPrice = 0
//     for(const item of getCartItems()) {
//       totalPrice += (item.price * item.count)
//     }
//     return `£${totalPrice.toFixed(2)}`
//   }
</script>

<template>
  <div class="app">
    <!-- <header id="store">
      <h1>Grocero</h1>
      <ul class="item-list store--item-list">
        <li class="store--item" v-for="(item, itemIndex) in groceries" :key="itemIndex">
          <div class="store--item-icon">
            <img :src="`assets/icons/${addZeros(item.id)}-${item.name}.svg`" alt={{item.name}}>
          </div>
          <button @click="listenToAddToCartBtn(item)">Add to cart</button>
        </li>
      </ul>
    </header>

    <main id="cart">
      <h2>Your cart</h2>

      <div class="cart--item-list-container">
        <ul class="item-list cart--item-list">
          <li v-for="(item, itemIndex) in getCartItems()" :key="itemIndex">
            <img class="cart--item-icon" :src="`assets/icons/${addZeros(item.id)}-${item.name}.svg`" alt={{item.name}}>
            <p>{{item.name}}</p>
            <button @click="listenToRemoveFromCartBtn(item)" class="quantity-btn.remove-btn.center">-</button>
            <span class="quantity-text.center">{{item.count}}</span>
            <button @click="listenToAddToCartBtn(item)" class="quantity-btn.add-btn.center">+</button>
          </li>
        </ul>
      </div>

      <div class="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span class="total-number">{{getTotalPrice()}}</span>
        </div>
      </div>

    </main> -->

    <Header />
    <Main />
  </div>
</template>

<style>

</style>
