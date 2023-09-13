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
      <!-- Concertar depois com chatgpt -->
      <div id="book-table">
        <!-- Área do Cabeçalho -->
        <div>
          <!-- Header / Column-->
          <div id="book-table-col">
            <div class="order-id">#</div>
            <div>Título</div>
            <div>Autor</div>
            <div>Quant. de Pág.</div>
            <div>Gênero</div>
            <div>Data de Início</div>
            <div>Leitura Atual</div>
            <div>Data de Fim</div>
            <div class="acoes">Ações</div>
          </div>
        </div>

        <!-- Body / Rows -->
        <div id="book-table-rows" v-for="n in 2" :key="n">
          <!-- <div class="book-table-row"> -->
            <div class="order-id">ID</div>
            <div>Título</div>
            <div>Autor</div>
            <div>Quantidade de Páginas</div>
            <div>Gênero</div>
            <div>Data de Início</div>
            <div>
              <select
                name="status"
                id="status"
                @change="updateStatus($event, id)"
              >
                <option value="">Selecione</option>
                <option value="">Sim</option>
                <option value="">Não</option>
              </select>
            </div>
            <div>Data de Fim</div>
            <div class="icon-acoes">
              <a href="#"><img src="../../assets/edit.svg" alt="" /></a>
              <a href="#"><img src="../../assets/remove.svg" alt="" /></a>
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
// import api from "@/boot/axios";

const isEmpty = false;
const router = useRouter();
const n = 1;
const id = 0;

function addBook() {
  router.push("/create-book");
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
#book-table {
  max-width: 1300px;
  margin: 0 auto;
}
#book-table-col,
#book-table-rows,
.book-table-row {
  display: flex;
  flex-wrap: wrap;
}
#book-table-col {
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #333;
}
#book-table-col div,
.book-table-row div {
  width: 9%;
  text-align: center;
}
#book-table-col .order-id,
.book-table-row .order-id {
  width: 5%;
}
#book-table-col .acoes,
.book-table-row .icon-acoes {
  width: 5%;
}
.book-table-row {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
select {
  padding: 4px 4px;
  margin-right: 10px;
  font-size: 16px;
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
</style>
