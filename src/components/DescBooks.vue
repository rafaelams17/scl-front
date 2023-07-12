<template>
  <div class="container">
    <!-- Imagem da Capa do Livro -->
    <img class="img-capa" :src="src" :alt="alt" />
    <!-- Descrição do Livro -->
    <div>
      <h2>{{ subtitle }}</h2>
      <p>{{ description }}</p>
      <div class="center-btn">
        <a :href="href" target="_blank">
          <button type="button" class="btn-leia-mais">Compre Agora</button>
        </a>
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
  background-color: #fcba03;
  border-radius: 20px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
}

.img-capa {
  padding-right: 10px;
}

.center-btn {
  margin-top: 10px;
  text-align: center;
}

.btn-leia-mais {
  background-color: #000;
  color: #fcba03;
  border: none;
  border-radius: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 40px;
  padding-right: 40px;
  font-weight: bold;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.605);
}

.btn-leia-mais:hover {
  background-color: #3f3f3f;
  cursor: pointer;
  transition: 0.5s ease;
}
</style>
