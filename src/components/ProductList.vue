<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import photo from "@//assets/img/bg-product.png"

const products = [
  {
    title: "Браслеты\n" +
        "Michael Kors",
    img: photo,
    reverse: false,
  },
  {
    title: "Сумки\n" +
        "Michael Kors",
    img: photo,
    reverse: true,
  },
  {
    title: "Рюкзаки\n" +
        "Michael Kors",
    img: photo,
    reverse: false,
  },
  {
    title: "Кошельки\n" +
        "Michael Kors",
    img: photo,
    reverse: true,
  },
];
</script>

<template>
  <div class="container">
    <div
        class="product"
        v-for="(product, index) in products"
        :key="index"
        :class="{ reverse: product.reverse }"
    >
      <div class="product-img">
        <img :src="product.img" alt="">
      </div>
      <div class="product-details">
        <h1 class="product-title">{{ product.title }}</h1>
        <ButtonComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>


.product {
  display: flex;
  align-items: center;
  padding-top: 100px;
}

.product.reverse {
  flex-direction: row-reverse;
}

.product-details {
  margin-left: 58px;
}

.product.reverse .product-details {
  margin-left: 0;
  margin-right: 58px;
}

.product-title {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 23px;
}

.product-img img {
  max-width: 100%;
  height: auto;
}
</style>