"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserById = exports.changePassword = exports.editUser = exports.getListUser = void 0;

var _types = require("./types");

var _user = _interopRequireDefault(require("../../services/auth/user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getListUser = function getListUser() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_user["default"].getAll());

          case 3:
            res = _context.sent;
            dispatch({
              type: _types.GET_USER_ALL,
              payload: res.data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getListUser = getListUser;

var editUser = function editUser(id, data) {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_user["default"].editUser(id, data));

          case 3:
            res = _context2.sent;
            dispatch({
              type: _types.UPDATE_USER,
              payload: data
            });
            return _context2.abrupt("return", Promise.resolve(res.data));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", Promise.reject(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.editUser = editUser;

var changePassword = function changePassword(email, data) {
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_user["default"].changePassword(email, data));

          case 3:
            res = _context3.sent;
            console.log(res);
            dispatch({
              type: _types.UPDATE_USER,
              payload: data
            });
            return _context3.abrupt("return", Promise.resolve(res.data));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", Promise.reject(_context3.t0));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.changePassword = changePassword;

var getUserById = function getUserById(id) {
  return function _callee4(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(_user["default"].getUserById(id));

          case 3:
            res = _context4.sent;

            if (res.data) {
              dispatch({
                type: _types.GET_USER,
                payload: res.data[0]
              });
            }

            _context4.next = 9;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getUserById = getUserById;