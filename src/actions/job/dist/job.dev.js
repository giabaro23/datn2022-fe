"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteJob = exports.updateJob = exports.getListJobByUserId = exports.retrieveJobs = exports.createJob = void 0;

var _types = require("./types");

var _job = _interopRequireDefault(require("../../services/job/job.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createJob = function createJob(_ref) {
  var userId = _ref.userId,
      topicName = _ref.topicName,
      workTypeName = _ref.workTypeName,
      payTypeName = _ref.payTypeName,
      name = _ref.name,
      description = _ref.description,
      salaryMin = _ref.salaryMin,
      salaryMax = _ref.salaryMax,
      dueDate = _ref.dueDate,
      location = _ref.location,
      status = _ref.status,
      skills = _ref.skills;
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_job["default"].create({
              userId: userId,
              topicName: topicName,
              workTypeName: workTypeName,
              payTypeName: payTypeName,
              name: name,
              description: description,
              salaryMin: salaryMin,
              salaryMax: salaryMax,
              dueDate: dueDate,
              location: location,
              status: status,
              skills: skills
            }));

          case 3:
            res = _context.sent;
            dispatch({
              type: _types.CREATE_JOB,
              payload: res.data
            });
            return _context.abrupt("return", Promise.resolve(res.data));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", Promise.reject(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.createJob = createJob;

var retrieveJobs = function retrieveJobs() {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_job["default"].getAll());

          case 3:
            res = _context2.sent;
            dispatch({
              type: _types.RETRIEVE_JOBS,
              payload: res.data
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.retrieveJobs = retrieveJobs;

var getListJobByUserId = function getListJobByUserId(_ref2) {
  var userId = _ref2.userId;
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_job["default"].getListByUserId({
              userId: userId
            }));

          case 3:
            res = _context3.sent;
            dispatch({
              type: _types.GET_LIST_BY_USER_ID,
              payload: res.data
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getListJobByUserId = getListJobByUserId;

var updateJob = function updateJob(id, data) {
  return function _callee4(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(_job["default"].update(id, data));

          case 3:
            res = _context4.sent;
            dispatch({
              type: _types.UPDATE_JOB,
              payload: data
            });
            return _context4.abrupt("return", Promise.resolve(res.data));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", Promise.reject(_context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.updateJob = updateJob;

var deleteJob = function deleteJob(id) {
  return function _callee5(dispatch) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_job["default"].remove(id));

          case 3:
            dispatch({
              type: _types.DELETE_JOB,
              payload: {
                id: id
              }
            });
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 6]]);
  };
}; //   export const deleteAllJobs = () => async (dispatch) => {
//     try {
//       const res = await JobService.removeAll();
//       dispatch({
//         type: DELETE_ALL_JobS,
//         payload: res.data,
//       });
//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };
//   export const findJobsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await JobService.findByTitle(title);
//       dispatch({
//         type: RETRIEVE_JobS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };


exports.deleteJob = deleteJob;