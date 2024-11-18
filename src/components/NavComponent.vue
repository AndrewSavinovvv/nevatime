<script setup>

</script>

<template>
  <div class="nav">
    <div class="container-nav">
      <nav class="navbar">
        <ul class="navbar__list">
          <li>Главная</li>
          <li class="navbar__list__item">Часы
            <img src="@/assets/icons/arrow-down.svg" alt="">
          </li>
          <li>Сумки</li>
          <li>Рюкзаки</li>
          <li>Кошельки</li>
          <li>Браслеты</li>
          <li>Гарантия</li>
          <li>Доставка</li>
          <li>Отзывы</li>
          <li class="navbar__list__item">Для покупателей
            <img src="@/assets/icons/arrow-down.svg" alt="">
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<style scoped>
.nav{
  background-color: #F7F7F7;
}
.navbar__list{
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
}
.navbar__list__item img {
  margin-left: 9px;
}

</style>