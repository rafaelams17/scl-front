<template>
  <div class="container" id="back" @click="darkLight()">
    <p class="text-description">
      {{ description }}
    </p>

    <i id="mode-icon" class="fa-solid fa-sun" title="Escolha o Modo"></i>

    <div class="center-img">
      <img class="img-girl-books" src="../assets/book-girl.svg" alt="books" />
    </div>

    <p id="citacao">"{{ citacao }}"</p>
    <p class="autor">{{ author }}</p>

    <popular-books id="section-popular-books" />
    <!-- O mesmo que <PopularBooks />-->
    <div id="icon-up" @click="backToStart('#back')">
      <i class="fa-solid fa-chevron-left fa-rotate-90"></i>
    </div>
  </div>
</template>

<script setup>
import PopularBooks from "../components/contentWeb/PopularBooks.vue";

const description =
  "Organize as suas leituras com a gente, cadastre os seus livros favoritos para ter mais controle da sua vida literária!";
const citacao =
  "A leitura é a chave que abre a porta para um mundo de descobertas, imaginação e crescimento pessoal.";
const author = "Oprah Winfrey";

function darkLight() {
  const mode = document.getElementById("mode-icon");
  mode.addEventListener("click", () => {
    if (mode.classList.contains("fa-sun")) {
      mode.classList.remove("fa-sun");
      mode.classList.add("fa-moon");
      return;
    }
    mode.classList.add("fa-sun");
    mode.classList.remove("fa-moon");
  });
}
function backToStart(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Linden+Hill&display=swap");
.container {
  margin: 2%;
}
.text-description {
  background-color: #fcba03;
  color: #000;
  margin: 15px;
  padding: 15px;
  text-align: center;
  font-size: 20px;
}
#mode-icon {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 30px;
}
.center-img {
  text-align: center;
  margin-bottom: 20px;
}
.img-girl-books {
  width: 70%;
}
#citacao {
  text-align: center;
}
.autor {
  text-align: right;
  margin-right: 10%;
  font-size: 12px;
}
#icon-up {
  text-align: right;
}
#icon-up i {
  cursor: pointer;
  padding: 10px;
  background-color: #fcba03;
  border: 2px solid #000;
  border-radius: 50%;
  color: #000;
}
@media screen and (max-width: 700px) {
  .text-description {
    font-size: 1em;
  }
  #mode-icon {
    font-size: 20px;
  }
}
</style>
