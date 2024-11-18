<script setup>
import img from "@//assets/img/img.png"

const benefits = [
  {
    img: img,
    title: "Официальный сайт,\n" +
        "интернет магазин Michael Kors",
    text: "Остерегайтесь контрафактных товаров Майкл Корс. На них не распространяется официальная гарантия производителя.",
  },
  {
    img: img,
    title: "Лучшая цена на аксессуары Michael Kors",
    text: "Купите часы, сумки, рюкзаки, кошельки, клатчи Майкл Корс оригинал по лучшей цене. Сравните и убедитесь сами, что лучше предложения не найти!",
  },
  {
    img: img,
    title: "Официальная гарантия на все аксессуары Michael Kors",
    text: "Приобретая мужские и женские аксессуары Майкл Корс у нас, Вам предоставляется официальный гарантийный талон.",
  },
  {
    img: img,
    title: "Бесплатная и быстрая доставка\n" +
        "по всей России",
    text: "В среднем доставка по России от 2-х до 5-ти дней. По Москве и Санкт-Петербургу доставка осуществляется на следующий день после заказа.",
  },
  {
    img: img,
    title: "Официальный каталог Michael Kors в России",
    text: "В нашем официальном каталоге огромный выбор оригинальных часов, сумок, рюкзаков, кошельков, клатчей Майкл Корс по лучшей цене.",
  },
];
</script>
<template>
  <div class="benefits">
    <div class="container">
      <h1 class="benefits-title">
        5 причин купить аксессуары <br> Michael Kors у нас
      </h1>
      <div class="benefits-grid">
        <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
          <img :src="benefit.img" alt="" class="benefit-img" />
          <h2 class="benefit-title">{{ benefit.title }}</h2>
          <p class="benefit-text">{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.benefits {
  background: #f7f7f7;
  margin-top: 100px;
  padding-bottom: 70px;
}

.benefits-title {
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  padding-top: 70px;
  margin-bottom: 50px;
}

.benefits-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.benefit-item {
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  width: 278px;
}

.benefit-img {
  max-width: 100px;
  margin: 0 auto 15px;
}

.benefit-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}

.benefit-text {
  font-size: 15px;
  font-weight: 400;
  color: #000000;
}

</style>