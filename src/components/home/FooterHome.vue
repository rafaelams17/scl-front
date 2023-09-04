<template>
  <footer v-if="(route.path == '/')">
    <div class="social-media">
      <a href="https://www.instagram.com/rafaa_vs23/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/rafaelasantoss/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/rafaelams17" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
    <p>Desenvolvido por Rafaela &copy; 2023</p>
    <p>Vitória da Conquista, BA</p>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: solid #fcba03 2px;
  text-align: center;
  padding: 20px;
}
.social-media {
  margin-bottom: 10px;
}
.social-media a {
  padding: 10px;
  font-size: 20px;
}

footer > p {
  line-height: 1.3em;
}
</style>
