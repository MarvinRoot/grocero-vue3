import { reactive } from "vue";

export const store = reactive({
groceries: [
    {
        id: 1,
        name: 'beetroot',
        price: 0.35,
        count: 0
    },
    {
        id: 2,
        name: 'carrot',
        price: 0.25,
        count: 0
    },
    {
        id: 3,
        name: 'apple',
        price: 0.45,
        count: 0
    },
    {
        id: 4,
        name: 'apricot',
        price: 0.20,
        count: 0
    },
    {
        id: 5,
        name: 'avocado',
        price: 0.80,
        count: 0
    },
    {
        id: 6,
        name: 'bananas',
        price: 1.10,
        count: 0
    },
    {
        id: 7,
        name: 'bell-pepper',
        price: 0.30,
        count: 0
    },
    {
        id: 8,
        name: 'berry',
        price: 0.70,
        count: 0
    },
    {
        id: 9,
        name: 'blueberry',
        price: 0.90,
        count: 0
    },
    {
        id: 10,
        name: 'eggplant',
        price: 0.55,
        count: 0
    }
],
cartItems: [],

addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
},

listenToAddToCartBtn(item) {
    item.count ++
    this.cartItems = this.getCartItems()
},

listenToRemoveFromCartBtn(item) {
    item.count --
    this.cartItems = this.getCartItems()
},

getCartItems() {
    let updatedGroceries = this.groceries.filter(item => item.count > 0)
    return updatedGroceries
},

getTotalPrice() {
    let totalPrice = 0
    for(const item of this.getCartItems()) {
      totalPrice += (item.price * item.count)
    }
    return `£${totalPrice.toFixed(2)}`
}
});