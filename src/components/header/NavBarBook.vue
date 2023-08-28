<template>
  <div class="container">
    <div class="menu">
      <i class="fa-solid fa-bars"></i>
      <img src="../../assets/logo.svg" alt="logo" />
      <p>Sistema de Controle Literário</p>
    </div>

    <div class="container-second" v-if="route.path == '/book'">
      <span>{{ user }}</span>
      <select name="user" id="user">
        <option value="">Profile</option>
        <option value="logout" @change="backToLogin()">Log out</option>
      </select>
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
  padding: 10px 20px 0 50px;
  width: 100%;
  background-color: #000;
  color: #fcba03;
}
.container-second {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 50px;
}
.container-second p {
  padding-right: 10px;
}
#icon-logout {
  cursor: pointer;
  font-size: 20px;
}
.menu {
  display: flex;
  align-items: center;
  gap: 30px;
}
.menu p {
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}
li {
  list-style-type: none;
}
@media screen and (max-width: 600px) {
  .logo p {
    display: none;
  }
  .container-second p {
    display: none;
  }
}
</style>
