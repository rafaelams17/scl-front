<template>
  <div class="container">
    <h1>Seus livros favoritos!</h1>
    <p v-if="isEmpty">
      Sua lista está vazia, clique no botão cadastrar para começar a preencher
      sua lista.
    </p>
    <router-link to="/register-book" id="center-btn">Cadastrar</router-link>
  </div>
</template>

<script setup>
const isEmpty = true;
// funcão para cadastrar os livros
function cadastro() {
  console.log("Teste");
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
* {
  background-color: #fff;
  color: #000;
}
.container {
  text-align: center;
  height: calc(100vh - 18.4vh);
}
.container h1 {
  margin: 10px;
}
.container p {
  margin-bottom: 30px;
}
#center-btn {
  padding: 2px 50px 2px 50px;
  background-color: #fcba03;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
#center-btn:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
</style>
