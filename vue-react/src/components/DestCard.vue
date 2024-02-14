<template>
  <div class="flexbox">
  <div class="cardSet">
    <h2>{{ Destination.name }}</h2>
    <img :src="Destination.img" alt="" />
    <h3>{{ clicked }}</h3>
    <button @click="store.decrement()"> - </button>
    <button @click="store.increment()"> + </button>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
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
  flex-wrap: wrap;
  flex-basis: 100vw;
}
.cardSet {
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  flex-basis: 100vw;
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