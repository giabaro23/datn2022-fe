"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/auth/types");

var initialState = [];

function getUserReducer() {
  var users = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _types.GET_USER_ALL:
      return payload;

    default:
      return users;
  }
}

;
var _default = getUserReducer;
exports["default"] = _default;