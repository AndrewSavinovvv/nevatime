<script setup>

</script>

<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero__title">
        Часы <br> Michael  Kors
      </h1>
      <button class="hero__btn-woman">Для нее</button>
      <button class="hero__btn-man">для него</button>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('@/assets/img/bg-main.png');
  height: 640px;
  display: flex;
  align-items: center;
}
.hero__title {
  font-size: 60px;
  font-weight: 600;
}
.hero__btn-man, .hero__btn-woman {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid #000000;
  background: none;
  padding: 15px 36px;
  margin-top: 32px;
}
.container button {
  margin-right:  30px;
}
</style>