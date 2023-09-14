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
          <tr v-for="n in 2" :key="n">
            <td>1</td>
            <td>Teste</td>
            <td>Autor Teste</td>
            <td>200</td>
            <td>Ficção</td>
            <td>01/01/2023</td>
            <td>
              <select
                name="status"
                id="status"
                @change="updateStatus($event, id)"
              >
                <option value="">Selecione</option>
                <option value="">Sim</option>
                <option value="">Não</option>
              </select>
            </td>
            <td>15/02/2023</td>
            <td class="icon-acoes">
              <a href="#" @click="editBook(id)"><img src="../../assets/edit.svg" alt="" /></a>
              <a href="#" @click="removeBook(id)"><img src="../../assets/remove.svg" alt="" /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
// import api from "@/boot/axios";

const isEmpty = false;
const router = useRouter();
const n = 1;
const id = 1;

function addBook() {
  router.push("/create-book");
}
function updateStatus(id){
  console.log("atualizar leituras!");
}
function editBook(id) {
  console.log("Editar livro!");
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
  height: 80vh;
}
#container h1 {
  margin: 2%;
}
#container p {
  margin-bottom: 3%;
}
/* Estilo geral da tabela */
.book-table {
  width: 100%;
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
/* Estilizando as células da tabela */
.book-table td {
  border: 1px solid #ccc;
  padding: 10px;
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
