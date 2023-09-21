<template>
  <div class="container">
    <!-- Imagem do layout da página-->
    <img id="container-img" src="../assets/books.jpg" alt="books" />

    <!-- Renderização das telas para autenticação do usuário -->
    <router-view class="container-form"/>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* Image - Tablets, Laptop and Computers */
#container-img {
  height: 100vh;
  width: 130vh;
}

@media (max-width: 1800px) {
  #container-img {
    width: 110vh;
  }
}
/* Não mudar esse tamanho de tela */
@media (max-width: 1400px) { 
  #container-img {
    width: 140vh;
  }
}
@media (max-width: 1350px) {
  #container-img {
    width: 120vh;
  }
}
@media (max-width: 1200px) {
  img {
    display: none;
  }
  .container-form {
    height: 100vh;
  }
}
</style>
