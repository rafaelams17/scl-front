<template>
  <div>
    <h1>Top 3 dos livros mais populares no mundo</h1>
    <DescBooks :src="hp.src" :alt="hp.alt" :subtitle="hp.subtitle" :description="hp.description" :href="hp.href"/>
    <DescBooks :src="anne.src" :alt="anne.alt" :subtitle="anne.subtitle" :description="anne.description" :href="anne.href"/>
    <DescBooks :src="prince.src" :alt="prince.alt" :subtitle="prince.subtitle" :description="prince.description" :href="prince.href"/>
  </div>
</template>

<script setup>
import DescBooks from "../components/DescBooks.vue";

const hp = {
  src: "/img/harry-potter.svg", 
  alt: 'Livros de Harry Potter',
  subtitle: 'A Saga Harry Potter', 
  description: 'A história de Harry Potter, é uma fantasia que nos livros você sente medo e nos filmes você sente algo mais leve, amo como a autora deixa muitas pontas para você viajar na história e querer saber mais. Tanto que ela faz histórias adicionais para aumentar ainda mais a sua imaginação.',
  href: 'https://www.amazon.com/-/pt/dp/6555321806/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EYQAG3XQO381&keywords=harry+potter+e+a+pedra+filosofal&qid=1689097205&s=books&sprefix=harry+potter+e+a+pedra+filosofal%2Cstripbooks-intl-ship%2C219&sr=1-14', 
}

const anne = {
  src: "/img/anne.svg", 
  alt: 'O Diário de Anne Frank',
  subtitle: 'O Diário de Anne Frank', 
  description: 'É a história de menina Judaica que viveu o Holocasto, um dos piores acontecimento que ocorreu no mundo. Em meio à Segunda Guerra Mundial, Anne Frank foi também uma adolescente comum. Não muito diferente das garotas do século XXI, tinha seus sonhos e conflitos íntimos. Queria viajar pelo mundo e se tornar jornalista e escritora. Confinada no Anexo Secreto, um esconderijo onde esteve por mais de dois anos, entre outros sentimentos descobriu ali seu primeiro amor. É um dos livros que eu quero ler ainda.',
  href: 'https://www.amazon.com/-/pt/dp/6586181550/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E898AIETP66J&keywords=diario+de+anne+frank&qid=1689097245&s=books&sprefix=diario+de+anne+frank%2Cstripbooks-intl-ship%2C216&sr=1-2', 
}

const prince = {
  src: "/img/the-little-prince.svg", 
  alt: 'Livro do Pequeno Principe',
  subtitle: 'O Pequeno Príncipe', 
  description: 'É uma história fascinante, eu sou apaixonada, o pequeno principe tem o poder de te ensinar a amar as pequenas coisas e com muita delicadeza. Ao ler, você percebe que o autor debate questões filosoficas, a inocência e a fantasia, e como as pessoas crescem e abandona a infância.',
  href: 'https://www.amazon.com/-/pt/dp/1405288191/ref=sr_1_2?crid=2JQ5ABUVDA6NO&keywords=o+pequeno+principe&qid=1689097281&s=books&sprefix=o+pequeno%2Cstripbooks-intl-ship%2C223&sr=1-2', 
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 30px;
}
</style>
