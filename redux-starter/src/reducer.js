let lastID = 0;

const reducer = (state = [], action) => {
  switch (action.tyoe)
  {
    case "BUG_ADDED":
        return [
              ...state,
              {
                  id = ++lastID,
                  description: action.payload.description,
                  resolved: false
              }
          ];
    case "BUG_REMOVED":
        return state.filter(bug => bug.id != action.payload.id);

    default:
        return state;
  }
}

export default reducer;