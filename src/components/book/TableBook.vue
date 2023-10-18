<template>
  <div id="container">
    <div id="container-primary">
      <div v-if="isEmpty" class="container-text">
        <h1><i class="fa-solid fa-book-open-reader"></i> Livros</h1>
        <p>
          Sua lista está vazia, clique no botão cadastrar para começar a
          preencher sua lista.
        </p>
        <input
          class="container-btn"
          type="button"
          value="Cadastrar"
          @click="addBook()"
        />
      </div>

      <!-- Tabela para mostrar os dados -->
      <div v-else class="container-table">
        <div>
          <h1 id="titulo-table">
            <i class="fa-solid fa-book-open-reader"></i> Livros
          </h1>
        </div>
        <div class="container-second">
          <div class="container-search" @click="searchBook()">
            <input type="search" placeholder="Search book " />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="container-add" @click="addBook()" title="Adicionar Livro">
            <span>+ Adicionar</span>
          </div>
        </div>

        <!-- Table -->
        <div class="table-scroll">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th class="thead-titulo">Título</th>
                <th>Autor</th>
                <th>Quantidade de páginas</th>
                <th>Data de Início</th>
                <th>Data de Fim</th>
                <th class="thead-status">Status</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in books" :key="book.id">
                <td>{{ book.id }}</td>
                <td class="thead-titulo">{{ book.titulo }}</td>
                <td>{{ book.autor }}</td>
                <td>{{ book.quant_page }}</td>
                <td>{{ book.data_inicial }}</td>
                <td>{{ book.data_final }}</td>
                <td class="thead-status">{{ book.status }}</td>
                <td>{{ book.tipo }}</td>
                <td class="icon-acoes">
                  <router-link to="/edit-book" title="Editar Livro"
                    ><img src="../../assets/edit.svg" alt="Editar"
                  /></router-link>
                  <a href="#" @click="removeBook(id)" title="Remover Livro"
                    ><img src="../../assets/remove.svg" alt="Remover"
                  /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import api from "@/boot/axios";
import { onMounted, ref } from "vue";

const isEmpty = false;
const router = useRouter();

const books = ref([]); // recebe os valores

function addBook() {
  router.push("/create-book");
}

function removeBook(id) {
  console.log("Remover livro!");
}

function searchBook() {
  console.log("Procurar livro!");
}

async function buscarDados() {
  const { data } = await api.get("/book"); // requisição para pegar todos os dados dos livros cadastrados
  books.value = data;
  console.log(books.value);
}

onMounted(() => {
  buscarDados();
});
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
  margin: 0;
  padding: 0;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
#container h1 {
  border-bottom: #ccc solid 1px;
  font-size: 25px;
}
#container h1 i {
  font-size: 25px;
}
#container p {
  margin: 15px 0 15px 0;
}
#titulo-table {
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
}
#container-primary {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  margin: 15px 0 15px 0;
  height: 100%;
}
.container-second {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin: 5px 0 10px 0;
}
.container-search {
  display: flex;
  padding-right: 10px;
  margin-top: 10px;
}
.container-search input {
  border: none;
  background: #8080801b;
  padding: 10px;
  font-size: 14px;
  width: 300px;
}
.container-search i {
  background: #8080801b;
  color: gray;
  padding: 10px;
}
.container-search input:focus {
  outline: none;
}
.container-add {
  display: flex;
  justify-content: right;
  margin-bottom: 15px;
  font-size: 16px;
  border: none;
}
.container-add span {
  background-color: #6f5cc3;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}
.container-table {
  width: 1200px;
  padding: 10px;
}
/* Estilo geral da tabela */
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 8px;
  text-align: left;
}
/* Estilizando o cabeçalho da tabela */
.table th {
  background-color: #fcba03;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
.table tr:nth-child(even) {
  background-color: #fcba03;
}
/* Estilizando as linhas da tabela */
.table td {
  border-bottom: 1px solid #ffbc03;
  padding: 10px;
  text-align: center;
}
.thead-titulo {
  width: 30%;
}
.thead-status {
  width: 10%;
}
.icon-acoes {
  width: 10%;
}
.icon-acoes a {
  padding-left: 5px;
}
.container-btn {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 50px 5px 50px;
  background-color: #fcba03;
  border: none;
  font-size: 16px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 15%;
  cursor: pointer;
}
.container-btn:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
@media (max-width: 1400px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 1100px;
    overflow-x: auto;
  }
  .container-table {
    width: 1100px;
  }
}
@media (max-width: 1300px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 900px;
    overflow-x: auto;
  }
  .container-table {
    width: 00px;
  }
}
@media (max-width: 1200px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 900px;
    overflow-x: auto;
  }
  .container-table {
    width: 900px;
  }
}
@media (max-width: 900px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 800px;
    overflow-x: auto;
  }
  .container-table {
    width: 800px;
  }
}
@media (max-width: 800px) {
  .container-text {
    margin: 10px;
    text-align: center;
  }
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 700px;
    overflow-x: auto;
  }
  .container-table {
    width: 700px;
  }
}
@media (max-width: 700px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 600px;
    overflow-x: auto;
  }
  .container-table {
    width: 600px;
  }
}
@media (max-width: 600px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 600px;
    overflow-x: auto;
  }
  .container-table {
    width: 550px;
  }
}
@media (max-width: 500px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 600px;
    overflow-x: auto;
  }
  .container-table {
    width: 400px;
  }
}
@media (max-width: 400px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 400px;
    overflow-x: auto;
  }
  .container-table {
    width: 400px;
    margin-left: 5px;
  }
}
@media (max-width: 350px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 400px;
    overflow-x: auto;
  }
  .container-table {
    width: 300px;
  }
}
</style>
