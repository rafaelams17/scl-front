<template>
    <div class="footer">
        <div class="text-footer">
            <p>&copy; 2023 por Rafaela Santos</p>
            <p>Vitória da Conquista, BA</p>
        </div>
        <div class="social-media">
            <a href=""><img src="../assets/linkedin.png" alt=""></a>
            <a href=""><img src="../assets/instagram.png" alt=""></a>
            <a href=""><img src="../assets/github.png" alt=""></a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer {
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

    background: #000;
    color: #FCBA03;
    text-align: center;
    padding: 20px;
}
.social-media {
    margin-top: 10px;
}

.text-footer {
    line-height: 1.3em;
}
</style>