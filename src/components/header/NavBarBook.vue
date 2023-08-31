<template>
  <div class="container">
    <div class="container-logo">
      <i class="fa-solid fa-bars icon"></i>
      <img src="../../assets/logo.svg" alt="logo" />
      <p>Sistema de Controle Literário</p>
    </div>

    <div class="container-user" v-if="route.path == '/book'">
      <span>Bem-vindo, {{ user }}!</span>
      <i class="fa-solid fa-right-from-bracket user" @click="backToLogin()" title="Logout"></i>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const user = "Rafaela";

// voltar para página login
function backToLogin() {
  router.push("/login");
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px 10px 50px;
  width: 100%;
  background-color: #000;
  color: #fcba03;
}
.container-user {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 50px;
}
.container-user p {
  padding-right: 10px;
}
.user {
  cursor: pointer;
  font-size: 20px;
  padding-right: 20px;
}
.container-logo {
  display: flex;
  align-items: center;
  gap: 30px;
}
.container-logo p {
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
li {
  list-style-type: none;
}
@media screen and (max-width: 600px) {
  .logo p {
    display: none;
  }
  .container-user p {
    display: none;
  }
}
</style>
