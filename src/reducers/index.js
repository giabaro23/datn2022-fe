import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";//sao lại đây ???
import jobReducer from "./job";
import categoryReducer from "./category";
import categoryAllReducer from "./categoryAll";
import message from "./message";
import getUserReducer from "./getUser";

export default combineReducers({
  message,
  authReducer,
  userReducer,
  jobReducer,
  categoryReducer,
  categoryAllReducer,
  getUserReducer
});