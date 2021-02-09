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
