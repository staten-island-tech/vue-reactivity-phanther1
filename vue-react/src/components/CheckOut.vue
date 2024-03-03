<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
      <h4 v-for="(item, index) in store.cart" :key="index">
        {{ item.name }}, {{ item.nation }} <br> Quantity: {{ item.quantity }} <br> Price: {{ item.price * item.quantity }} <br>
        <button @click="removeFromCart(index)">Remove</button>
      </h4>
      <h3>Total: {{ calculateTotal() }} silver lions</h3>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { store, removeFromCart } from '@/components/store';
const { cart } = toRefs(store);

const calculateTotal = () => {
  return store.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

</script>

<style scoped>
.cart {
display: flex;
width: 20%;
flex-direction: column;

}

</style>