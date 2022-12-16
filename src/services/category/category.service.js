import http from "../../http-common";

const get = () => {
  return http.get("/category");
};
const getSub = (id) => {
  return http.get("/category/getAll",id);
};

// const get = id => {
//   return http.get(`/job/${id}`);
// };

// const create = data => {
//   return http.post("/job", data);
// };

// const update = (id, data) => {
//   return http.put(`/job/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/job/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/job`);
// };

// const findByTitle = title => {
//   return http.get(`/job?title=${title}`);
// };

const CategoryService = {
  getSub,
  get
//   get,
//   create,
//   update,
//   remove,
//   removeAll,
//   findByTitle
};

export default CategoryService;