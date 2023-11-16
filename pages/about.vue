<script setup>
const { data } = useFetch("/api/routes?name=mario", {
  method: "post",
  body: { age: 28 },
});
</script>
<template>
  <section>
    <p>{{ data }}</p>
  </section>
</template>
