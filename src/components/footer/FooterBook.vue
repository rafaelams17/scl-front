<template>
    <div>
        <button id="btn-logout" @click="backToLogin()">
          <i
            id="icon-logout"
            class="fa-solid fa-right-from-bracket fa-rotate-180"
          ></i
          >Log Out
        </button>
      </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    
    const router = useRouter();
    
    // voltar para página login
    function backToLogin() {
      router.push("/login");
    }
</script>

<style scoped>
    .btn-back {
        border-radius: 50px;
        background-color: #000;
        border: 2px solid #fcba03;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        width: 100px;
      }
      .btn-back i {
        background-color: #000;
        padding-right: 10px;
      }
</style> 