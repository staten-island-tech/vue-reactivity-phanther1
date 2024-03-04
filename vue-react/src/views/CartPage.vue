<template>
    <div class="cart">
      <h2>Your Cart</h2>
      <div class="text" v-for="(item, index) in store.cart" :key="index">
        {{ item.name }}, {{ item.nation }} <br> Quantity: {{ item.quantity }} <br> Price: {{ item.price * item.quantity }} <br>
        <button @click="removeFromCart(index)">Remove</button>
      </div>
      <h3>Total Quantity: {{ calculateTotalQuantity() }}</h3>
    </div>
  </template>
  
  <script setup>
  import { toRefs } from 'vue';
  import { store, removeFromCart } from '@/components/store';
  
  const { cart } = toRefs(store);
  
  const calculateTotalQuantity = () => {
    const totalQuantity = store.cart.reduce((total, item) => total + item.quantity, 0);
    return totalQuantity > 100 ? 'your soul' : String(totalQuantity);
  };
  </script>

<style scoped>

.cart {
    color: Black;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 100%;
}
.text {
    font-size: 30px bold;

}
</style>