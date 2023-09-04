<template>
  <div class="container">
    <!-- Imagem do layout da página-->
    <img id="container-img" src="../assets/books.jpg" alt="books" />

    <!-- Renderização das telas para autenticação do usuário -->
    <router-view />
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

</style>
