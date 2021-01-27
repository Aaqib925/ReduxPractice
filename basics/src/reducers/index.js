import { combineReducers } from "redux";
import counter from "./counter";
import isLogged from "./islogged";

const combinedReducers = combineReducers({
  counter,
  isLogged,
});

export default combinedReducers;
