import * as actions from "./actionTypes";

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
