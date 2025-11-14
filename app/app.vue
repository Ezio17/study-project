<template>
  <div>
    <p data-test="counter-value" class="font-bold">{{ count }}</p>
    <button data-test="counter-add" @click="addCount">Add</button>
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
