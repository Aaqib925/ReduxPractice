import Store from "./store";

// Store.subscribe(() => {
//   console.log("Store Changed!", Store.getState());
// });

Store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug1",
  },
});

console.log(Store.getState());
