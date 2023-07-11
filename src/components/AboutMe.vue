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
  font-size: 3.5em;
  font-weight: 500;
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.img-me {
  width: 400px;
  object-fit: cover;
  object-position: right;
}

.title-h3 {
  font-size: 2em;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 2%;
}

.description-about-me {
  text-align: center;
  font-size: larger;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2%;
}

@media screen and (max-width: 870px) {
.title-h1 {
  font-size: 2em;
}
  .img-me {
    width: 100%;
  }
}
</style>