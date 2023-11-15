
<script setup>
const { id } = useRoute().params

definePageMeta({
    layout: 'products'
})
</script>

<template>
    <div>{{ id }}</div>
</template>