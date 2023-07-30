<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form class="form">
      <label for="titulo">Título</label>
      <input
        type="text"
        name="titulo"
        id="titulo"
        placeholder="Digite o nome do livro"
      />

      <label for="autor">Autor</label>
      <input
        type="text"
        name="autor"
        id="autor"
        placeholder="Digite o(a) autor(a) do livro"
      />

      <label for="quantPage">Quantidade de página</label>
      <input
        type="number"
        name="quantPage"
        id="quantPage"
        placeholder="Digite a quantidade de página do livro"
      />

      <label for="sinopse">Sinopse</label>
      <textarea
        rows="5"
        cols="33"
        name="sinopse"
        id="sinopse"
        placeholder="Informe a sinopse do livro de forma breve"
      ></textarea>

      <label for="editora">Editora</label>
      <input
        type="text"
        name="editora"
        id="editora"
        placeholder="Digite a Editora do livro"
      />

      <label for="anoPubli">Ano de publicação</label>
      <input
        type="number"
        name="anoPubli"
        id="anoPubli"
        placeholder="Digite o ano de publicação do livro"
      />

      <label for="image">Upload da imagem do livro</label>
      <input
        type="file"
        name="image"
        id="image"
        placeholder="Insira uma imagem do livro"
      />

      <div class="btn">
        <button type="submit" class="submit">{{ btnSubmit }}</button>
        <button type="reset" class="reset" @click="backToDashboard()">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const title = "Cadastre seus livros";
const btnSubmit = "Cadastrar";

function backToDashboard() {
  router.push("/book");
}
</script>

<style scoped>
* {
  background-color: #fff;
  color: black;
}
.container {
  margin: 0 auto;
  width: 80vh;
  height: 80vh;
  margin-bottom: 5%;
}
.container h1 {
  text-align: center;
  font-size: 35px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form input,
textarea {
  margin-bottom: 10px;
}
.form label {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
}
#titulo,
#autor,
#quantPage,
#editora,
#sinopse,
#anoPubli {
  display: flex;
  width: 100%;
  background-color: #f0f8ff;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
}
#titulo:focus,
#autor:focus,
#quantPage:focus,
#editora:focus,
#sinopse:focus,
#anoPubli:focus {
  outline: none;
}
.btn {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px;
}
.btn .submit {
  background-color: #fcba03;
  color: #000;
  border: none;
  padding: 5px 15px 5px 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.btn .submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
.btn .reset {
  background-color: #000;
  color: #fcba03;
  border: 2px solid #fcba03;
  padding: 5px 15px 5px 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.btn .reset:hover {
  transition: 0.5s;
  border: 2px solid #000;
}
@media screen and (max-width: 750px) {
  .container {
    width: 100%;
    margin: 20px;
  }
  .container h1 {
    font-size: 1.5em;
  }
  #titulo,
  #autor,
  #quantPage,
  #editora,
  #sinopse,
  #anoPubli {
    width: 80%;
  }
}

</style>
