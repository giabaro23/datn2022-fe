import axios from "axios";
import http from "../../http-common";
import authHeader from "../auth/auth-header";
const baseURL = 'http://localhost:8080/'

const getAll = () => {
  return http.get("/job");
};

const get = id => {
  return axios.get(baseURL + `job/getById?id=${id}`,{headers:authHeader(), data:{}});
};

const create = (data) => {
  return axios.post(baseURL +`job`, data,{headers:authHeader(), data:{}});
};
const getListByUserId = ({userId}) =>{
  return axios.get(baseURL + `job/getByUserId`, {userId}, {headers:authHeader(), data:{}})
}
const update = (id, data) => {
  return http.put(`/job/${id}`, data);
};

const remove = id => {
  return http.delete(`/job/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/job`);
// };

// const findByTitle = title => {
//   return http.get(`/job?title=${title}`);
// };

const JobService = {
  getAll,
  get,
  create,
  update,
  remove,
  getListByUserId
//   removeAll,
//   findByTitle
};

export default JobService;