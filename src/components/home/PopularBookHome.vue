<template>
  <div>
    <h1>Top 3 dos livros mais populares no mundo</h1>
    <DescBook
      v-for="(item, index) in items"
      :key="item.id"
      :src="item.src"
      :alt="item.alt"
      :subtitle="item.subtitle"
      :description="item.description"
      :href="item.href"
      :index="index"
    />
  </div>
</template>

<script setup>
import DescBook from "./DescBookHome.vue";
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    src: "/img/harry-potter.svg",
    alt: "Livros de Harry Potter",
    subtitle: "A Saga Harry Potter",
    description:
      "A história de Harry Potter, é uma fantasia que nos livros você sente medo e nos filmes você sente algo mais leve, amo como a autora deixa muitas pontas para você viajar na história e querer saber mais. Tanto que ela faz histórias adicionais para aumentar ainda mais a sua imaginação.",
    href: "https://www.amazon.com/-/pt/dp/6555321806/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EYQAG3XQO381&keywords=harry+potter+e+a+pedra+filosofal&qid=1689097205&s=books&sprefix=harry+potter+e+a+pedra+filosofal%2Cstripbooks-intl-ship%2C219&sr=1-14",
  },
  {
    id: 2,
    src: "/img/anne.svg",
    alt: "O Diário de Anne Frank",
    subtitle: "O Diário de Anne Frank",
    description:
      "É a história de menina Judaica que viveu o Holocasto, um dos piores acontecimento que ocorreu no mundo. Em meio à Segunda Guerra Mundial, Anne Frank foi também uma adolescente comum. Não muito diferente das garotas do século XXI, tinha seus sonhos e conflitos íntimos. Queria viajar pelo mundo e se tornar jornalista e escritora. Confinada no Anexo Secreto, um esconderijo onde esteve por mais de dois anos, entre outros sentimentos descobriu ali seu primeiro amor. É um dos livros que eu quero ler ainda.",
    href: "https://www.amazon.com/-/pt/dp/6586181550/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E898AIETP66J&keywords=diario+de+anne+frank&qid=1689097245&s=books&sprefix=diario+de+anne+frank%2Cstripbooks-intl-ship%2C216&sr=1-2",
  },
  {
    id: 3,
    src: "/img/the-little-prince.svg",
    alt: "Livro do Pequeno Principe",
    subtitle: "O Pequeno Príncipe",
    description:
      "É uma história fascinante, eu sou apaixonada, o pequeno principe tem o poder de te ensinar a amar as pequenas coisas e com muita delicadeza. Ao ler, você percebe que o autor debate questões filosoficas, a inocência e a fantasia, e como as pessoas crescem e abandona a infância.",
    href: "https://www.amazon.com/-/pt/dp/1405288191/ref=sr_1_2?crid=2JQ5ABUVDA6NO&keywords=o+pequeno+principe&qid=1689097281&s=books&sprefix=o+pequeno%2Cstripbooks-intl-ship%2C223&sr=1-2",
  },
]);

</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 30px;
}
@media screen and (max-width: 700px) {
  h1 {
    font-size: 24px;
  }
}
</style>
