<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <div class="footer">
    <footer class="footer__block container">
      <div>
        <div class="footer__right">
          <h1>Neva Time</h1>
          <text>Фирменные аксессуары Michael Kors <br>с доставкой по всей России</text>
        </div>
        <div class="footer__footer">
          <p>Подпишись на новинки и скидки</p>
          <div class="footer__form">
            <input placeholder="E-mail">
            <ButtonComponent class="footer-btn">Отправить</ButtonComponent>
          </div>
        </div>
      </div>
      <div class="footer__center">
        <ul class="footer__center__list">
          <li>Женские часы</li>
          <li>Мужские часы</li>
          <li>Cумки</li>
          <li>Рюкзаки</li>
          <li>Кошельки</li>
          <li>Браслеты</li>
        </ul>
        <ul class="footer__center__list">
          <li>Женские часы</li>
          <li>Мужские часы</li>
          <li>Cумки</li>
          <li>Рюкзаки</li>
          <li>Кошельки</li>
          <li>Браслеты</li>
        </ul>
      </div>

      <div class="footer__left">
        <span>8 (800) 302 79 15</span>
        <p>Заказать обратный звонок</p>
        <div class="footer__icons">
          <img src="@/assets/icons/icon.png" alt="">
          <img src="@/assets/icons/icon.png" alt="">
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer{
  background:#000000 ;
}
.footer__block{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__right {
  color: white;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__right h1 {
  margin-top: 75px;
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
}
text {
  font-size: 15px;
}
.footer__form input {
  border: none;
  height: 45px;
}
.footer__form{
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.footer__footer p {
  color: white;
  font-size: 15px;
}
.footer__footer {
  margin-top: 45px;
  padding-bottom: 105px;
}
.footer-btn {
  background: #CDB494 !important;
  color: white;
  border: none;
}
.footer__center {
  display: flex;
  gap: 61px;

}

.footer__left {

}
.footer__left span {
  color: white;
  font-size: 24px;
  font-weight: 600;
}
.footer__left p {
  color: #CDB494;
  font-size: 15px;
  font-weight: 400;
  text-align: right;
  margin-top: 5px;
  border-bottom: 1px solid #CDB494;
}
.footer__icons {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
  margin-top: 140px;
}

.footer__center__list li {
  text-decoration: underline;
  list-style: none;
  color: white;
  font-size: 15px;
  margin-bottom: 24px;
}
.footer__center__list {
  margin: 0;
  padding: 0;
  height: 202px;
}
</style>