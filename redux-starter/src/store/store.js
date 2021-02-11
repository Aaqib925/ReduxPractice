// import { createStore } from "redux";
// import bugReducer from "./bugReducer";
// import projectReducer from "./projectReducer";
// import { combineReducers } from "redux";
// const reducers = combineReducers({
//   bugReducer,
//   projectReducer,
// });
// const Store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./myReducers";
import logger from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
const Store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger("console"), errorHandler],
});

export default Store;
