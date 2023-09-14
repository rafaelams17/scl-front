<template>
  <div id="container">
    <h1>Livros</h1>
    <div v-if="isEmpty">
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
    <div v-else>
      <span class="icon-add">
        <i class="fa-solid fa-circle-plus" @click="addBook()" title="Adicionar Livro"></i>
      </span>
      <!-- Table -->
      <table class="book-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Quantidade de Páginas</th>
            <th>Gênero</th>
            <th>Data de Início</th>
            <th>Leitura Atual</th>
            <th>Data de Fim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.titulo }}</td>
            <td>{{ book.autor }}</td>
            <td>{{ book.quantPag }}</td>
            <td>{{ book.genero }}</td>
            <td>{{ book.data_inicial }}</td>
            <td>
              <select
                name="status"
                id="status"
                @change="updateStatus($event, id)"
              >
                <option value="">Selecione</option>
                <option v-for="op in opcoes" :key="op.id" :value="op.tipo" :selected="book.leitural_atual == op.tipo">
                  {{ op.tipo }}
                </option>
              </select>
            </td>
            <td>{{ book.data_fim }}</td>
            <td class="icon-acoes">
              <a href="#" @click="editBook(book.id)" title="Editar"
                ><img src="../../assets/edit.svg" alt="Editar"
              /></a>
              <a href="#" @click="removeBook(id)" title="Remover"
                ><img src="../../assets/remove.svg" alt="Remover"
              /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// import api from "@/boot/axios";

const isEmpty = false;
const router = useRouter();

const books = [
  {
    id: 1,
    titulo: "SQL 1",
    autor: "Teste",
    quantPag: 200,
    genero: "Tecnologia",
    data_inicial: "10/02/2022",
    leitural_atual: null,
    data_fim: "20/04/2022",
  },
  {
    id: 2,
    titulo: "SQL 1",
    autor: "Teste",
    quantPag: 200,
    genero: "Tecnologia",
    data_inicial: "10/02/2022",
    leitural_atual: null,
    data_fim: "20/04/2022",
  },
];

const opcoes = [
  {
    id: 1, 
    tipo: 'Sim'
  },
  {
    id: 2, 
    tipo: 'Não'
  }
]

function addBook() {
  router.push("/create-book");
}
function updateStatus(id) {
  console.log("atualizar leituras!");
}
function editBook(id) {
  console.log("Editar livro!", id);
}
function removeBook(id) {
  console.log("Remover livro!");
}
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
  margin: 30px 0 0 0;
}
#container p {
  margin-bottom: 3%;
}
.icon-add {
  display: flex;
  justify-content: right;
  padding: 10px;
  font-size: 20px;
}
.icon-add i {
  cursor: pointer;
}
/* Estilo geral da tabela */
.book-table {
  width: 1600px;
  border-collapse: collapse;
}
/* Estilizando o cabeçalho da tabela */
.book-table th {
  background-color: #fcba03;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
/* Estilizando as linhas da tabela */
.book-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
.icon-acoes a {
  padding-left: 5px;
}
select {
  padding: 4px 4px;
  margin-right: 10px;
  font-size: 16px;
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
</style>
