<template>
  <div>
    <h1 v-if="answer === true">correct</h1>
    <h1 v-else>incorrect</h1>
    <h3 v-for="animal in animals" :key="animal">{{  animal}}</h3>
  </div>
</template>

<script setup>
 const answer = true;
 const animals = ["Ape", "Zebra", "Bob"]
</script>

<style scoped>

</style>
