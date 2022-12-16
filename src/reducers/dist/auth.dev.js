"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/auth/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = JSON.parse(localStorage.getItem("user"));
var initialState = {
  isLoggedIn: user ? true : false,
  user: user
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _types.REGISTER_SUCCESS:
      return _objectSpread({}, state, {
        isLoggedIn: false
      });

    case _types.REGISTER_FAIL:
      return _objectSpread({}, state, {
        isLoggedIn: false
      });

    case _types.LOGIN_SUCCESS:
      return _objectSpread({}, state, {
        isLoggedIn: true,
        user: payload.user
      });

    case _types.LOGIN_FAIL:
      return _objectSpread({}, state, {
        isLoggedIn: false,
        user: null
      });

    case _types.LOGOUT:
      return _objectSpread({}, state, {
        isLoggedIn: false,
        user: null
      });

    case _types.UPDATE_USER:
      return _objectSpread({}, state, {
        user: payload
      });

    default:
      return state;
  }
};

var _default = authReducer;
exports["default"] = _default;