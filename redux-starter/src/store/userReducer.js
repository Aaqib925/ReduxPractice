import { ADD_USER } from "./actionTypes";
let lastID = 0;
const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
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

export default userReducer;
