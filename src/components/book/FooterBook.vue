<template>
  <footer>
    <div class="social-media">
      <a href="https://www.instagram.com/rafaa_vs23/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/rafaelasantoss/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/rafaelams17" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
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
  width: 100%;
  height: 100px;
}
.social-media a {
  padding: 10px;
  font-size: 20px;
}
footer small {
  padding: 5px 0 5px 0;
  font-size: 16px;
}
</style>
