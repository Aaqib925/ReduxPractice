import Store from "./store/store";
import {
  bugAdded,
  resolveBug,
  removeBug,
  addProject,
  addUser,
  bugAssigned,
  getUnresolveBugs,
  getBugsByUser,
} from "./store/actions";

Store.dispatch(addUser("User 1"));
Store.dispatch(addUser("User 2"));
Store.dispatch(bugAdded("Hello"));
Store.dispatch(bugAdded("Second bug"));
Store.dispatch(bugAdded("Hello3"));
Store.dispatch(bugAdded("Hello4"));
Store.dispatch(bugAssigned({ bugID: 1, userID: 1 }));
Store.dispatch(bugAssigned({ bugID: 4, userID: 2 }));
Store.dispatch(resolveBug(1));
Store.dispatch(resolveBug(2));
Store.dispatch(removeBug(2));
Store.dispatch(addProject("First Project"));
console.log(Store.getState());

const unResolved = getUnresolveBugs(Store.getState());

const getUserBugs = getBugsByUser(1)(Store.getState());
console.log(unResolved);
console.log(getUserBugs);
