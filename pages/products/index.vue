<script setup>
definePageMeta({
  layout: "products",
});
// import { ref } from 'vue'

// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="(pObj, index) in products" :key="index">
      <NuxtLink :to="`/products/${pObj.id}`">{{ pObj.title }}</NuxtLink>
    </div>
  </div>
</template>
