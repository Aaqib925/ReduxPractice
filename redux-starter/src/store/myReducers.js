import { combineReducers } from "redux";
import bugReducer from "./bugReducer";
import projectReducer from "./projectReducer";

const entities = combineReducers({
  bugReducer,
  projectReducer,
});
const allReducers = combineReducers({
  entities,
});

export default allReducers;
