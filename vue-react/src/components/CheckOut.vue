<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
      <h4 v-for="(item, index) in store.cart" :key="index">
        {{ item.name }}, {{ item.nation }} <br> Quantity: {{ item.quantity }} <br> Price: {{ item.price * item.quantity }} <br>
        <button @click="removeFromCart(index)">Remove</button>
      </h4>
      <h3>Total Items: {{ calculateTotalQuantity() }}</h3>
      <h3>Total Tanks (silver lions): {{ calculateTotal() }} </h3>
      <button><RouterLink to="/cart">Just your Cart</RouterLink></button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { store, removeFromCart } from '@/components/store';
const { cart } = toRefs(store);

function calculateTotal() {
  const totalPrice = store.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  if (totalPrice > 1000000) {
    return "your soul";
  } else {
    return String(totalPrice);
  }
};


const calculateTotalQuantity = () => {
 return store.cart.reduce((total, item) => total + item.quantity, 0);
};

</script>

<style scoped>

  .cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 20%;
    background-color: #f1f1f1;
    padding: 1rem;
    height: 100vh;
    overflow-y: auto;
  }

</style>