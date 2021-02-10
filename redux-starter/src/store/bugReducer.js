import * as actions from "./actionTypes";
let lastID = 0;

const bugReducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id != action.payload.id);
    case actions.RESOLVE_BUG:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    case actions.ASSIGN_BUG: {
      const { bugID, userID } = action.payload;
      const state2 = [...state];
      const index = state2.findIndex((bug) => bug.id == bugID);
      const newField = { ...state2[index] };
      newField.userId = userID;
      state2[index] = newField;
      return state2;
    }
    default:
      return state;
  }
};

export default bugReducer;
