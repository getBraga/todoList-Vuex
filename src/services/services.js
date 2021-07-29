import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, params) {
    return axiosInstance.post(endpoint, params);
  },
  put(endpoint, params) {
    return axiosInstance.put(endpoint, params);
  },
  patch(endpoint, params) {
    return axiosInstance.patch(endpoint, params);
  },
  delete(endpoint, params) {
    return axiosInstance.delete(endpoint, params);
  },
};

export default {
  getTodo() {
    return api.get("/todo");
  },
  postTodoList(params) {
    return api.post("/todo", params);
  },
  // putTodoList(id, params) {
  //   return api.put(`/todo/${id}`, params);
  // },
  patchTodoList(id, params) {
    return api.patch(`/todo/${id}`, params);
  },
  deleteTodoList(id) {
    return api.delete(`/todo/${id}`);
  },
};
