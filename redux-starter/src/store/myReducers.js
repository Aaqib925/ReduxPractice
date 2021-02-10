import { combineReducers } from "redux";
import bugReducer from "./bugReducer";
import projectReducer from "./projectReducer";
import users from "./userReducer";
const entities = combineReducers({
  bugReducer,
  projectReducer,
  users,
});
const allReducers = combineReducers({
  entities,
});

export default allReducers;
