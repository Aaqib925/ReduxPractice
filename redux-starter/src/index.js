import Store from "./store/store";
import {
  bugAdded,
  resolveBug,
  removeBug,
  addProject,
  getUnresolveBugs,
} from "./store/actions";

Store.dispatch(bugAdded("Hello"));
Store.dispatch(bugAdded("Second bug"));
Store.dispatch(bugAdded("Hello3"));
Store.dispatch(bugAdded("Hello4"));
Store.dispatch(resolveBug(1));
Store.dispatch(resolveBug(2));
Store.dispatch(removeBug(2));
Store.dispatch(addProject("First Project"));
console.log(Store.getState());

const unResolved = getUnresolveBugs(Store.getState());
console.log(unResolved);
