<template>
  <div class="home">
    <div class="text-citacao">
      <h1 class="citacao">
        "A leitura é a chave que abre a porta para um mundo de descobertas,
        imaginação e crescimento pessoal."
      </h1>
      <p class="autor">Oprah Winfrey</p>
    </div>
    <div class="img-girl-books">
      <img class="teste" src="../assets/book-girl.svg" alt="books" />
    </div>
    <div class="text-citacao">
      <h1 class="citacao">
        "A leitura é a ponte que conecta o passado ao presente e nos prepara
        para o futuro." 
      </h1>
      <p class="autor">Ursula K. Le</p>
    </div>
    <div class="container">
      <p class="text-description">
        Organize as suas leituras com a gente, cadastre os seus livros favoritos
        para ter mais controle da sua vida literária!
      </p>
    </div>
    <div>
      <popular-books /> <!-- O mesmo que <PopularBooks />-->
      <!-- <AboutMe /> -->
    </div>
  </div>
</template>

<script setup>
import AboutMe from "../components/AboutMe.vue";
import PopularBooks from "../components/PopularBooks.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Linden+Hill&display=swap");

.text-citacao {
  font-family: "Linden Hill", serif;
  margin: 2%;
}

.citacao {
  font-weight: normal;
  text-align: center;
}
.autor {
  text-align: right;
  font-size: 15px;
}
.img-girl-books {
  text-align: center;
  margin-bottom: 10px;
}

.teste {
  width: 70%;
}
.container {
  display: flex;
  justify-content: center;
}
.text-description {
  text-align: center;
  font-weight: bold;
  border: 3px solid #FCBA03;
  border-radius: 50px;
  padding: 10px;
  width: 50%;
}
</style>
