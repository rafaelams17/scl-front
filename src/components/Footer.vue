<template>
  <div class="footer">
    <div class="text-footer">
      <p>&copy; 2023 por Rafaela Santos</p>
      <p>Vitória da Conquista, BA</p>
    </div>
    <div class="social-media">
      <a href="https://www.linkedin.com/in/rafaelasantoss/" target="_blank"
        ><img src="../assets/linkedin.svg" alt="linkedin"
      /></a>
      <a href="https://www.instagram.com/rafaa_vs23/" target="_blank"
        ><img src="../assets/instagram.svg" alt="instagram"
      /></a>
      <a href="https://github.com/rafaelams17/" target="_blank"
        ><img src="../assets/github.svg" alt="github"
      /></a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: solid #fcba03 2px;
  text-align: center;
  padding: 20px;
}
.social-media {
  margin-top: 10px;
}

.text-footer {
  line-height: 1.3em;
}
</style>
