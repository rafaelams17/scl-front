<template>
  <div class="container">
    <h1><img src="../../assets/dashboard.svg" alt="Dashboard" />{{ title }}</h1>
    <form class="form" @submit.prevent="registerBook()">
      <label for="titulo"
        >Título <span class="campo-obrigatorio">*</span></label
      >
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

      <label for="quant_page">Quantidade de Páginas</label>
      <input
        type="number"
        name="quant_page"
        id="quant_page"
        placeholder="Digite a quantidade de páginas do livro"
        v-model="form.quant_page"
      />

      <label for="tipo">Formato do livro</label>
      <input
        type="text"
        name="tipo"
        id="tipo"
        placeholder="Digite o tipo do livro"
        v-model="form.tipo"
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Message from "../../components/Message.vue";
import api from "@/boot/axios";

const router = useRouter();
const msg = ref(null);
const type = ref(null);
const auth = useAuthStore();

const title = "Editar livro";
const btnSubmit = "Atualizar";

const form = ref({
  titulo: "",
  autor: "",
  quant_page: null,
  data_inicial: "",
  data_final: "",
  leitura_atual: null,
  tipo: "",
  id_user: auth.id_user,
});

// função para criar um livro
async function registerBook() {
  try {
    type.value = "sucess";
    msg.value = "Livro criado com sucesso!";
    setTimeout(() => (msg.value = ""), 2000);

    // limpar os campos
    form.value.titulo = "";
    form.value.autor = "";
    form.value.quant_page = "";
    form.value.tipo = "";
    form.value.data_inicial = "";
    form.value.data_final = "";
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
  router.push("/book/listagem");
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

onMounted(async () => {
  const { data } = await api.get('/book');

  console.log(data);
});
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
#quant_page,
#data_inicial,
#data_final,
#tipo {
  display: flex;
  width: 100%;
  background-color: #fcba033d;
  border: none;
  padding: 10px;
}
#titulo:focus,
#autor:focus,
#quant_page:focus,
#data_inicial:focus,
#data_final:focus,
#tipo:focus {
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
