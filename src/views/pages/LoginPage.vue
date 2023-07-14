<template>
    <div class="container">
        <img src="../../assets/logo.svg" alt="">
        <div>
            <h1>Log In</h1>
            <p>Don't have account? <a href="#" @click="teste()">Create an account</a></p>
            <form class="container-form">
                <div>
                    <label for="user">Username</label>
                    <input type="text" name="user" id="user">
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password">
                </div>

                <a href="#">Forget Password?</a>

                <div>
                    <input type="submit" value="Sign In" class="btn-submit">
                </div>
            </form>
        </div>
        <button type="button" @click="backToHome()" class="btn-back"><i class="fa-solid fa-chevron-left"></i>Back</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// voltar para página home
function backToHome(){
    router.push('/');
}
function teste() {
    console.log('Create')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
*{
    background: #fff;
}
.container {
    text-align: center;
    height: 90vh;
    width: 40%;
    margin: 0 auto;
}
.container img {
    display: flex;
    margin-top: 50px;
    padding: 20px;
}
.container h1 {
    color: #000;
    padding: 50px;
    font-size: 4em;
}
.btn-submit {
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 50px;
    border: none;
    background-color: #fcba03;
    color: #000;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    margin: 20px;
}
.btn-back {
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 50px;
    background-color: #000;
    border: 2px solid #fcba03;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
}
.btn-back i {
    background-color: #000;
    padding-right: 10px;
}

</style>