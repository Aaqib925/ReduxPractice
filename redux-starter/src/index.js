import Store from "./store/store";
import { bugAdded, resolveBug, removeBug } from "./store/actions";

Store.dispatch(bugAdded("Hello"));
Store.dispatch(bugAdded("Second bug"));
Store.dispatch(resolveBug(1));
Store.dispatch(resolveBug(2));
Store.dispatch(removeBug(2));
console.log(Store.getState());
