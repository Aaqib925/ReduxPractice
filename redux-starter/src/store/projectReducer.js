import { PROJECT_ADDED } from "./actionTypes";
let lastID = 0;
const projectReducer = (state = [], action) => {
  switch (action.type) {
    case PROJECT_ADDED:
      return [
        ...state,
        {
          id: ++lastID,
          name: action.payload.name,
        },
      ];
    default:
      return state;
  }
};

export default projectReducer;
