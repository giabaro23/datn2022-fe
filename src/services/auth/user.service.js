import authHeader from "./auth-header";
import http from "../../http-common";
import axios from "axios";

const baseURL = 'http://localhost:8080/'

const getAll = () => {
  return http.get("profile")
}
const getUserById = (id) => {
  return http.get(`profile/me?id=${id}`, {
    headers: authHeader(),
    data: {}
  });

};

const editUser = (id, data) => {
  return axios.put(baseURL + `profile/edit?id=${id}`, data,{headers:authHeader(), data:{}});
}
const changePassword = (data) => {
  return axios.put(baseURL + `profileFreelancer/changePassword`, data,{headers:authHeader(), data:{}});
}

export default {
  getAll,
  getUserById,
  editUser,
  changePassword
};