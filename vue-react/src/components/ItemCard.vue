<template>
  <div class="cardSet">
    <h2>{{ Tank.name }}, {{ Tank.nation }}</h2>
    <img :src="Tank.img" alt="Tank.img" />
    <h3>Tank Price: {{ Tank.price }}</h3>
    <h3>Add: {{ clicked }}</h3>
    <button @click="decrement()"> - </button>
    <button @click="addToCart()"> Add to Cart </button>
    <button @click="increment()"> + </button>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { cartValue } from '@/components/store';

const props = defineProps({
  Tank: Object,
});

let clicked = ref(0);

function increment() {
  clicked.value++;
}

function decrement() {
  clicked.value = Math.max(clicked.value - 1, 0);
}

function addToCart() {
  if (clicked.value > 0) {
  cartValue({ name: props.Tank.name, price: props.Tank.price, nation: props.Tank.nation, quantity: clicked.value });
  clicked.value = 0;
  }
    else {
    alert('There is 0 items selected. Please reselect. You cannot escape the snail...');
  }
}
</script>


<style scoped>

.cardSet {
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-basis: 25%;
  margin: 5px;
  height: 400px;
}

img {
  min-width: 90%;
  min-height: 200px;
  max-width: 90%;
  max-height: 250px;
}

</style>