import axios from "axios";

export const API = axios.create({
    baseURL: "https://64549401a74f994b3343a5d8.mockapi.io",
    headers: {"Content-Type": "application/json"},
});