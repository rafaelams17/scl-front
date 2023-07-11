<template>
    <div>
        <h1 class="title-h1">Top 3 dos livros mais populares no mundo</h1>
        <div class="container">
            <div class="img-capa">
                <img src="../assets/harry-potter.png" alt="livros de harry potter">
            </div>
            <div class="descricao">
                <h2>A Saga Harry Potter</h2>
                <p>A história de Harry Potter, é uma fantasia que nos livros você sente medo e nos filmes você sente algo mais leve, amo como a autora deixa muitas pontas para você viajar na história e querer saber mais. Tanto que ela faz histórias adicionais para <strong>aumentar ainda mais a sua imaginação</strong>.</p>
                <div class="center-btn">
                    <a href="https://www.amazon.com/-/pt/dp/6555321806/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EYQAG3XQO381&keywords=harry+potter+e+a+pedra+filosofal&qid=1689097205&s=books&sprefix=harry+potter+e+a+pedra+filosofal%2Cstripbooks-intl-ship%2C219&sr=1-14" target="_blank"><button type="button" value="leia-mais" class="btn-leia-mais">Compre Agora</button></a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="img-capa">
                <img src="../assets/anne.png" alt="livro de Anne Frank">
            </div>
            <div class="descricao">
                <h2>O Diário de Anne Frank</h2>
                <p>É a história de menina Judaica que viveu o Holocasto, um dos piores acontecimento que ocorreu no mundo. Ela conta em seu diário, como ela e sua família viveu nesse momento. <strong>É um dos livros que eu quero ler ainda</strong>.</p>
                <div class="center-btn">
                    <a href="https://www.amazon.com/-/pt/dp/6586181550/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E898AIETP66J&keywords=diario+de+anne+frank&qid=1689097245&s=books&sprefix=diario+de+anne+frank%2Cstripbooks-intl-ship%2C216&sr=1-2" target="_blank"><button type="button" value="leia-mais" class="btn-leia-mais">Compre Agora</button></a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="img-capa">
                <img src="../assets/the-little-prince.png" alt="livro do pequeno principe">
            </div>
            <div class="descricao">
                <h2>O Pequeno Príncipe</h2>
                <p>É uma história fascinante, eu sou apaixonada, <strong>o pequeno principe tem o poder de te ensinar a amar as pequenas coisas</strong> e com muita delicadeza. Ao ler, você percebe que o autor debate questões filosoficas, a inocência e a fantasia, e como as pessoas crescem e abandona a infância.</p>
                <div class="center-btn">
                    <a href="https://www.amazon.com/-/pt/dp/1405288191/ref=sr_1_2?crid=2JQ5ABUVDA6NO&keywords=o+pequeno+principe&qid=1689097281&s=books&sprefix=o+pequeno%2Cstripbooks-intl-ship%2C223&sr=1-2" target="_blank"><button type="button" value="leia-mais" class="btn-leia-mais">Compre Agora</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.title-h1 {
    text-align: center;
    margin-bottom: 10px;
}
.container {
    display: flex;
    flex-direction: row;
    background-color: #FCBA03;
    border-radius: 20px;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 20px;
}

.img-capa {
    padding-right: 10px;
}

.center-btn {
    margin-top: 10px;
    text-align: center;
}

.btn-leia-mais {
    background-color: #000;
    color: #FCBA03;
    border: none;
    border-radius: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 40px;
    padding-right: 40px;
    font-weight: bold;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.605);
}

.btn-leia-mais:hover {
    background-color: #3f3f3f;
    cursor: pointer;
    transition: .5s ease;
}

</style>