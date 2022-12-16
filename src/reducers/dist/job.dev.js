"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/job/types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = [];

function jobReducer() {
  var jobs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _types.CREATE_JOB:
      return [].concat(_toConsumableArray(jobs), [payload]);

    case _types.GET_LIST_BY_USER_ID:
      console.log([].concat(_toConsumableArray(jobs), [payload]));
      return payload;

    case _types.RETRIEVE_JOBS:
      return payload;

    case _types.GET_JOB_ID:
      return payload;
    //   case UPDATE_TUTORIAL:
    //     return tutorials.map((tutorial) => {
    //       if (tutorial.id === payload.id) {
    //         return {
    //           ...tutorial,
    //           ...payload,
    //         };
    //       } else {
    //         return tutorial;
    //       }
    //     });
    //   case DELETE_TUTORIAL:
    //     return tutorials.filter(({ id }) => id !== payload.id);
    //   case DELETE_ALL_TUTORIALS:
    //     return [];

    default:
      return jobs;
  }
}

;
var _default = jobReducer;
exports["default"] = _default;