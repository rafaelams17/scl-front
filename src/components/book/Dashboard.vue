<template>
  <div id="container">
    <h1>Livros</h1>
    <p v-if="isEmpty">
      Sua lista está vazia, clique no botão cadastrar para começar a preencher
      sua lista.
    </p>
    <input class="container-btn" type="button" value="Cadastrar" @click="addBook()"/>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const isEmpty = true;
const router = useRouter();

function addBook(){
  router.push("/create-book");
}
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
.container-btn {
  display: flex;
  justify-content: center;
  padding: 5px 50px 5px 50px;
  background-color: #fcba03;
  border: none;
  font-size: 16px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 15%;
  cursor: pointer;
}
.container-btn:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
</style>