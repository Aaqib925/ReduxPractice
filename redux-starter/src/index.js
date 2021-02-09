import Store from "./store";
import { bugAdded, resolveBug } from "./actions";

Store.dispatch(bugAdded("Hello"));
Store.dispatch(bugAdded("Second bug"));
Store.dispatch(resolveBug(1));
Store.dispatch(resolveBug(2));
console.log(Store.getState());
