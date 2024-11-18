<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <div class="feed container-feed">
    <div>
      <h1>Остались вопросы?</h1>
      <p>Заполните форму и мы свяжемся с Вами</p>
    </div>
    <div class="input-group">
      <input class="input" placeholder="Ваше имя">
      <input class="input" placeholder="Телефон">
    </div>

    <input class="full-width-input" placeholder="Комментарий">

    <ButtonComponent class="btn">Отправить</ButtonComponent>
  </div>
</template>

<style scoped>
.feed {
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 42px;
  font-weight: 600;
  text-align: center;
}

p {
  font-size: 20px;
  color: #000000;
  margin-bottom: 31px;
}

.input-group {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  width: 106%;
}

.input {
  width: 50%;
  padding: 15px 28px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background: #F7F7F7;
}


.full-width-input {
  width: 100%;
  padding: 15px 28px;
  font-size: 16px;
  border-radius: 4px;
  margin-bottom: 40px;
  background: #F7F7F7;
  border:  none;
}

.btn {
  padding: 15px 36px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #FFFFFF;
  background: #CDB494;
  border: none;
  margin-bottom: 100px;
}
</style>