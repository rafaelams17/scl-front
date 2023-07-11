<template>
    <div>
        <h1 class="title-h1">Top 3 dos livros mais populares no mundo</h1>
        <div class="container">
            <div class="img-capa">
                <img src="../assets/harry-potter.png" alt="livros de harry potter">
            </div>
            <div class="descricao">
                <h2>A Saga Harry Potter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, magnam? Numquam accusantium facere nemo! Inventore tempora reiciendis fugit, sunt quas qui pariatur neque aliquid ipsum animi officiis vero cumque dolorem.</p>
                <div class="center-btn">
                    <a href="https://google.com" target="_blank"><button type="button" value="leia-mais" class="btn-leia-mais">Leia mais</button></a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="img-capa">
                <img src="../assets/anne.png" alt="livro de Anne Frank">
            </div>
            <div class="descricao">
                <h2>O Diário de Anne Frank</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, magnam? Numquam accusantium facere nemo! Inventore tempora reiciendis fugit, sunt quas qui pariatur neque aliquid ipsum animi officiis vero cumque dolorem.</p>
                <div class="center-btn">
                    <a href="https://google.com" target="_blank"><button type="button" value="leia-mais" class="btn-leia-mais">Leia mais</button></a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="img-capa">
                <img src="../assets/the-little-prince.png" alt="livro do pequeno principe">
            </div>
            <div class="descricao">
                <h2>O Pequeno Príncipe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, magnam? Numquam accusantium facere nemo! Inventore tempora reiciendis fugit, sunt quas qui pariatur neque aliquid ipsum animi officiis vero cumque dolorem.</p>
                <div class="center-btn">
                    <a href="https://google.com" target="_blank"><button type="button" value="leia-mais" class="btn-leia-mais">Leia mais</button></a>
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
    width: 50%;
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