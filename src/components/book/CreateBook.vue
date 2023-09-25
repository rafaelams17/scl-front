<template>
  <div class="container">
    <h1><img src="../../assets/dashboard.svg" alt="Dashboard" />{{ title }}</h1>
    <form class="form" @submit.prevent="registerBook()">
      <label for="titulo">Título <span class="campo-obrigatorio">*</span></label>
      <input
        type="text"
        id="titulo"
        placeholder="Digite o nome do livro"
        v-model="form.titulo"
      />

      <label for="autor">Autor</label>
      <input
        type="text"
        name="autor"
        id="autor"
        placeholder="Digite o(a) autor(a) do livro"
        v-model="form.autor"
      />

      <label for="data_inicial">Data inicial da leitura</label>
      <input
        type="date"
        name="data_inicial"
        id="data_inicial"
        placeholder="Digite a data inicial da leitura do livro"
        v-model="form.data_inicial"
      />

      <div class="container-switch">
        <input
          class="switch switch--shadow"
          type="checkbox"
          name="switch-shadow"
          id="switch-shadow"
          v-model="form.leitura_atual"
        />
        <label for="switch-shadow"></label>
        <p>Lendo no momento</p>
      </div>

      <div v-if="!form.leitura_atual">
        <label for="data_final">Data final da leitura</label>
      <input
        type="date"
        name="data_final"
        id="data_final"
        v-model="form.data_final"
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
import api from "@/boot/axios";

const router = useRouter();
const msg = ref(null);
const type = ref(null);
const id_user = Number(localStorage.getItem('id_user') + 1);

const title = "Cadastrar livro";
const btnSubmit = "Cadastrar";

const form = ref({
  titulo: "",
  autor: "",
  data_inicial: "",
  data_final: "",
  leitura_atual: null,
  id_user: id_user,
});

// função para criar um livro
async function registerBook() {
  try {
    // verificar se os campos estão vazios
    if (!form.value.titulo) {
      type.value = "error";
      msg.value = "Campo de título obrigatório!";
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
        if (form.value.data_inicial) {
          formatDate();
        }

        console.log(form.value);
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
function formatDate() {
  const data_i = new Date(form.value.data_inicial);
  const data_f = new Date(form.value.data_final);

  const dataFormatadaInicial = `${data_i.getFullYear()}-${String(
    data_i.getMonth() + 1
  ).padStart(2, "0")}-${String(data_i.getDate()).padStart(2, "0")}`;
  const dataFormatadaFinal = `${data_f.getFullYear()}-${String(
    data_f.getMonth() + 1
  ).padStart(2, "0")}-${String(data_f.getDate()).padStart(2, "0")}`;

  form.value.data_inicial = dataFormatadaInicial;
  form.value.data_final = dataFormatadaFinal;
}
</script>

<style scoped>
* {
  background-color: #fff;
  color: black;
}
.container {
  margin: 0 auto;
  width: 800px;
  height: 100vh;
}
.container h1 {
  margin-top: 15px;
  text-align: center;
  font-size: 35px;
}
.container img {
  padding-right: 10px;
  width: 40px;
}
.container form {
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
#data_inicial,
#data_final {
  display: flex;
  width: 100%;
  background-color: #fcba033d;
  border: none;
  padding: 10px;
}
#titulo:focus,
#autor:focus,
#data_inicial:focus,
#data_final:focus {
  outline: none;
}
.campo-obrigatorio {
  color: #ff0000;
}
.container-switch {
  display: flex;
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
.switch--shadow + label::before,
.switch--shadow + label::after {
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
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 700px;
    margin: 0 auto;
  }
}
@media (max-width: 900px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 500px;
    margin: 0 auto;
  }
}
@media (max-width: 700px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 450px;
    margin: 0 auto;
  }
}
@media (max-width: 600px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 400px;
    margin: 0 auto;
  }
}
@media (max-width: 500px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 350px;
    margin: 0 auto;
  }
}
/* Não mexer */
@media (max-width: 400px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 300px;
    margin: 0 auto;
  }
}
@media (max-width: 350px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 2500px;
    margin: 0 auto;
  }
}
@media (max-width: 250px) {
  #container {
    margin: 0 auto;
  }
  .container form {
    width: 200px;
    margin: 0 auto;
  }
}
</style>
