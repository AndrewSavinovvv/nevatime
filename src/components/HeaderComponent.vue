<script setup>

</script>

<template>
  <header class="container">
    <div class="header__basket">
      <img src="@/assets/icons/bag.svg" alt="">
      <div class="header__basket__details">
        <p>Корзина (5):</p>
        <p>34 000 ₽</p>
      </div>
    </div>
    <div class="header__title">
    <h1>Neva Time</h1>
      <p>Фирменные аксессуары Michael Kors <br>
        с доставкой по всей России</p>
    </div>
    <div class="header__contact">
    <p>8 (800) 302 79 15</p>
      <p>Заказать обратный звонок</p>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding-top: 23px;
  align-items: center;
}
.header__basket {
  display: flex;
  align-items: center;
}
.header__basket img {
  height: 32px;
  width: 32px;
}
.header__basket__details{
  margin-left: 13px;
  font-size: 14px;
  color: #000000;
  font-weight: 400;
}
.header__basket__details p:nth-child(2){
  font-size: 16px;
  font-weight: 700;
}
.header__title {
  text-align: center;
}
.header__title h1 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 400;
}
.header__contact {
  text-align: end;
}
.header__contact p {
  font-weight: 600;
  font-size: 24px;
}
.header__contact p:nth-child(2) {
  font-size: 15px;
  color:#CDB494;
  font-weight: 400;
  margin-top: 4px;
  border-bottom: 1px solid #CDB494;
}
</style>