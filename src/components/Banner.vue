<template>
  <div class="banner">
    <h1>Organize suas leituras!</h1>
  </div>
</template>

<script setup>

</script>

<style scoped>
.banner {
  background-image: url("../assets/book-girl.svg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  border-top: 2px solid #fcba03;
  border-bottom: 2px solid #fcba03;
}
.banner h1 {
  background-color: #fcba03;
  color: #000;
  font-size: 40px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
}
#mode-icon {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 30px;
}
@media screen and (max-width: 700px) {
  #mode-icon {
    font-size: 20px;
  }
}
</style>
