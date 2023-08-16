<template>
  <nav v-if="route.path == '/'" class="nav-bar">
    <div>
      <img class="logo" alt="Books logo" src="../../assets/logo.svg" />
    </div>
    <div>
      <router-link :to="{name: 'home'}" class="links-nav">Home</router-link>
      <router-link
        to="#section-popular-books"
        @click="scrollToSection('#section-popular-books')"
        class="links-nav"
        >+Popular Books</router-link
      >
      <button @click="navigateToLogin()" class="btn-login">Login</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function navigateToLogin() {
  router.push("/login"); // acessar a rota com Router Vue
}
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid #fcba03 2px;
}
.links-nav {
  font-weight: 500;
  font-size: 1em;
  text-decoration: none;
  margin-right: 30px;
}
.links-nav:hover {
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: #fcba03 solid 2px;
  transition: 0.5s;
}
.logo {
  padding-left: 50px;
}
.btn-login {
  background-color: #fcba03;
  color: #000;
  font-size: 16px;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  padding-left: 50px;
  padding-right: 50px;
  cursor: pointer;
  margin-right: 10px;
}
.btn-login:hover {
  background-color: #fbd15bf6;
  transition: 0.5s;
}
@media screen and (max-width: 600px) {
  .links-nav {
    display: none;
  }
  .btn-login{
    font-size: 14px;
  }
}
</style>
