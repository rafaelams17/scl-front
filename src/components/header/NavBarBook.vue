<template>
  <div class="container">
    <div class="logo">
      <img src="../../assets/logo.svg" alt="logo" />
      <p>+knowledge</p>
    </div>

    <div class="container-second">
      <p>Seja bem-vindo, <em>{{ user }}</em>!</p>
        <i
        title="Log Out"
          id="icon-logout"
          class="fa-solid fa-right-from-bracket"
          @click="backToLogin()"
        ></i>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const user = "Rafaela";

// voltar para página login
function backToLogin() {
  router.push("/login");
}
</script>

<style scoped>
* {
  background-color: #fff;
  color: black;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px 0 50px;
  width: 100%;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
}
.logo p {
  padding-left: 5px;
  font-size: 20px;
  font-family: "Kaushan Script", cursive;
}
.logo i {
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
@media screen and (max-width: 600px) {
  .logo p {
    display: none;
  }
  .container-second p {
    display: none;
  }
}
</style>
