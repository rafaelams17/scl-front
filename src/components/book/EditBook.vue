<template>
  <div class="container">
    <h1><img src="../../assets/dashboard.svg" alt="Dashboard" />{{ title }}</h1>
    <form class="form" @submit.prevent="registerBook()">
      <label for="titulo">Título <span class="campo-obrigatorio">*</span></label>
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

      <label for="quantPage">Quantidade de página <span class="campo-obrigatorio">*</span></label>
      <input
        type="number"
        name="quantPage"
        id="quantPage"
        placeholder="Digite a quantidade de página do livro"
        v-model="form.quantPage"
      />

      <label for="genero">Gênero <span class="campo-obrigatorio">*</span></label>
      <input
        type="text"
        name="genero"
        id="genero"
        placeholder="Digite o gênero do livro"
        v-model="form.genero"
      />

      <label for="data_inicio">Data de Início <span class="campo-obrigatorio">*</span></label>
      <input
        type="date"
        name="data_inicio"
        id="data_inicio"
        placeholder="Digite a data de início da leitura"
        v-model="form.data_inicio"
      />

      <div class="container-switch">
        <input class="switch switch--shadow" type="checkbox" name="switch-shadow" id="switch-shadow" v-model="form.leitura_atual">
        <label for="switch-shadow"></label>
        <p>Lendo no momento</p>
      </div>

      <div v-if="!form.leitura_atual">
        <label for="data_fim">Data de Fim <span class="campo-obrigatorio">*</span></label>
        <input
          type="date"
          name="data_fim"
          id="data_fim"
          placeholder="Digite a data do último dia de leitura"
          v-model="form.data_fim"
        />
      </div>
      
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
import Message from "../../components/Message.vue";

const router = useRouter();
const msg = ref(null);
const type = ref(null);

const title = "Editar livro";
const btnSubmit = "Atualizar";

const form = ref({
  titulo: "",
  autor: "",
  quantPage: "",
  sinopse: "",
  genero: "",
  data_inicio: "",
  data_fim: "",
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
      !form.value.data_inicio ||
      !form.value.genero
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
  width: 100vh;
  height: 70vh;
  margin-bottom: 4%;
}
.container h1 {
  margin-top: 5%;
  text-align: center;
  font-size: 35px;
}
.container img {
  padding-right: 10px;
  width: 40px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form input {
  margin-bottom: 10px;
}
.form p {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
}
#titulo,
#autor,
#quantPage,
#genero,
#sinopse,
#data_inicio,
#data_fim {
  display: flex;
  width: 100%;
  background-color: #fcba033d;
  border: none;
  margin-left: 10px;
  padding: 10px;
}
#titulo:focus,
#autor:focus,
#quantPage:focus,
#genero:focus,
#sinopse:focus,
#anoPubli:focus {
  outline: none;
}
.campo-obrigatorio {
  color: #ff0000;
}
.container-switch {
  display: flex;
  /* align-items: center; */
}
.container-switch p {
  font-size: 16px;
  align-items: center;
  padding: 2px 0 0 5px;
}
.switch {
  position: absolute;
  visibility: hidden;
}
.switch + label {
  display: block;
  position: relative; 
  cursor: pointer;
  outline: none;
  user-select: none;
}
.switch--shadow + label {
  padding: 2px;
  width: 40px;
  height: 20px;
  background-color: #dddddd;
  border-radius: 30px;
}
.switch--shadow + label::before, .switch--shadow + label::after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: "";
}
.switch--shadow + label::before {
  right: 1px;
  background-color: #f1f1f1;
  border-radius: 3cm;
  transition: 0.4s;
}
.switch--shadow + label::after {
  width: 20px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}
.switch--shadow:checked + label::before {
  background-color: #8ce196;
}
.switch--shadow:checked + label::after {
  transform: translateX(20px);
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
  font-size: 16px;
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
  font-size: 16px;
}
.btn .reset:hover {
  background-color: #000000ae;
  transition: 0.5s;
}
@media screen and (max-width: 1400px) {
  .container {
    margin-bottom: 15%;
  }
}
/* @media screen and (max-width: 750px) {
  .container {
    margin: 20px;
  }
  .container h1 {
    font-size: 1.5em;
  }
  #titulo,
  #autor,
  #quantPage,
  #genero,
  #sinopse,
  #anoPubli {
    width: 80%;
  }
} */
</style>
