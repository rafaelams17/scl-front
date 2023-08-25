<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form class="form" @submit.prevent="registerBook()">
      <label for="titulo"
        >Título <span class="campo-obrigatorio">*</span></label
      >
      <input
        type="text"
        name="titulo"
        id="titulo"
        placeholder="Digite o nome do livro"
        v-model="form.titulo"
      />

      <label for="autor">Autor <span class="campo-obrigatorio">*</span></label>
      <input
        type="text"
        name="autor"
        id="autor"
        placeholder="Digite o(a) autor(a) do livro"
        v-model="form.autor"
      />

      <label for="quantPage"
        >Quantidade de página <span class="campo-obrigatorio">*</span></label
      >
      <input
        type="number"
        name="quantPage"
        id="quantPage"
        placeholder="Digite a quantidade de página do livro"
        v-model="form.quantPage"
      />

      <label for="sinopse"
        >Sinopse <span class="campo-obrigatorio">*</span></label
      >
      <textarea
        rows="5"
        cols="33"
        name="sinopse"
        id="sinopse"
        placeholder="Informe a sinopse do livro de forma breve"
        v-model="form.sinopse"
      ></textarea>

      <label for="editora"
        >Editora <span class="campo-obrigatorio">*</span></label
      >
      <input
        type="text"
        name="editora"
        id="editora"
        placeholder="Digite a Editora do livro"
        v-model="form.editora"
      />

      <label for="anoPubli"
        >Data de publicação <span class="campo-obrigatorio">*</span></label
      >
      <input
        type="date"
        name="anoPubli"
        id="anoPubli"
        placeholder="Digite a data de publicação do livro"
        v-model="form.dataPublicacao"
      />
      <!-- Image Upload -->
      <label for="image"
        >Upload da capa do livro <span class="campo-obrigatorio">*</span></label
      >
      <input type="file" name="image" id="image" ref="image" />

      <div class="btn">
        <input class="submit" type="submit" :value="btnSubmit" />
        <input
          class="reset"
          type="reset"
          value="Cancelar"
          @click="backToDashboard()"
        />
      </div>
    </form>
    <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Message from "../Message.vue";
import api from "@/boot/axios";

const router = useRouter();
const msg = ref(null);
const type = ref(null);

const title = "Cadastre seus livros";
const btnSubmit = "Cadastrar";

const form = ref({
  titulo: "",
  autor: "",
  quantPage: "",
  sinopse: "",
  editora: "",
  dataPublicacao: "",
  image: null,
});

// função para criar um livro
async function registerBook() {
  try {
    // verificar se os campos estão vazios
    if (
      !form.value.titulo ||
      !form.value.autor ||
      !form.value.quantPage ||
      !form.value.sinopse ||
      !form.value.dataPublicacao ||
      !form.value.editora
    ) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
    } else {
      const { data } = await api.get("/book"); 

      // verificar se o livro já existe
      let bookExits = false; 

      for (var i = 0; i < data.length; i++) {
        if (form.value.titulo == data[i].titulo) {
          bookExits = true;
        }
      }

      if (bookExits) {
        type.value = "error";
        msg.value = "O livro já existe!";
        setTimeout(() => (msg.value = ""), 2000);
      } else {
        // Criação do Livro
        const { data } = await api.post("/book", form.value);

        type.value = "sucess";
        msg.value = "Livro criado com sucesso!";
        setTimeout(() => (msg.value = ""), 2000);

        // limpar os campos
        form.value = "";
      }
    }
  } catch (error) {
    if (error.response) {
      console.log("Server responded with: ", error.response.data);
      console.log("HTTP status code: ", error.response.status);
    } else {
      console.log("Error details: ", error.message);
    }
  }
}

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
.campo-obrigatorio {
  color: #ff0000;
}
.card {
  width: 100%;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px #fbcd0175;
  border-radius: 5px;
  overflow: hidden;
}
.card .top {
  text-align: center;
}
.card p {
  font-weight: bold;
  color: #fcba03;
}
.card button {
  outline: 0;
  border: 0;
  color: #fff;
  border-radius: 4px;
  font-weight: 400;
  padding: 8px 13px;
  width: 100%;
  background: #fcba03;
}
.card .drag-area {
  height: 150px;
  border-radius: 5px;
  border: 1px dashed #fcba03;
  background: #fff;
  color: #fcba03;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: auto;
  -webkit-user-select: none;
  margin-top: 10px;
}
.card .drag-area .visible {
  font-size: 18px;
}
.card .select {
  color: #fcba03;
  margin-left: 5px;
  cursor: pointer;
  transition: 0.4s;
}
.card .select:hover {
  opacity: 0.6;
}
.card .container2 {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 200px;
  position: relative;
  margin-bottom: 8px;
  padding-top: 15px;
}
.card .container2 .image {
  width: 85px;
  height: 75px;
  margin-right: 5px;
  margin-bottom: 8px;
  position: relative;
}
.card .container2 .image img {
  padding: 5px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.card .container2 .image span {
  margin-top: 10px;
  position: absolute;
  top: -2px;
  right: 9px;
  font-size: 20px;
  cursor: pointer;
}
.card input,
.card .drag-area .on-drop,
.card .drag-area.dragover .visible {
  display: none;
}
.delete {
  background: transparent;
  z-index: 999;
  color: #ff0000;
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
  font-weight: 500;
}
.btn .submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
.btn .reset {
  background-color: #000;
  color: #fcba03;
  border: none;
  padding: 5px 15px 5px 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 500;
}
.btn .reset:hover {
  background-color: #000000ae;
  transition: 0.5s;
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
