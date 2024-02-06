<template>
    <div>
        <h2>{{  Destination.name }}</h2>
        <img :src="Destination.img" alt="">
<!--         <h3>{{ @clicked }}</h3> -->
        <button>Click here</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    Destination: Object,
});

//clicker logic
const clicked = ref(0);
function increment(){
    clicked.value++;
}
</script>

<style scoped>
/* h1 {
    color: red;  //only affects this file
}
 */

 img {
    width: 300px;
    height: 300px;
 }
</style>

<!-- <script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
  
function decrement() {
  count.value--
}
  
  
</script>

<template>
  <button @click="decrement">-</button>
  <text> {{count}} </text>
	<button @click="increment"> + </button>
  
  
</template> -->