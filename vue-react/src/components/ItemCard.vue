<template>
  <div class="cardSet">
    <h2>{{ Tank.name }}, {{ Tank.nation }}</h2>
    <img :src="Tank.img" alt="" />
    <h3>Tank Price: {{ Tank.price }}</h3>
    <h3>{{ clicked }}</h3>
    <button @click="decrement()"> - </button>
    <button @click="increment()"> + </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
Tank: Object,
});

//clicker logic
let clicked = ref(0);
function increment() {
  clicked.value++;
}

function decrement() {
clicked.value++
}
/* if ( 
  clicked.value = 0
  
)
else (
  clicked.value--
);
} */
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
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  
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