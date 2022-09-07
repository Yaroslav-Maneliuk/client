import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createUser = (values) => http.post("/users", values);
