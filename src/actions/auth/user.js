import {
  GET_USER,
  UPDATE_USER,
  GET_USER_ALL,
  CHANGE_PASSWORD
} from "./types";

import userService from "../../services/auth/user.service";


export const getListUser = () => async (dispatch) => {
  try {
    const res = await userService.getAll();
    dispatch({
      type: GET_USER_ALL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const editUser = (id, data) => async (dispatch) => {
  try {
    const res = await userService.editUser(id, data);
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const changePassword = (email, data) => async (dispatch) => {
  try {
    const res = await userService.changePassword(email, data);
    console.log(res)
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await userService.getUserById(id);
    if(res.data) {
      dispatch({
        type: GET_USER,
        payload: res.data[0],
      })
    }
  } catch (error) {

  }
}