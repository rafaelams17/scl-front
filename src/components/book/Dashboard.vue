<template>
  <div id="container">
    <h1><i class="fa-solid fa-book-open-reader"></i> Livros</h1>
    <div v-if="isEmpty" class="container-text">
      <p>
        Sua lista está vazia, clique no botão cadastrar para começar a preencher
        sua lista.
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
      <div class="container-teste">
        <div class="container-search" @click="searchBook()">
          <input type="search" placeholder="Procurar livro ... ">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="container-add" @click="addBook()"
            title="Adicionar Livro" >
          <span>+ Adicionar</span>
        </div>
      </div>
      
      <!-- Table -->
      <div class="table-scroll">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Data de Início</th>
              <th>Data de Fim</th>
              <th>Status</th>
              <th>Avaliação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.id }}</td>
              <td>{{ book.titulo }}</td>
              <td>{{ book.autor }}</td>
              <td>{{ book.data_inicial }}</td>
              <td>{{ book.data_final }}</td>
              <td>{{ book.status }} </td>
              <td>{{ book.avaliacao }}</td>
              <td class="icon-acoes">
                <router-link to="/edit-book"><img src="../../assets/edit.svg" alt="Editar"
                /></router-link>
                <a href="#" @click="removeBook(id)" title="Remover"
                  ><img src="../../assets/remove.svg" alt="Remover"
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import api from "@/boot/axios";
import { onMounted } from "vue";

const isEmpty = false;
const router = useRouter();

const books = [
  {
    id: 1,
    titulo: "Lógica de Programação e Algoritmos com JavaScript: uma Introdução à Programação de Computadores com Exemplos e Exercícios Para Iniciantes",
    autor: "Edécio Fernando Iepsen",
    data_inicial: "10/02/2023",
    data_final: "20/04/2023",
    status: "Lido",
    avaliacao: "Gostei",
  },
  {
    id: 2,
    titulo: "Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes",
    autor: "Thomas Nield",
    data_inicial: "10/09/2023",
    data_final: "-",
    status: "Lendo",
    avaliacao: "-",
  },
];

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
  console.log(data);
}

onMounted(() => {
  buscarDados();
});
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
#container h1 {
  margin: 40px;
  font-size: 35px;
}
#container h1 i{
  font-size: 30px;
}
#container p {
  margin: 15px 0 15px 0;
}
.container-teste {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

}
.container-search {
  display: flex;
}

.container-search input {
  border: none;
  background: #8080801b;
  padding: 10px;
  font-size: 14px;
  width: 500px;

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
  background-color: #6F5CC3;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}
.container-table {
  width: 1500px;
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
  background-color: #ffe20347;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
.table tr:nth-child(even) {
  background-color: #fcba03be;
}
/* Estilizando as linhas da tabela */
.table td {
  border-bottom: 1px solid #ffbc03be;
  padding: 10px;
  text-align: center;
}
.icon-acoes {
  width: 5%;
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
    max-width: 1200px;
    overflow-x: auto;
  }
  .container-table {
    width: 1200px;
  }
}
@media (max-width: 1300px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 1200px;
    overflow-x: auto;
  }
  .container-table {
    width: 1200px;
  }
}
@media (max-width: 1200px) {
  #container {
    height: 100vh;
  }
  .table-scroll {
    max-width: 1000px;
    overflow-x: auto;
  }
  .container-table {
    width: 1000px;
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
