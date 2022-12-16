"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authHeader = _interopRequireDefault(require("./auth-header"));

var _httpCommon = _interopRequireDefault(require("../../http-common"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = 'http://localhost:8080/';

var getAll = function getAll() {
  return _httpCommon["default"].get("profile");
};

var getUserById = function getUserById(id) {
  return _httpCommon["default"].get("profile/me?id=".concat(id), {
    headers: (0, _authHeader["default"])(),
    data: {}
  });
};

var editUser = function editUser(id, data) {
  return _axios["default"].put(baseURL + "profile/edit?id=".concat(id), data, {
    headers: (0, _authHeader["default"])(),
    data: {}
  });
};

var changePassword = function changePassword(data) {
  return _axios["default"].put(baseURL + "profileFreelancer/changePassword", data, {
    headers: (0, _authHeader["default"])(),
    data: {}
  });
};

var _default = {
  getAll: getAll,
  getUserById: getUserById,
  editUser: editUser,
  changePassword: changePassword
};
exports["default"] = _default;