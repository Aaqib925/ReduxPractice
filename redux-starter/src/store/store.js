// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import reducer from "./reducer";

// const Store = createStore(reducer, applyMiddleware(thunkMiddleware));

// export default Store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const Store = configureStore({ reducer });

export default Store;
