import authLogin from "./authReducer";
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import createUserReducer from "./createUserReducer";

const reducers = combineReducers({
  signUpReducer,
  authLogin,
  createUserReducer,
});

export default reducers;
