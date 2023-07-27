<template>
  <div>
    

    <i class="fa-solid fa-book-open-reader"></i>
    <p>+knowledge</p>
    <p>Seja bem-vindo, {{ user }}!</p>
    <a href="#" id="btn-logout" @click="backToLogin()">
      <i
        id="icon-logout"
        class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
      ></i
      >Log Out
    </a>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const user = 'Rafaela';

// voltar para página login
function backToLogin() {
  router.push("/login");
}
</script>

<style scoped>
* {
  background-color: #fff;
}
/* .img-logo {
  width: 100%;
  padding-left: 5%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.img-logo p {
  font-family: "Kaushan Script", cursive;
  font-size: 20px;
}
.img-logo img {
  width: 50px;
} */
</style>
