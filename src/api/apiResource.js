import axios from "axios";


export const apiTodolist = axios.create({
  baseURL: "http://localhost:4000",
});
