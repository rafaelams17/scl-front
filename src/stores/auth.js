import { defineStore } from "pinia";
import api from "@/boot/axios";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('login', () => {
    const token = ref(localStorage.getItem('acess_token'));
    const id_user = ref(localStorage.getItem('id_user'));

    // atualizar os dados do localStorage
    function setToken(tokenValue) {
        localStorage.setItem('Token: ', tokenValue);
        token.value = tokenValue;
    }

    function setUser(idUserValue) {
        localStorage.setItem('id_user: ', idUserValue);
        id_user.value = idUserValue;
    }

    const isAuthenticated = computed(() => {
        return token.value && id_user.value;
    })


    function clear() {
        localStorage.removeItem('acess_token');
        localStorage.removeItem('id_user');
        token.value = '';
        id_user.value = '';

        localStorage.clear();
    }

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + token.value;
            const { data } = await api.get('/user', {
                headers: {
                    Authorization: tokenAuth,
                }
            });
            return data;
        } catch (error) {
            console.log("Server responded with:", error?.response?.data);
        }
    }

    return {
        token,
        id_user,
        isAuthenticated,
        setToken,
        setUser,
        checkToken,
        clear,
    }
});