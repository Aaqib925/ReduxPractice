import * as actions from "./actionTypes";
import { createSelector } from "reselect";
export const bugAdded = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const resolveBug = (id) => {
  return {
    type: actions.RESOLVE_BUG,
    payload: {
      id,
    },
  };
};

export const removeBug = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id,
    },
  };
};

export const addProject = (name) => {
  return {
    type: actions.PROJECT_ADDED,
    payload: {
      name,
    },
  };
};

export const addUser = (name) => {
  return {
    type: actions.ADD_USER,
    payload: {
      name,
    },
  };
};

export const bugAssigned = (obj) => {
  return {
    type: actions.ASSIGN_BUG,
    payload: obj,
  };
};

// Selector
// export const getUnresolveBugs = (state) =>
//   state.entities.bugReducer.filter((bug) => !bug.resolved);

// Memoization version for get unresolved bugs from the cache if bugs are not changed

export const getUnresolveBugs = createSelector(
  (state) => state.entities.bugReducer,
  (bugReducer) => bugReducer.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userID) =>
  createSelector(
    (state) => state.entities.bugReducer,
    (bugReducer) => bugReducer.filter((bug) => bug.userId === userID)
  );
