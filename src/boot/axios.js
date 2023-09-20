import axios from "axios";

const api = axios.create( 
    { 
        baseURL: "http://localhost:3000/", // porta disponivel para a aplicação no backend
        headers: "application/json"
    } ); 

export default api;