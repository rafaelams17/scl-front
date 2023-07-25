<template>
  <div class="container" id="mudar-tema" @click="darkLight()">
    <p class="text-description">
      Organize as suas leituras com a gente, cadastre os seus livros favoritos
      para ter mais controle da sua vida literária!
    </p>

    <i id="mode-icon" class="fa-solid fa-sun" title="Escolha o Modo"></i>

    <div class="center-img">
      <img class="img-girl-books" src="../assets/book-girl.svg" alt="books" />
    </div>

    <p id="citacao">
      "A leitura é a chave que abre a porta para um mundo de descobertas,
      imaginação e crescimento pessoal."
    </p>
    <p class="autor">Oprah Winfrey</p>

    <popular-books id="section-popular-books" />
    <!-- O mesmo que <PopularBooks />-->
  </div>
</template>

<script setup>
import PopularBooks from "../components/PopularBooks.vue";

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
@media screen and (max-width: 700px) {
  .text-description {
    font-size: 1em;
  }
  #mode-icon {
    font-size: 20px;
  }
}
</style>
