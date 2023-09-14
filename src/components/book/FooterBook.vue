<template>
  <footer>
    <small>Desenvolvido por Rafaela &copy; 2023</small>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 30px;
  position: sticky; /* Fixar o rodapé na parte inferior da página */
  bottom: 0;
}

footer small {
  padding: 5px 0 5px 0;
  font-size: 16px;
}
</style>
