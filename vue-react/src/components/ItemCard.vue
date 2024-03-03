<template>
  <div class="cardSet">
    <h2>{{ Tank.name }}, {{ Tank.nation }}</h2>
    <img :src="Tank.img" alt="Tank.img" />
    <h3>Tank Price: {{ Tank.price }}</h3>
    <h3>Add: {{ clicked }}</h3>
    <button @click="decrement()"> - </button>
    <button @click="increment()"> + </button>
    <button @click="addToCart()"> Add to Cart </button>
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
  cartValue({ name: props.Tank.name, price: props.Tank.price, nation: props.Tank.nation, quantity: clicked.value });
  clicked.value = 0;
}
</script>


<style scoped>

.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100vw;
  width: 80%;
}
.cardSet {
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20%;
}

img {
  width: 250px;
  height: 300px;
  display: flex;
}

</style>