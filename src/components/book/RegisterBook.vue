<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form class="form" @submit.prevent.stop="registerBook()">
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

      <label for="image"
        >Upload da imagem do livro
        <span class="campo-obrigatorio">*</span></label
      >
      <input
        type="file"
        name="image"
        id="image"
        placeholder="Insira uma imagem do livro"
        @change="uploadImage" accept="image/*"
      />
      <!-- <img v-if="imageURL" :src="imageURL" alt="Uploaded Image"> enviar a image para a API -->

      <div class="btn">
        <input class="submit" type="submit" :value="btnSubmit" />
        <input class="reset" type="reset" value="Cancelar" @click="backToDashboard()"/>
      </div>
    </form>
    <Message :msg="msg" v-show="msg" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Message from "../Message.vue";
import api from "../../../axios";

const router = useRouter();
const msg = ref(null);

const title = "Cadastre seus livros";
const btnSubmit = "Cadastrar";

const form = ref({
  titulo: "",
  autor: "",
  quantPage: "",
  sinopse: "",
  editora: "",
  dataPublicacao: ""
})

const imageURL = ref(""); // não está funcionando ainda, pesquisar como tratar image no vue

async function registerBook() {
  try {
    // verificar se os campos estão vazios
    if(
      !form.value.titulo || !form.value.autor || !form.value.quantPage || !form.value.sinopse || !form.value.dataPublicacao || !form.value.editora
      ){
      msg.value = "Campos vazios! Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
    } else {
      const { data } = await api.get("/book"); // rota sem autorização ainda
      let bookExits = false; // verificar se o livro já existe

      for(var i = 0;i < data.length; i++) {
        if(form.value.titulo == data[i].titulo){
          bookExits = true;
        }
      }

      if(bookExits){
        msg.value = "O livro já existe!";
        setTimeout(() => (msg.value = ""), 2000);
      } else {
        // Criação do Livro
        const { data } = await api.post("/book", form.value);
        msg.value = "Livro criado com sucesso!";
        setTimeout(() => (msg.value = ""), 2000);

        if(imageURL){
          console.log(imageURL);
        }

        // limpar os campos 
        form.value = ""

        // Teste
        console.log("Cheguei aqui!", data);
        console.log("Titulo: " + form.value.titulo);
        console.log("Autor: " + form.value.autor);
        console.log("Quantidade de Página: " + form.value.quantPage);
        console.log("Sinopse: " + form.value.sinopse);
        console.log("Editora: " + form.value.editora);
        console.log("Data de Publicação do Livro: " + form.value.dataPublicacao);
      }
    }
  } catch (error) {
    if(error.response) {
      console.log("Server responded with: ", error.response.data);
      console.log("HTTP status code: ", error.response.status);
    } else {
      console.log("Error details: ", error.message);
    }
  }
}

function uploadImage(event){
  const file = event.target.files[0];

  if(file){
    const reader = new FileReader();
    reader.onload = () => {
      imageURL.value = reader.result;
    };
    reader.readAsDataURL(file);
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
