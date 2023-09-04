<template>
  <div id="container">
    <h1>Livros</h1>
    <p v-if="isEmpty">
      Sua lista está vazia, clique no botão cadastrar para começar a preencher
      sua lista.
    </p>
    <router-link to="/create-book" class="btn-create">Cadastrar</router-link>
  </div>
</template>

<script setup>
const isEmpty = true;
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
}
#container h1 {
  margin: 10px;
}
#container p {
  margin-bottom: 3%;
}
.btn-create {
  display: flex;
  justify-content: center;
  padding: 5px 50px 5px 50px;
  background-color: #fcba03;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 10%;
  cursor: pointer;
}
.btn-create:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
</style>