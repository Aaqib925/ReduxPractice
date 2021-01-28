let lastID = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id != action.payload.id);
    default:
      return state;
  }
};

export default reducer;
