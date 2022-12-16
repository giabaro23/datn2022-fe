"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _httpCommon = _interopRequireDefault(require("../../http-common"));

var _authHeader = _interopRequireDefault(require("../auth/auth-header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = 'http://localhost:8080/';

var getAll = function getAll() {
  return _httpCommon["default"].get("/job");
};

var get = function get(id) {
  return _axios["default"].get(baseURL + "job/getById?id=".concat(id), {
    headers: (0, _authHeader["default"])(),
    data: {}
  });
};

var create = function create(data) {
  return _axios["default"].post(baseURL + "job", data, {
    headers: (0, _authHeader["default"])(),
    data: {}
  });
};

var getListByUserId = function getListByUserId(_ref) {
  var userId = _ref.userId;
  return _axios["default"].get(baseURL + "job/getByUserId", {
    userId: userId
  }, {
    headers: (0, _authHeader["default"])(),
    data: {}
  });
};

var update = function update(id, data) {
  return _httpCommon["default"].put("/job/".concat(id), data);
};

var remove = function remove(id) {
  return _httpCommon["default"]["delete"]("/job/".concat(id));
}; // const removeAll = () => {
//   return http.delete(`/job`);
// };
// const findByTitle = title => {
//   return http.get(`/job?title=${title}`);
// };


var JobService = {
  getAll: getAll,
  get: get,
  create: create,
  update: update,
  remove: remove,
  getListByUserId: getListByUserId //   removeAll,
  //   findByTitle

};
var _default = JobService;
exports["default"] = _default;