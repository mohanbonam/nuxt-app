<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true})
}

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div>
    <div class="card">
      <pre>{{ product }}</pre>
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img  :src="product.image" alt="product thumb" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description</h3>
          <p class="mb-7">{{ product.description }}</p>
        </div>
      </div>
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 400px;
}
</style>
