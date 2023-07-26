<template>
  <div>
    <h1>Seus livros favoritos!</h1>
    <p class="text-cadastro">
      Sua lista está vazia, clique no botão cadastrar para começar a preencher
      sua lista.
    </p>
    <div id="center-btn">
      <router-link to="/register-book">Cadastrar</router-link>
    </div>
  </div>
</template>

<script setup>

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
#container {
  height: 100vh;
}
</style>
