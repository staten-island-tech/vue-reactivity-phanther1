<template>
  <div class="cardSet">
    <h2>{{ Destination.name }}</h2>
    <img :src="Destination.img" alt="" />
    <h3>{{ clicked }}</h3>
    <button @click="decrement()"> - </button>
    <button @click="increment()"> + </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "@/views/store";
const props = defineProps({
Destination: Object,
});

//clicker logic
let clicked = ref(0);
function increment() {
  clicked.value++;
}

function decrement() {
clicked.value--;
}
</script>

<style scoped>
img {
  width: 250px;
  height: 300px;
}

.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100vw;
}
.cardSet {
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20vw;
  
}
  /* h1 {
    color: red;  //only affects this file
}
 */
</style>

<!--
<template>
  <button @click="decrement">-</button>
  <text> {{count}} </text>
	<button @click="increment"> + </button>
</template> -->