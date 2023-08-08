import api from "../../../axios";
import { form, router } from "./RegisterPage.vue";

// criar um usuário
export async function signUp() {
try {
// verificar se os campos estão vazios
if (!form.value.name &&
!form.value.email &&
!form.value.password &&
!form.value.confirmPassword) {
this.msg = "Campos vazios! Preencha os campos corretamente!";
setTimeout(() => (this.msg = ""), 2000);
}

// pegar os dados da API
const { data } = await api.get("/user");
let userExists = false;

// verifica se o usuário já existe
for (var i = 0; i < data.length; i++) {
if (form.value.email == data[i].email) {
userExists = true;
}
}

if (userExists) {
this.msg = "O usuário já existe!";
setTimeout(() => (this.msg = ""), 2000);
} else {
const user = await api.post("/user", form.value);
setTimeout(() => (this.msg = "Usuário cadastrado com sucesso!"), 2000);
setTimeout(() => router.push("/login"), 1500);
console.log("entrou aqui pelo menos!");
}
} catch (error) {
if (error.response) {
console.log("Server responded with:", error.response.data);
console.log("HTTP status code:", error.response.status);
} else {
console.log("Error details:", error.message);
}
}
}
