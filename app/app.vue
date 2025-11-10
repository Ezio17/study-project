<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount">Add</button>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const count = ref(0);

function addCount() {
  count.value += 1;
}
</script>

<style lang="scss" scoped>
p {
  color: red;
}
</style>