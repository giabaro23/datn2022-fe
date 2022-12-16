import axios from "axios";

const API_URL = "http://localhost:8080/";

const register = (roleId, email, password, address, phoneNumber, firstName, lastName, gender) => {
  return axios.post(API_URL + "signup", {
    roleId,
    email,
    password,
    address,
    phoneNumber,
    firstName,
    lastName,
    gender
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};