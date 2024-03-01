<template>
<div class="cartSet">
    <h2>{{ Tank.name }}, {{ Tank.nation }}</h2>
    <img :src="Tank.img" alt="" />
    <h3>Tank Price: {{ Tank.price }}</h3>
    <h3>{{ clicked }}</h3>
    <button @click="decrement()"> - </button>
    <button @click="increment()"> + </button>
    <button @click="remove()"> remove </button>
  </div>
<h2> {{ price.total }}</h2>
</template>

<script setup>

const cart = 0;
cardSet.Tank.push(el)


function remove() {
}

const total = function () {
    Tank.price.push = total;
    
}


</script>

<style scoped>
.cartSet {
display: flex;
width: 20%;
flex-direction: column;

}

</style>