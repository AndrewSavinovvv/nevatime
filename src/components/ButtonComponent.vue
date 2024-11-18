<script setup>
</script>

<template>
  <button class="product-btn">
    <slot>смотреть все</slot>
  </button>
</template>

<style scoped>
.product-btn {
  border: 1px solid black;
  background: none;
  text-transform: uppercase;
  padding: 15px 36px;
  font-size: 15px;
  font-weight: 600;
}
</style>