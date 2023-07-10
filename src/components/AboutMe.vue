<template>
  <div>
    <div id="about-section">
      <div class="title-h1">
        <p>Olá, eu sou Rafaela Santos Desenvolvedora Front-End</p>
      </div>
      <div>
        <img class="img-me" src="../assets/me.png" alt="">
      </div>
    </div>
    <div class="description">
      <h3 class="title-h3">Sobre mim</h3>
      <p class="description-about-me">Desenvolvedora Front-end com experiência em Vue 3, Quasar Framework, JavaScript, TypeScript, PostgreSQL, NestJS, Prisma e consumo de APIs REST. Apaixonado pelo desenvolvimento de desenvolvimento de aplicações Web, e design UX/UI. Cursando Ciência da Computação na Universidade Estadual do Sudoeste da Bahia - UESB.</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
#about-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title-h1 {
  text-align: center;
}

.img-me {
  width: 100%;
  object-fit: cover;
  object-position: right;
}

.title-h3 {
  text-align: center;
  text-decoration: underline;
}

.description-about-me {
  text-align: center;
  margin: 50px;
}
</style>