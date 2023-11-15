<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div>
    <pre>
        <small>{{ product }}</small>
    </pre>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>
