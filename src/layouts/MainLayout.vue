<template>
  <div id="container">
    <div class="img-logo">
      <img src="../assets/logo.svg" alt="Logo" />
      <p>+knowledge</p>
    </div>
    <div>
      <h1>Seus livros favoritos!</h1>
      <p class="text-cadastro">
        Sua lista está vazia, clique no botão cadastrar para começar a preencher
        sua lista.
      </p>
      <div id="center-btn">
        <button class="btn-cadastro" @click="cadastro()">Cadastrar</button>
      </div>
    </div>
    <div>
      <button id="btn-logout" @click="backToLogin()">
        <i
          id="icon-logout"
          class="fa-solid fa-right-from-bracket fa-rotate-180"
        ></i
        >Log Out
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// voltar para página login
function backToLogin() {
  router.push("/login");
}

// funcão para cadastrar os livros
function cadastro() {
    console.log("Cadastrar!")
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
.img-logo {
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
h1 {
  text-align: center;
  margin: 20px;
}
.text-cadastro {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
#center-btn {
    margin: 5%;
    text-align: center;

}
.btn-cadastro {
  background-color: #fcba03;
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.236);

  width: 150px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}
.btn-cadastro:hover {
    transition: .5s;
    background-color: #fbd15bf6;
}
#btn-logout,
#icon-logout {
  background-color: #000;
  color: #fcba03;
  margin: 10px;
  font-size: 16px;
  font-weight: 700;
  border: none;
}
#btn-logout {
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.397);
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  position: fixed;
  bottom: 15px; /* Distância em relação ao canto inferior da janela */
  left: 20px; /* Distância em relação ao canto direito da janela */
  z-index: 999; /* Z-index para definir a ordem de sobreposição (opcional) */
}
</style>
