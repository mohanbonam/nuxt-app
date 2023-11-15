
<script setup>
definePageMeta({
    layout: 'products'
})
import { ref } from 'vue'

const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' }
])
</script>

<template>
<h2>Products</h2>
  <ol>
    <li
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    >{{ item.text }}</li>
  </ol>
</template>