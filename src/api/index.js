import axios from "axios";
import FormData from "form-data";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createUser = (values) => {
  const formData = new FormData();
  formData.append("login", values.logn);
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("imgPath", values.imgPath);
  return http.post("/users", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
