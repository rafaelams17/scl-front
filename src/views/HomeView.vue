<template>
  <div class="container" id="mudar-tema" @click="darkLight()">
    <h1 class="text-description">
      Organize as suas leituras com a gente, cadastre os seus livros favoritos
      para ter mais controle da sua vida literária!
    </h1>

    <i id="mode-icon" class="fa-solid fa-sun" title="Escolha o Modo"></i>

    <div class="center-img">
      <img class="img-girl-books" src="../assets/book-girl.svg" alt="books" />
    </div>

    <h2 class="citacao">
      "A leitura é a chave que abre a porta para um mundo de descobertas,
      imaginação e crescimento pessoal."
    </h2>
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
  text-align: center;
  /* font-weight: bold; */
  border: 3px solid #fcba03;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
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
.citacao {
  font-weight: normal;
  text-align: center;
}
.autor {
  text-align: right;
  margin-right: 10%;
  font-size: 15px;
}
</style>
