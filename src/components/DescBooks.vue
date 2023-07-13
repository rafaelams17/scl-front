<template>
  <div class="container">
    <!-- Imagem da Capa do Livro -->
    <div>
      <img :src="props.src" :alt="props.alt" />
    </div>
    <!-- Descrição do Livro -->
    <div class="container-second">
      <h2>{{ props.subtitle }}</h2>
      <p class="description">{{ props.description }}</p>
      <div class="center-btn">
        <a :href="props.href" target="_blank" class="btn-leia-mais">Compre Agora</a>
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
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
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
</style>
