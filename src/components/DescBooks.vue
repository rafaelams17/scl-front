<template>
  <div class="container">
    <!-- Imagem da Capa do Livro -->

    <img :src="props.src" :alt="props.alt" />

    <!-- Descrição do Livro -->
    <div class="container-second">
      <h2>{{ props.subtitle }}</h2>
      <p class="description">{{ props.description }}</p>
      <div class="center-btn">
        <a :href="props.href" target="_blank" class="btn-leia-mais"
          >Compre Agora</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "Image",
  },
  alt: {
    type: String,
    default: "Texto Alternativo",
  },
  subtitle: {
    type: String,
    default: "Titulo",
  },
  description: {
    type: String,
    default: "Descrição",
  },
  href: {
    type: String,
    default: "Link",
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  border: #fcba03 solid 2px;
  border-radius: 20px;
  margin: 0 auto;
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}
.container h2 {
  font-size: 20px;
}
.container-second {
  padding-left: 10px;
}
.description {
  text-align: justify;
  text-indent: 2em;
}
.center-btn {
  margin-top: 30px;
  text-align: center;
}
.btn-leia-mais {
  background-color: #fcba03;
  color: #000;
  border: none;
  border-radius: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 40px;
  padding-right: 40px;
  font-weight: bold;
  box-shadow: 2px 4px 4px rgba(252, 186, 3, 0.412);
}
.btn-leia-mais:hover {
  background-color: #e9cb7a;
  cursor: pointer;
  transition: 0.6s ease;
}
@media screen and (max-width: 900px) {
  .container {
    width: 700px;
  }
}
@media screen and (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
    width: 600px;
  }
  .container img {
    width: 50%;
    margin: 0 auto;
  }
  .container h2 {
    font-size: 18px;
    text-align: center;
    padding: 10px;
  }
}
@media screen and (max-width: 700px) {
  .container {
    width: 500px;
  }
}
@media screen and (max-width: 600px) {
  .container {
    width: 400px;
  }
}
@media screen and (max-width: 500px) {
  .container {
    width: 300px;
  }
}
@media screen and (max-width: 400px) {
  .container {
    width: 280px;
  }
  .container h2 {
    font-size: 18px;
    text-align: center;
  }
}
@media screen and (max-width: 300px) {
  .container {
    width: 250px;
  }
  .center-btn {
    font-size: 14px;
  }
}
</style>
