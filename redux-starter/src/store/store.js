import { createStore } from "redux";
import bugReducer from "./bugReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
const reducers = combineReducers({
  bugReducer,
  projectReducer,
});
const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
